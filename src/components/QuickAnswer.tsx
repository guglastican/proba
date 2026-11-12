import { Hotel } from "@/data/hotels";
import { SentimentSummary } from "@/data/location-geo-data";

interface QuickAnswerProps {
  location: string;
  q: string;
  hotels: Hotel[];
  summary?: SentimentSummary;
}

function parsePrice(price: string): number {
  const n = parseFloat(price.replace(/[^0-9.]/g, ""));
  return Number.isFinite(n) && n > 0 ? n : NaN;
}

export default function QuickAnswer({ location, q, hotels, summary }: QuickAnswerProps) {
  if (!hotels || hotels.length === 0) return null;

  const top = hotels[0];
  const runnerUp = hotels[1];

  const prices = hotels
    .map((hotel) => parsePrice(hotel.price))
    .filter((n) => Number.isFinite(n));
  const minPrice = prices.length ? Math.min(...prices) : null;
  const maxPrice = prices.length ? Math.max(...prices) : null;
  const avgRating = (hotels.reduce((sum, hotel) => sum + hotel.rating, 0) / hotels.length).toFixed(1);

  return (
    <section
      className="rounded-2xl border border-emerald-200 bg-emerald-50/70 p-6 shadow-sm"
      aria-label="Quick answer"
    >
      <span className="inline-block rounded-full bg-emerald-600 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
        Quick Answer
      </span>

      <p className="mt-3 text-lg font-medium leading-relaxed text-gray-900">
        The best hotels with {q.toLowerCase()} in {location} are{" "}
        <strong>{top.name}</strong>
        {runnerUp ? (
          <>
            {" "}and <strong>{runnerUp.name}</strong>
          </>
        ) : null}
        {minPrice !== null && maxPrice !== null ? (
          <>
            {", "}with rates from <strong>${minPrice}</strong> to <strong>${maxPrice}</strong> per
            night.
          </>
        ) : (
          "."
        )}
      </p>

      <dl className="mt-5 grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-3">
        <div>
          <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500">Top pick</dt>
          <dd className="mt-0.5 font-semibold text-gray-900">
            {top.name} · {top.rating}/5
          </dd>
        </div>
        {minPrice !== null && maxPrice !== null && (
          <div>
            <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500">Price range</dt>
            <dd className="mt-0.5 font-semibold text-gray-900">
              ${minPrice}–${maxPrice}/night
            </dd>
          </div>
        )}
        <div>
          <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500">Average rating</dt>
          <dd className="mt-0.5 font-semibold text-gray-900">{avgRating}/5</dd>
        </div>
        {summary?.bestFor && (
          <div>
            <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500">Best for</dt>
            <dd className="mt-0.5 font-semibold text-gray-900">{summary.bestFor}</dd>
          </div>
        )}
        {summary?.bestTime && (
          <div>
            <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500">Best time</dt>
            <dd className="mt-0.5 font-semibold text-gray-900">{summary.bestTime}</dd>
          </div>
        )}
        <div>
          <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500">Hotels listed</dt>
          <dd className="mt-0.5 font-semibold text-gray-900">{hotels.length}</dd>
        </div>
      </dl>
    </section>
  );
}
