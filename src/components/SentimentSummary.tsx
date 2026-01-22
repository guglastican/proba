import { SentimentSummary as SentimentSummaryType } from "@/data/location-geo-data";
import { Info, Sparkles, Clock } from "lucide-react";

interface SentimentSummaryProps {
    summary: SentimentSummaryType;
}

export default function SentimentSummary({ summary }: SentimentSummaryProps) {
    if (!summary) return null;

    return (
        <div className="w-full bg-blue-50 border-2 border-blue-200 rounded-xl p-6 shadow-sm mb-12">
            <div className="flex flex-col md:flex-row items-stretch gap-6">
                <div className="flex-1 flex items-start gap-4">
                    <div className="p-3 bg-blue-100 rounded-lg shrink-0">
                        <Sparkles className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                        <h3 className="text-sm font-bold text-blue-900 uppercase tracking-wider mb-1">
                            Best For
                        </h3>
                        <p className="text-lg font-semibold text-gray-900 leading-tight">
                            {summary.bestFor}
                        </p>
                    </div>
                </div>

                <div className="hidden md:block w-px bg-blue-200" />

                <div className="flex-1 flex items-start gap-4">
                    <div className="p-3 bg-blue-100 rounded-lg shrink-0">
                        <Info className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                        <h3 className="text-sm font-bold text-blue-900 uppercase tracking-wider mb-1">
                            Top Highlight
                        </h3>
                        <p className="text-lg font-semibold text-gray-900 leading-tight">
                            {summary.topHighlight}
                        </p>
                    </div>
                </div>

                <div className="hidden md:block w-px bg-blue-200" />

                <div className="flex-1 flex items-start gap-4">
                    <div className="p-3 bg-blue-100 rounded-lg shrink-0">
                        <Clock className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                        <h3 className="text-sm font-bold text-blue-900 uppercase tracking-wider mb-1">
                            Best Time to Visit
                        </h3>
                        <p className="text-lg font-semibold text-gray-900 leading-tight">
                            {summary.bestTime}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
