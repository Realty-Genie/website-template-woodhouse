"use client";

import Link from "next/link";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-background text-foreground pt-32 pb-12 border-t border-border">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Column 1: Bio */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-serif font-bold text-primary">
                            Your Agency Name
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed font-light">
                            A modern real estate brokerage committed to delivering strategy, results, and exceptional client service across your region.
                        </p>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="space-y-6">
                        <h3 className="text-sm font-medium tracking-widest uppercase text-muted-foreground">
                            Quick Links
                        </h3>
                        <nav className="flex flex-col space-y-3">
                            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                                Home
                            </Link>
                            <Link href="#about" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                                About Us
                            </Link>
                            <Link href="#services" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                                Services
                            </Link>
                            <Link href="#why-us" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                                Why Choose Us
                            </Link>
                            <Link href="#agents" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                                For Agents
                            </Link>
                            <Link href="#contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                                Contact
                            </Link>
                        </nav>
                    </div>

                    {/* Column 3: Contact */}
                    <div className="space-y-6">
                        <h3 className="text-sm font-medium tracking-widest uppercase text-muted-foreground">
                            Contact
                        </h3>
                        <div className="space-y-4 text-sm text-muted-foreground font-light">
                            <div>
                                <strong className="block text-foreground font-medium mb-1">YOUR AGENCY NAME</strong>
                                <p>Licensed Real Estate Brokerage</p>
                            </div>
                            <p>Serving your city and surrounding communities</p>
                            <div className="space-y-1">
                                <p>
                                    <span className="text-muted-foreground uppercase text-xs tracking-wider mr-2">Phone</span>
                                    (555) 000-0000
                                </p>
                                <p>
                                    <span className="text-muted-foreground uppercase text-xs tracking-wider mr-2">Email</span>
                                    info@youragency.com
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Column 4: Social */}
                    <div className="space-y-6">
                        <h3 className="text-sm font-medium tracking-widest uppercase text-muted-foreground">
                            Follow Us
                        </h3>
                        <div className="flex space-x-4">
                            <Link href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300">
                                <Facebook size={18} />
                            </Link>
                            <Link href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300">
                                <Instagram size={18} />
                            </Link>
                            <Link href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300">
                                <Linkedin size={18} />
                            </Link>
                            <Link href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300">
                                <Youtube size={18} />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground font-light">
                    <p>© 2025 Your Agency Name. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link href="#" className="hover:text-foreground">Privacy Policy</Link>
                        <Link href="#" className="hover:text-foreground">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
