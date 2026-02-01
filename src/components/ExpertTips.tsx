import { ExpertTip } from "@/data/location-geo-data";
import { Lightbulb } from "lucide-react";

interface ExpertTipsProps {
    tips: ExpertTip[];
    location: string;
}

export default function ExpertTips({ tips, location }: ExpertTipsProps) {
    if (!tips || tips.length === 0) {
        return null;
    }

    return (
        <div className="w-full bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg border border-amber-200 shadow-sm mt-12 p-8">
            <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-amber-100 rounded-full">
                    <Lightbulb className="h-6 w-6 text-amber-600" />
                </div>
                <div>
                    <h2 className="text-2xl font-bold text-gray-900">What to Know Before You Book</h2>
                    <p className="text-gray-600 mt-1">Expert tips for finding the perfect hot tub hotel in {location}</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tips.map((tip, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-lg p-6 shadow-sm border border-amber-100 hover:shadow-md transition-shadow"
                    >
                        <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-start gap-2">
                            <span className="flex-shrink-0 w-6 h-6 bg-amber-100 text-amber-700 rounded-full flex items-center justify-center text-sm font-bold">
                                {index + 1}
                            </span>
                            <span>{tip.title}</span>
                        </h3>
                        <p className="text-gray-700 leading-relaxed">{tip.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
