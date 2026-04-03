import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const services = [
    {
        title: "Residential Buying & Selling",
        description: "Find your dream home or sell your property with expert guidance tailored to your unique needs.",
        image: "/listing-5.jpeg"
    },
    {
        title: "Investment Property Advisory",
        description: "Maximize your investment returns with data-driven advice and strategic property selection.",
        image: "/listing-6.jpeg"
    },
    {
        title: "Pre-Sale & Assignment Marketing",
        description: "Navigate pre-sale opportunities and assignments with confidence and professional support.",
        image: "/listing-1.jpeg"
    },
    {
        title: "Luxury Property Representation",
        description: "Premium marketing and dedicated service for high-value properties across BC.",
        image: "/listing-2.jpeg"
    },
    {
        title: "Market Evaluation & Pricing Strategy",
        description: "Accurate property valuations and strategic pricing to achieve the best possible outcomes.",
        image: "/listing-3.jpeg"
    }
]

export default function ServicesSection() {
    return (
        <section id="services" className="py-20 bg-muted text-foreground">
            <div className="container mx-auto px-6 md:px-12">
                {/* Header */}
                <div className="text-center mb-16 space-y-4">
                    <span className="text-primary text-sm font-medium tracking-[0.3em] uppercase opacity-90 block">
                        What We Offer
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
                        Comprehensive Real Estate Services
                    </h2>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, idx) => (
                        <div
                            key={idx}
                            className="group relative min-h-[360px] rounded-2xl overflow-hidden border border-border bg-card"
                        >
                            <Image
                                src={service.image}
                                alt={service.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-white/82 transition-opacity duration-500 group-hover:bg-white/74" />

                            <div className="absolute inset-0 flex flex-col justify-end p-6 z-10">
                                <h3 className="text-xl font-serif text-foreground mb-2">
                                    {service.title}
                                </h3>
                                <p className="text-foreground/75 text-sm font-light leading-relaxed mb-4">
                                    {service.description}
                                </p>
                                <div className="flex items-center text-primary text-xs uppercase tracking-widest">
                                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                                </div>
                            </div>
                            <div className="absolute inset-4 border border-white/50 pointer-events-none rounded-xl" />
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center mt-12">
                    <Button className="border border-primary/30 text-foreground bg-primary/5 hover:bg-primary hover:text-primary-foreground hover:border-primary rounded-xl px-8 py-6 tracking-widest text-xs uppercase font-medium transition-all duration-300">
                        Schedule Your Free Property Consultation
                    </Button>
                </div>
            </div>
        </section>
    )
}
