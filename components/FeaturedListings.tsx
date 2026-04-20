"use client";

import Image from "next/image"
import { Button } from "@/components/ui/button"

const listings = [
    {
        status: "Active",
        address: "2085 E 1st Avenue 110",
        city: "Vancouver",
        province: "British Columbia",
        postalCode: "V5N 1B6",
        price: 998000,
        bedrooms: 3,
        bathrooms: 3,
        image: "/listing-1.jpeg"
    },
    {
        status: "Active",
        address: "1950 W 8th Avenue 114",
        city: "Vancouver",
        province: "British Columbia",
        postalCode: "V6J 1W3",
        price: 699000,
        bedrooms: 2,
        bathrooms: 1,
        image: "/listing-2.jpeg"
    },
    {
        status: "Active",
        address: "898 Carnarvon Street 2706",
        city: "New Westminster",
        province: "British Columbia",
        postalCode: "V3M 0C3",
        price: 639000,
        bedrooms: 2,
        bathrooms: 2,
        image: "/listing-3.jpeg"
    },
    {
        status: "Active",
        address: "550 E 7th Avenue 101",
        city: "Vancouver",
        province: "British Columbia",
        postalCode: "V5T 1N7",
        price: 485000,
        bedrooms: 1,
        bathrooms: 1,
        image: "/listing-4.jpeg"
    },
    {
        status: "Active",
        address: "3569 W 35th Avenue",
        city: "Vancouver",
        province: "British Columbia",
        postalCode: "V6N 2N4",
        price: 2988000,
        bedrooms: 4,
        bathrooms: 1,
        image: "/listing-5.jpeg"
    },
    {
        status: "Active",
        address: "1483 Homer Street 1003",
        city: "Vancouver",
        province: "British Columbia",
        postalCode: "V6Z 3C7",
        price: 1899000,
        bedrooms: 3,
        bathrooms: 2,
        image: "/listing-6.jpeg"
    },
    {
        status: "Active",
        address: "1289 Hornby Street 2102",
        city: "Vancouver",
        province: "British Columbia",
        postalCode: "V6Z 0C7",
        price: 628000,
        bedrooms: 1,
        bathrooms: 1,
        image: "/listing-7.jpeg"
    },
    {
        status: "Active",
        address: "5691 Keith Street",
        city: "Burnaby",
        province: "British Columbia",
        postalCode: "V5J 3C4",
        price: 2198000,
        bedrooms: 6,
        bathrooms: 4,
        image: "/listing-1.jpeg"
    }
]

function handleBookConsult(address: string) {
    if (typeof window !== "undefined" && window.crmTracker) {
        window.crmTracker.track("click", {
            element: "button",
            button_text: "Book a Consult",
            property_address: address,
        });
    }
}

export default function FeaturedListings() {
    return (
        <section id="listings" className="py-24 bg-card text-foreground">
            <div className="container mx-auto px-6 md:px-12">
                <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground">
                            Featured Properties
                        </h2>
                        <p className="text-muted-foreground mt-3 text-lg font-medium">Discover our exclusive collection of premium real estate.</p>
                    </div>
                    <Button variant="outline" className="hidden md:flex rounded-md border-primary text-primary hover:bg-primary hover:text-white font-medium">
                        View All Listings
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {listings.map((item, idx) => (
                        <div
                            key={idx}
                            className="group bg-white rounded-xl overflow-hidden hover:shadow-md transition-shadow duration-300 border border-border flex flex-col"
                        >
                            <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
                                <Image
                                    src={item.image}
                                    alt={item.address}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-md shadow-sm">
                                    <span className="text-foreground font-semibold text-sm">
                                        ${item.price.toLocaleString()}
                                    </span>
                                </div>
                            </div>

                            <div className="p-5 flex-1 flex flex-col">
                                <h3 className="text-foreground font-semibold text-lg truncate">
                                    {item.address}
                                </h3>
                                <p className="text-muted-foreground text-sm mt-1">
                                    {item.city}, {item.postalCode}
                                </p>
                                <div className="mt-3 grid grid-cols-2 gap-4 pt-4 border-t border-border/50 text-sm">
                                    <div className="flex flex-col">
                                        <span className="text-muted-foreground text-xs uppercase font-medium">Beds</span>
                                        <span className="font-semibold text-foreground">{item.bedrooms}</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-muted-foreground text-xs uppercase font-medium">Baths</span>
                                        <span className="font-semibold text-foreground">{item.bathrooms}</span>
                                    </div>
                                </div>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="mt-4 w-full border-primary text-primary hover:bg-primary hover:text-white text-xs font-medium"
                                    onClick={() => handleBookConsult(item.address)}
                                >
                                    Book a Consult
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center mt-12 md:hidden">
                    <Button variant="outline" className="rounded-md border-primary text-primary hover:bg-primary hover:text-white font-medium w-full">
                        View All Listings
                    </Button>
                </div>
            </div>
        </section>
    )
}
