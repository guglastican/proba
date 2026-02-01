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
        <div className="w-full overflow-hidden rounded-[2.5rem] border border-gray-100 shadow-xl bg-white mt-12">
            <div className="p-10 border-b border-gray-50 flex items-center justify-between gap-4 flex-wrap bg-gray-50/30">
                <div>
                    <h2 className="text-3xl font-black text-gray-900 tracking-tight">Direct Comparison</h2>
                    <p className="text-gray-500 font-medium">Objective data to help you decide on {hotels.length} verified options.</p>
                </div>
                <div className="bg-primary/10 text-primary px-6 py-2 rounded-full text-sm font-black">
                    {hotels.length} STAYS
                </div>
            </div>
            <div className="overflow-auto">
                <Table>
                    <TableHeader>
                        <TableRow className="bg-gray-50/50 hover:bg-gray-50/50">
                            <TableHead className="w-[300px] font-black text-xs uppercase tracking-widest text-gray-400 py-6 px-10">Hotel Name</TableHead>
                            <TableHead className="font-black text-xs uppercase tracking-widest text-gray-400 py-6 px-6">Rating</TableHead>
                            <TableHead className="font-black text-xs uppercase tracking-widest text-gray-400 py-6 px-6">Price</TableHead>
                            <TableHead className="hidden lg:table-cell font-black text-xs uppercase tracking-widest text-gray-400 py-6 px-6">Vibe</TableHead>
                            <TableHead className="hidden md:table-cell font-black text-xs uppercase tracking-widest text-gray-400 py-6 px-6">Top Features</TableHead>
                            <TableHead className="text-right font-black text-xs uppercase tracking-widest text-gray-400 py-6 px-10">Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {hotels.map((hotel) => (
                            <TableRow key={hotel.id} className="hover:bg-primary/5 transition-colors border-gray-50 group">
                                <TableCell className="py-8 px-10">
                                    <Link href={hotel.link} target="_blank" rel="noopener noreferrer" className="block">
                                        <span className="font-black text-lg text-gray-900 group-hover:text-primary transition-colors block leading-tight">{hotel.name}</span>
                                        <span className="text-xs text-gray-400 block mt-2 font-medium">{hotel.address.split(',')[0]}</span>
                                    </Link>
                                </TableCell>
                                <TableCell className="py-8 px-6">
                                    <div className="flex items-center gap-2">
                                        <span className="font-black text-gray-900 text-lg">{hotel.rating}</span>
                                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                    </div>
                                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">{hotel.reviews.toLocaleString()} REVIEWS</span>
                                </TableCell>
                                <TableCell className="py-8 px-6">
                                    <div className="flex flex-col">
                                        <span className="font-black text-gray-900 text-lg">${hotel.price}</span>
                                        <span className="text-[10px] font-bold text-gray-400 uppercase">per night</span>
                                    </div>
                                </TableCell>
                                <TableCell className="hidden lg:table-cell py-8 px-6 italic text-gray-500 font-medium max-w-[200px]">
                                    "{hotel.vibe || "Romantic relaxation"}"
                                </TableCell>
                                <TableCell className="hidden md:table-cell py-8 px-6">
                                    <div className="flex flex-wrap gap-2">
                                        {hotel.tags.slice(0, 2).map((tag) => (
                                            <Badge key={tag} variant="outline" className="text-[10px] font-black uppercase tracking-widest bg-gray-50 border-gray-200 text-gray-400 px-3 py-1">
                                                {tag}
                                            </Badge>
                                        ))}
                                    </div>
                                </TableCell>
                                <TableCell className="py-8 px-10 text-right">
                                    <Link
                                        href={hotel.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center rounded-2xl text-xs font-black uppercase tracking-widest transition-all h-12 px-8 bg-gray-900 text-white hover:bg-primary hover:shadow-lg group-hover:scale-105"
                                    >
                                        View
                                    </Link>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}
