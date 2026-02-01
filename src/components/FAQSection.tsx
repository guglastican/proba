"use client";

import { FAQ } from "@/data/location-geo-data";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface FAQSectionProps {
    faqs: FAQ[];
    location: string;
    className?: string;
}

export default function FAQSection({ faqs, location, className }: FAQSectionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    if (!faqs || faqs.length === 0) {
        return null;
    }

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    // Generate FAQ Schema for SEO
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <div className={cn("w-full bg-white rounded-3xl border border-gray-100 shadow-sm p-8 md:p-12", className)}>
                <div className="mb-10">
                    <h2 className="text-3xl font-black text-gray-900 mb-2 tracking-tight">
                        Common Inquiries
                    </h2>
                    <p className="text-gray-500 font-medium">
                        Everything you need to know about {location}
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="group border border-gray-100 rounded-2xl overflow-hidden active:scale-[0.99] transition-all"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className={cn(
                                    "w-full px-8 py-5 text-left flex items-center justify-between transition-all",
                                    openIndex === index ? "bg-primary/5" : "bg-white hover:bg-gray-50"
                                )}
                                aria-expanded={openIndex === index}
                            >
                                <h3 className={cn(
                                    "text-lg font-bold pr-4 transition-colors",
                                    openIndex === index ? "text-primary" : "text-gray-900"
                                )}>
                                    {faq.question}
                                </h3>
                                <div className={cn(
                                    "p-2 rounded-lg transition-all",
                                    openIndex === index ? "bg-primary text-white rotate-180" : "bg-gray-100 text-gray-400 group-hover:bg-gray-200"
                                )}>
                                    <ChevronDown className="h-4 w-4" />
                                </div>
                            </button>

                            {openIndex === index && (
                                <div className="px-8 pb-6 pt-2 bg-primary/5">
                                    <p className="text-gray-600 leading-relaxed text-sm antialiased">{faq.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
