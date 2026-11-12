import type { Hotel } from "@/data/hotels";

/* ------------------------------------------------------------------ */
/*  Programmatic long-form content for hotels.                          */
/*  Generates a hotel-specific description and a "why book" section     */
/*  (each up to ~300 words) from the hotel's structured data.           */
/* ------------------------------------------------------------------ */

function clean(text: string): string {
  return text.replace(/\s+/g, " ").trim();
}

export function cityOf(hotel: Hotel): string {
  const parts = hotel.address
    .split(",")
    .map((part) => part.trim())
    .filter(Boolean);
  // "8 Mission St, San Francisco, CA 94105" -> parts[len-3] = "San Francisco"
  // "38 Leicester Square, London, England, WC2H 7LL" -> parts[len-3] = "London"
  if (parts.length >= 3) return parts[parts.length - 3];
  if (parts.length === 2) return parts[0];
  return parts[0] || "the area";
}

function priceNum(hotel: Hotel): number {
  const n = parseFloat(hotel.price.replace(/[^0-9.]/g, ""));
  return Number.isFinite(n) ? n : 0;
}

type Tier = "budget" | "mid-range" | "luxury";

function tier(hotel: Hotel): Tier {
  const p = priceNum(hotel);
  if (hotel.rating >= 4.5 || p >= 500) return "luxury";
  if (p < 300) return "budget";
  return "mid-range";
}

function starWord(rating: number): string {
  if (rating >= 4.5) return "five-star";
  if (rating >= 4) return "upscale";
  if (rating >= 3) return "well-reviewed";
  return "value-focused";
}

function audience(hotel: Hotel): string {
  const d = `${hotel.description} ${hotel.vibe || ""}`.toLowerCase();
  if (/couple|romantic|honeymoon|anniversary|date|two/.test(d)) return "couples planning a romantic escape";
  if (/family|children|kid|crib/.test(d)) return "families";
  if (/business|convention|conference|meeting|executive/.test(d)) return "business travelers";
  if (/pet/.test(d)) return "pet owners";
  return "travelers who want comfort with easy access to the sights";
}

function amenities(hotel: Hotel): string[] {
  const d = `${hotel.description} ${hotel.tags.join(" ")}`.toLowerCase();
  const found: string[] = [];
  const checks: Array<[RegExp, string]> = [
    [/spa|wellness|sauna|steam/, "a full-service spa and wellness facilities"],
    [/hot tub|jacuzzi|whirlpool|jetted/, "a hot tub or whirlpool for post-sightseeing recovery"],
    [/rooftop/, "a rooftop area with skyline views"],
    [/pool/, "an inviting pool"],
    [/ocean|beach|waterfront|bay|harbor|sound/, "a prime waterfront or coastal setting"],
    [/view|panoramic|skyline/, "sweeping city or water views"],
    [/pet-friendly|pet friendly/, "pet-friendly accommodations"],
    [/breakfast/, "breakfast included or available on-site"],
    [/restaurant|dining|cuisine|bar/, "on-site dining and drinks"],
    [/gym|fitness/, "a well-equipped fitness center"],
  ];
  for (const [re, label] of checks) {
    if (re.test(d)) found.push(label);
  }
  return Array.from(new Set(found)).slice(0, 4);
}

export function expandDescription(hotel: Hotel): string {
  const city = cityOf(hotel);
  const t = tier(hotel);
  const aud = audience(hotel);
  const am = amenities(hotel);
  const core = clean(hotel.description);

  const opening =
    `${hotel.name} is a ${starWord(hotel.rating)} hotel in ${city} that consistently earns praise from guests — it holds a ${hotel.rating}/5 rating based on ${hotel.reviews.toLocaleString()} reviews. From the moment you arrive, the property sets the tone for a relaxed, restorative stay, whether you're here for a special occasion or simply to slow down and unwind.`;

  const experience =
    `What guests notice first is the attention to detail. ${core}` +
    (am.length
      ? ` On the amenity front, the hotel offers ${am.join(", ")} — the kind of details that turn a standard overnight into a proper getaway.`
      : "") +
    (hotel.vibe
      ? ` The overall character is best described as ${hotel.vibe.toLowerCase()}, and it shows up in everything from the decor to the style of service.`
      : "");

  const value =
    `When it comes to value, rooms start around $${hotel.price} per night. ` +
    (t === "luxury"
      ? "That places it firmly in the premium bracket, and the level of comfort, service, and location justifies the spend for travelers who want a no-compromise experience."
      : t === "budget"
      ? "That's an easy yes for travelers who want a comfortable, well-located base without stretching the budget — and it leaves room in the trip for dining and activities."
      : "That's a fair mid-range rate for the standard of comfort and the location you get.") +
    ` It's an especially good match for ${aud}, and its position in ${city} means the main attractions, restaurants, and transit links are never far away.`;

  return clean(`${opening} ${experience} ${value}`);
}

export function buildWhyBook(hotel: Hotel) {
  const city = cityOf(hotel);
  const t = tier(hotel);
  const aud = audience(hotel);
  const am = amenities(hotel);

  const reasons: string[] = [
    `Proven quality you can trust — with a ${hotel.rating}/5 rating from ${hotel.reviews.toLocaleString()} verified guest reviews, ${hotel.name} is one of ${city}'s most dependable places to stay. Guests repeatedly point to the consistent service and comfortable rooms as the reasons they'd return.`,

    `${
      t === "luxury"
        ? "Premium comfort worth the price"
        : t === "budget"
        ? "Serious value for money"
        : "A fair price for the comfort"
    } — at around $${hotel.price} a night, ${
      t === "luxury"
        ? "you're paying for five-star comfort, thoughtful service, and a polished experience from check-in to check-out."
        : t === "budget"
        ? "you get a comfortable, well-located room without overspending — ideal for longer stays or quick weekend trips."
        : "you get a comfortable stay and a convenient location at a price that feels fair."
    }`,
  ];

  if (am.length > 0) {
    reasons.push(
      `Amenities that make the difference — ${am.join(", ")}. These aren't just add-ons; they're what turn the stay from ordinary into genuinely restorative.`
    );
  }

  if (hotel.vibe) {
    reasons.push(
      `A distinctive atmosphere — the ${hotel.vibe.toLowerCase()} character gives the property a real sense of place, so it never feels like a generic chain hotel.`
    );
  }

  reasons.push(
    `The right location and the right fit — it's ideal for ${aud}, with ${city}'s highlights, dining, and transport all within easy reach.`
  );

  const summary = hotel.whyBook
    ? hotel.whyBook
    : `The bottom line: if you want a ${starWord(hotel.rating)} stay in ${city} that combines ${
        am.length > 0 ? am.slice(0, 2).join(" and ") : "comfort and convenience"
      }, ${hotel.name} is a safe, well-reviewed choice that delivers real value for your money.`;

  return { reasons, summary };
}
