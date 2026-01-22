import { locationDescriptions } from "@/data/location-descriptions";
import { MapPin, Utensils, Info, User } from "lucide-react";
import Image from "next/image";

interface LocationOverviewProps {
    location: string;
}

export default function LocationOverview({ location }: LocationOverviewProps) {
    const data = locationDescriptions[location as keyof typeof locationDescriptions];

    if (!data) return null;

    return (
        <div className="space-y-12 my-12">
            {/* Author/Expert Bio - Increases Trustworthiness (E-E-A-T) */}
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm flex flex-col md:flex-row items-center gap-6">
                <div className="shrink-0">
                    <div className="relative w-20 h-20 rounded-full overflow-hidden bg-gray-100 border-2 border-blue-50">
                        <Image
                            src={data.author.photo}
                            alt={data.author.name}
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
                <div className="text-center md:text-left">
                    <h4 className="font-bold text-gray-900">{data.author.name}</h4>
                    <p className="text-sm text-blue-600 font-medium mb-2">{data.author.title}</p>
                    <p className="text-sm text-gray-600 italic leading-relaxed">"{data.author.bio}"</p>
                </div>
            </div>

            {/* Main Overview */}
            <section className="prose prose-blue max-w-none">
                <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Info className="text-blue-600" />
                    Exploring {location}
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed italic">
                    {data.overview}
                </p>
            </section>

            {/* Entity Mapping: Attractions and Dining */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                    <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                        <MapPin className="text-red-500" />
                        Must-See Landmarks
                    </h3>
                    <div className="space-y-4">
                        {data.attractions.map((attraction, i) => (
                            <div key={i} className="bg-gray-50 rounded-lg p-4 border-l-4 border-blue-500">
                                <h4 className="font-bold text-gray-900">{attraction.title}</h4>
                                <p className="text-sm text-gray-600 mt-1">{attraction.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="space-y-6">
                    <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                        <Utensils className="text-green-500" />
                        Vibrant Dining Scenes
                    </h3>
                    <div className="space-y-4">
                        {data.dining.map((item, i) => (
                            <div key={i} className="bg-gray-50 rounded-lg p-4 border-l-4 border-green-500">
                                <h4 className="font-bold text-gray-900">{item.title}</h4>
                                <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Nearby Context */}
            <div className="bg-blue-600 text-white rounded-xl p-8 text-center shadow-lg">
                <h3 className="text-xl font-bold mb-4">Planning your trip to {location}?</h3>
                <p className="text-blue-100 max-w-2xl mx-auto">
                    {data.nearbyDestinations}
                </p>
            </div>
        </div>
    );
}
