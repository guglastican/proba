import { ExpertTip } from "@/data/location-geo-data";
import { Lightbulb } from "lucide-react";
import { cn } from "@/lib/utils";

interface ExpertTipsProps {
    tips: ExpertTip[];
    location: string;
    className?: string;
}

export default function ExpertTips({ tips, location, className }: ExpertTipsProps) {
    if (!tips || tips.length === 0) {
        return null;
    }

    return (
        <div className={cn("w-full bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl border border-amber-200 shadow-sm p-8 md:p-12", className)}>
            <div className="flex items-center gap-4 mb-10">
                <div className="p-4 bg-amber-100 rounded-2xl shadow-inner">
                    <Lightbulb className="h-8 w-8 text-amber-600" />
                </div>
                <div>
                    <h2 className="text-3xl font-black text-gray-900 tracking-tight">Expert Booking Tips</h2>
                    <p className="text-gray-600 font-medium">Insider advice for {location}</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {tips.map((tip, index) => (
                    <div
                        key={index}
                        className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-sm border border-amber-100/50 hover:shadow-md hover:bg-white transition-all group"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <span className="flex-shrink-0 w-8 h-8 rounded-lg premium-gradient text-white flex items-center justify-center text-sm font-bold shadow-lg group-hover:scale-110 transition-transform">
                                {index + 1}
                            </span>
                            <h3 className="text-xl font-bold text-gray-900">{tip.title}</h3>
                        </div>
                        <p className="text-gray-600 leading-relaxed text-sm">{tip.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
