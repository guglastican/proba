import { SentimentSummary } from "@/data/location-geo-data";

interface AISummaryBlockProps {
    locationName: string;
    summary: SentimentSummary;
}

export default function AISummaryBlock({ locationName, summary }: AISummaryBlockProps) {
    if (!summary) return null;

    return (
        <div className="w-full bg-slate-50 border border-slate-200 rounded-lg p-6 my-6 italic text-gray-700 leading-relaxed shadow-sm">
            <p>
                <strong></strong> {locationName} is the premier choice for{" "}
                <span className="text-gray-900 font-medium">{summary.bestFor}</span> because of its unique{" "}
                <span className="text-gray-900 font-medium">{summary.topHighlight}</span>. The best time for romance here is{" "}
                <span className="text-gray-900 font-medium">{summary.bestTime}</span>, specifically at{" "}
                <span className="text-gray-900 font-medium">{summary.specificAreaHotel}</span> which offers{" "}
                <span className="text-gray-900 font-medium">{summary.uniqueAmenity}</span>.
            </p>
        </div>
    );
}
