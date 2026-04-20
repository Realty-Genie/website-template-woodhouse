"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"

const heroImages = ["/listing-1.jpeg", "/listing-2.jpeg", "/listing-3.jpeg"]

const stats = [
    { label: "Properties Sold", value: "500+" },
    { label: "Years Experience", value: "15+" },
    { label: "Client Satisfaction", value: "98%" },
    { label: "Cities Served", value: "25+" },
]

export function Hero() {
    const [current, setCurrent] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % heroImages.length)
        }, 6000)
        return () => clearInterval(timer)
    }, [])

    return (
        <section id="home" className="relative h-screen flex flex-col w-full bg-background">
            <div className="relative flex-1 w-full overflow-hidden">
                {/* Background Images */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={current}
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.2, ease: "easeInOut" }}
                        className="absolute inset-0 z-0"
                    >
                        <Image
                            src={heroImages[current]}
                            alt="Luxury property showcase"
                            fill
                            priority
                            className="object-cover object-center"
                        />
                    </motion.div>
                </AnimatePresence>

                {/* Dark Overlay for Text Readability */}
                <div className="absolute inset-0 bg-black/50 z-[1]" />

                {/* Main Content */}
                <div className="relative z-10 h-full flex flex-col justify-center container mx-auto px-6 md:px-12 pt-20">
                    <div className="max-w-2xl space-y-6">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white tracking-tight leading-tight">
                            Modern Real Estate, <br />
                            <span className="text-white/90">Exceptional Results.</span>
                        </h1>

                        <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-xl font-normal">
                            We combine strategy, technology, and local market expertise to deliver seamless buying and selling experiences.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Button
                                size="lg"
                                className="rounded-md px-8 py-6 text-base font-semibold"
                            >
                                Explore Properties
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="bg-transparent border-white text-white hover:bg-white hover:text-primary rounded-md px-8 py-6 text-base font-medium transition-all duration-200"
                            >
                                Free Market Evaluation
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats Bar Container (Solid bottom block) */}
            <div className="relative z-20 bg-white border-b border-border shadow-sm">
                <div className="container mx-auto px-6 md:px-12 py-8 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
                    {stats.map((stat) => (
                        <div key={stat.label} className="text-center md:text-left flex flex-col space-y-1">
                            <span className="text-3xl md:text-4xl font-serif font-bold text-primary">
                                {stat.value}
                            </span>
                            <span className="text-sm font-medium text-muted-foreground">
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
