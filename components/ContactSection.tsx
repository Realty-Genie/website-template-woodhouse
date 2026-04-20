"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ContactSection() {
    const [formData, setFormData] = useState({ name: "", email: "", phone: "", city: "" });

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    }

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (typeof window !== "undefined" && window.crmTracker) {
            if (formData.email) {
                window.crmTracker.identify(
                    formData.email.trim().toLowerCase(),
                    formData.name,
                    formData.phone,
                    formData.city
                );
            }
            window.crmTracker.track("form_submit", {
                formId: "lets_connect",
                emailCaptured: !!formData.email,
            });
        }
    }

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

                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-xs uppercase tracking-widest text-muted-foreground">
                                        Full Name
                                    </label>
                                    <Input
                                        id="name"
                                        placeholder="John Doe"
                                        value={formData.name}
                                        onChange={handleChange}
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
                                        value={formData.email}
                                        onChange={handleChange}
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
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="bg-muted border-border text-foreground placeholder:text-muted-foreground/50 focus:border-primary/50"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="city" className="text-xs uppercase tracking-widest text-muted-foreground">
                                        City
                                    </label>
                                    <Input
                                        id="city"
                                        placeholder="Vancouver"
                                        value={formData.city}
                                        onChange={handleChange}
                                        className="bg-muted border-border text-foreground placeholder:text-muted-foreground/50 focus:border-primary/50"
                                    />
                                </div>
                            </div>

                            <Button
                                type="submit"
                                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-medium tracking-wide uppercase py-6 text-xs"
                            >
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
