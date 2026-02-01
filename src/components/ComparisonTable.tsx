"use client";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Hotel } from "@/data/hotels";
import { Star } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

interface ComparisonTableProps {
    hotels: Hotel[];
}

export default function ComparisonTable({ hotels }: ComparisonTableProps) {
    if (!hotels || hotels.length === 0) {
        return null;
    }

    return (
        <div className="w-full overflow-auto rounded-lg border border-gray-200 shadow-sm mt-12 bg-white">
            <div className="p-6 border-b border-gray-100">
                <h2 className="text-2xl font-bold">Hotel Comparison</h2>
                <p className="text-gray-500 mt-1">Compare features, ratings, and prices to find your perfect stay.</p>
            </div>
            <Table>
                <TableHeader>
                    <TableRow className="bg-gray-50/50">
                        <TableHead className="w-[300px] font-semibold text-gray-900">Hotel Name</TableHead>
                        <TableHead className="font-semibold text-gray-900">Rating</TableHead>
                        <TableHead className="font-semibold text-gray-900">Price</TableHead>
                        <TableHead className="hidden lg:table-cell font-semibold text-gray-900">Vibe / Ideal For</TableHead>
                        <TableHead className="font-semibold text-gray-900">Reviews</TableHead>
                        <TableHead className="hidden md:table-cell font-semibold text-gray-900">Top Features</TableHead>
                        <TableHead className="text-right font-semibold text-gray-900">Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {hotels.map((hotel) => (
                        <TableRow key={hotel.id} className="hover:bg-gray-50/50 transition-colors">
                            <TableCell className="font-medium text-blue-600">
                                <Link href={hotel.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                                    {hotel.name}
                                </Link>
                                <div className="md:hidden text-xs text-gray-500 mt-1 truncate max-w-[200px]">
                                    {hotel.address}
                                </div>
                            </TableCell>
                            <TableCell>
                                <div className="flex items-center gap-1 font-medium">
                                    {hotel.rating}
                                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                </div>
                            </TableCell>
                            <TableCell className="font-medium">${hotel.price}</TableCell>
                            <TableCell className="hidden lg:table-cell italic text-gray-500">
                                {hotel.vibe || "Romantic relaxation"}
                            </TableCell>
                            <TableCell className="text-gray-600">{hotel.reviews.toLocaleString()}</TableCell>
                            <TableCell className="hidden md:table-cell">
                                <div className="flex flex-wrap gap-1">
                                    {hotel.tags.slice(0, 3).map((tag) => (
                                        <Badge key={tag} variant="outline" className="text-xs bg-gray-50 font-normal text-gray-600">
                                            {tag}
                                        </Badge>
                                    ))}
                                    {hotel.tags.length > 3 && (
                                        <span className="text-xs text-gray-400 flex items-center">+{hotel.tags.length - 3}</span>
                                    )}
                                </div>
                            </TableCell>
                            <TableCell className="text-right">
                                <Link
                                    href={hotel.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-4 py-2 bg-blue-600 text-white hover:bg-blue-700"
                                >
                                    View
                                </Link>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}
