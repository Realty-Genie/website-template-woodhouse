"use client"

import { Button } from "@/components/ui/button";
import { FaStar } from "react-icons/fa";

const staticReviews = [
    {
        id: "1",
        reviewerName: "Sarah & Michael Thompson",
        starRating: 5,
        comment: "Professional, responsive, and incredibly strategic. We sold above asking in just 9 days. The team's market insight gave us confidence in a competitive market. Highly recommend Woodhouse Realty!",
        dateAdded: "2025-12-15"
    },
    {
        id: "2",
        reviewerName: "David Chen",
        starRating: 5,
        comment: "As first-time buyers, we were nervous about the process. The team guided us through every step with patience and expertise. We found our dream home in Vancouver within our budget.",
        dateAdded: "2025-11-28"
    },
    {
        id: "3",
        reviewerName: "Jennifer Walsh",
        starRating: 5,
        comment: "Sold my luxury property in West Vancouver with Woodhouse Realty. Their marketing strategy was exceptional - multiple offers and a great final price. Professional throughout the entire process.",
        dateAdded: "2025-10-20"
    },
    {
        id: "4",
        reviewerName: "Robert & Linda Park",
        starRating: 5,
        comment: "We relocated from Toronto to BC and needed experts who knew the local market. Woodhouse Realty made the transition seamless. Found us a great investment property.",
        dateAdded: "2025-09-15"
    },
    {
        id: "5",
        reviewerName: "Amanda Foster",
        starRating: 5,
        comment: "Their market intelligence is top-notch. They helped us price our property perfectly and we received multiple offers in the first week. Outstanding service from start to finish.",
        dateAdded: "2025-08-22"
    },
    {
        id: "6",
        reviewerName: "Marcus Johnson",
        starRating: 5,
        comment: "Working with Woodhouse Realty for my investment properties has been fantastic. Their strategic advice and market analysis have helped me grow my portfolio significantly.",
        dateAdded: "2025-07-10"
    }
]

export default function Testimonials() {
    return (
        <section id="testimonials" className="py-20 bg-background text-foreground">
            <div className="container mx-auto px-6 md:px-12">
                {/* Header */}
                <div className="text-center mb-16 space-y-4">
                    <span className="text-primary text-sm font-medium tracking-[0.3em] uppercase opacity-90 block">
                        Client Stories
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
                        Trusted by Buyers & Sellers Across BC
                    </h2>
                    <div className="w-20 h-[1px] bg-primary mx-auto mt-6 opacity-60" />
                </div>

                {/* Reviews Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {staticReviews.map((review) => (
                        <div
                            key={review.id}
                            className="bg-card border border-border rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 flex flex-col h-full"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-3">
                                    <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
                                        <svg
                                            className="size-5 text-primary/40"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-serif font-medium text-foreground text-sm">
                                            {review.reviewerName}
                                        </h4>
                                        <div className="flex gap-1 mt-0.5">
                                            {[...Array(5)].map((_, i) => (
                                                <FaStar
                                                    key={i}
                                                    className={`size-2.5 ${i < review.starRating ? "text-[#C5A059]" : "text-gray-600"}`}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex-1">
                                <div className="text-muted-foreground font-light leading-relaxed text-sm">
                                    &ldquo;{review.comment}&rdquo;
                                </div>
                            </div>

                            <div className="mt-4 pt-4 border-t border-border text-xs text-muted-foreground uppercase tracking-widest">
                                {new Date(review.dateAdded).toLocaleDateString(undefined, {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })}
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-16 text-center flex justify-center">
                    <Button className="border border-primary/30 text-foreground bg-primary/5 hover:bg-primary hover:text-primary-foreground hover:border-primary rounded-xl px-8 py-6 tracking-widest text-xs uppercase font-medium transition-all duration-300">
                        Ready to Make Your Move?
                    </Button>
                </div>
            </div>
        </section>
    );
}
