"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Building2 } from "lucide-react"
import Image from "next/image"

const texts = [
    "We are a forward-thinking real estate brokerage committed to empowering clients and agents alike.",
    "We combine local market expertise with modern technology and strategic marketing to deliver seamless buying and selling experiences.",
    "Whether you're purchasing your first home, upgrading your investment portfolio, or selling a luxury property — our team is built to guide you with confidence."
]

export function SplitRealtorStory() {
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % texts.length)
        }, 6000)
        return () => clearInterval(timer)
    }, [])

    return (
        <section id="about" className="w-full py-24 bg-background text-foreground overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                {/* Left: Animated Text Content */}
                <div className="flex flex-col items-start gap-6 z-10">
                    <div className="inline-flex px-3 py-1 bg-secondary text-secondary-foreground rounded-md text-sm font-medium">
                        About Us
                    </div>

                    <div className="min-h-[160px] md:min-h-[140px] relative w-full flex items-center">
                        <AnimatePresence mode="wait">
                            <motion.p
                                key={index}
                                initial={{ opacity: 0, y: 5 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -5 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                className="text-2xl md:text-3xl lg:text-4xl font-serif font-semibold leading-tight text-foreground"
                            >
                                {texts[index]}
                            </motion.p>
                        </AnimatePresence>
                    </div>

                    {/* Progress indicators */}
                    <div className="flex gap-2 mt-4 mb-2">
                        {texts.map((_, i) => (
                            <div
                                key={i}
                                className={`h-1.5 rounded-full transition-all duration-300 ${i === index ? 'w-8 bg-primary' : 'w-2 bg-secondary'}`}
                            />
                        ))}
                    </div>

                    <Button
                        size="lg"
                        className="hidden md:flex mt-4 rounded-md font-medium"
                    >
                        Learn More About Us
                        <Building2 className="ml-2 w-4 h-4" />
                    </Button>
                </div>

                {/* Right: Image */}
                <div className="relative w-full flex flex-col items-center lg:items-end gap-6 pt-8 lg:pt-0">
                    <div className="w-full aspect-video md:aspect-[4/3] lg:aspect-video rounded-xl overflow-hidden relative bg-muted shadow-sm border border-border">
                        <Image
                            src="/listing-5.jpeg"
                            alt="Our Realty Team"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        <div className="absolute bottom-6 left-6 right-6">
                            <p className="text-white text-sm md:text-base font-medium drop-shadow-sm">
                                Trusted by thousands of clients across your region
                            </p>
                        </div>
                    </div>

                    <Button
                        size="lg"
                        className="rounded-md font-medium w-full md:w-auto"
                    >
                        Get Free Market Evaluation
                        <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                </div>

            </div>
        </section>
    )
}
