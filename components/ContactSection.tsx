"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ContactSection() {
    return (
        <section id="contact" className="relative bg-background py-20 pb-40">
            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-2xl flex flex-col lg:flex-row min-h-[600px]">
                    {/* Left Column: Form */}
                    <div className="w-full lg:w-1/2 p-10 md:p-14 flex flex-col justify-center space-y-8 bg-card">
                        <div className="space-y-2">
                            <span className="text-primary text-sm font-medium tracking-[0.3em] uppercase opacity-90 block">
                                Get In Touch
                            </span>
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
                                Ready to Make Your Move?
                            </h2>
                            <p className="text-muted-foreground font-light">
                                Let&apos;s talk about your real estate goals and create a plan that works.
                            </p>
                        </div>

                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-xs uppercase tracking-widest text-muted-foreground">
                                        Full Name
                                    </label>
                                    <Input
                                        id="name"
                                        placeholder="John Doe"
                                        className="bg-muted border-border text-foreground placeholder:text-muted-foreground/50 focus:border-primary/50"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-xs uppercase tracking-widest text-muted-foreground">
                                        Email Address
                                    </label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="john@example.com"
                                        className="bg-muted border-border text-foreground placeholder:text-muted-foreground/50 focus:border-primary/50"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="phone" className="text-xs uppercase tracking-widest text-muted-foreground">
                                        Phone Number
                                    </label>
                                    <Input
                                        id="phone"
                                        type="tel"
                                        placeholder="(555) 123-4567"
                                        className="bg-muted border-border text-foreground placeholder:text-muted-foreground/50 focus:border-primary/50"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="subject" className="text-xs uppercase tracking-widest text-muted-foreground">
                                        Subject
                                    </label>
                                    <Input
                                        id="subject"
                                        placeholder="Buying or Selling"
                                        className="bg-muted border-border text-foreground placeholder:text-muted-foreground/50 focus:border-primary/50"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-xs uppercase tracking-widest text-muted-foreground">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    placeholder="Tell us about your real estate goals..."
                                    className="flex w-full rounded-md border border-border bg-muted px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary/50 focus:border-primary/50 disabled:cursor-not-allowed disabled:opacity-50"
                                ></textarea>
                            </div>

                            <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-medium tracking-wide uppercase py-6 text-xs">
                                Book a Consultation Today
                            </Button>
                        </form>
                    </div>

                    {/* Right Column: Map */}
                    <div className="w-full lg:w-1/2 min-h-[400px] lg:min-h-full relative">
                        <iframe
                            src="https://www.google.com/maps?q=Vancouver+Burnaby+Surrey+Richmond+BC&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0, filter: "grayscale(100%) contrast(90%)" }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="absolute inset-0"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
}
