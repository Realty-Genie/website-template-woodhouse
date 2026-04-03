"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
    {
        question: "What areas does Woodhouse Realty serve?",
        answer:
            "Woodhouse Realty serves clients across British Columbia, with particular expertise in Vancouver, Surrey, Burnaby, Richmond, and the surrounding Lower Mainland communities.",
    },
    {
        question: "How does Woodhouse Realty differentiate from other brokerages?",
        answer:
            "We combine local market expertise with modern technology and strategic marketing to deliver seamless buying and selling experiences. Our client-first approach ensures transparent communication and dedicated support from listing to closing.",
    },
    {
        question: "What services do you offer for home buyers?",
        answer:
            "We offer comprehensive residential buying services including property search, market analysis, negotiation expertise, and guidance through every step of the purchase process.",
    },
    {
        question: "How do you price properties for sale?",
        answer:
            "We leverage real-time market data, pricing analytics, and neighborhood trends to ensure your property is priced competitively to attract qualified buyers while maximizing your return.",
    },
    {
        question: "Do you work with real estate investors?",
        answer:
            "Yes, we provide investment property advisory services, helping investors identify opportunities, analyze potential returns, and build profitable portfolios.",
    },
    {
        question: "How can I schedule a consultation?",
        answer:
            "Simply contact us through our website or give us a call. We offer free property consultations to discuss your real estate goals and create a customized plan.",
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="py-20 bg-background text-foreground">
            <div className="container mx-auto px-6 md:px-12">
                {/* Header */}
                <div className="text-center mb-16 space-y-4">
                    <span className="text-primary text-sm font-medium tracking-[0.3em] uppercase opacity-90 block">
                        Common Questions
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
                        Frequently Asked Questions
                    </h2>
                </div>

                {/* FAQ List */}
                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div
                                key={index}
                                className={cn(
                                    "border border-border rounded-xl overflow-hidden transition-all duration-300",
                                    isOpen ? "bg-card border-primary/30" : "hover:border-primary/50"
                                )}
                            >
                                <button
                                    onClick={() => setOpenIndex(isOpen ? null : index)}
                                    className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none"
                                >
                                    <span className="text-lg md:text-xl font-serif font-medium text-foreground pr-8">
                                        {faq.question}
                                    </span>
                                    <span className="flex-shrink-0 text-primary">
                                        {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                                    </span>
                                </button>

                                <AnimatePresence>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                        >
                                            <div className="px-6 md:px-8 pb-6 md:pb-8 text-muted-foreground leading-relaxed font-light">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
