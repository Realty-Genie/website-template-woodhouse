"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Properties", href: "#listings" },
  { label: "Areas", href: "#areas" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between h-20">
        {/* Logo */}
        <a
          href="#home"
          className="flex items-center gap-3 group"
          aria-label="Go to homepage"
        >
          <div className="w-10 h-10 rounded-full border border-border bg-white shadow-sm transition-transform duration-300 group-hover:scale-105 flex items-center justify-center">
            <Building2 className="w-5 h-5 text-primary" />
          </div>
          <span
            className={`text-xl font-semibold tracking-tight transition-colors duration-300 ${
              scrolled ? "text-primary" : "text-white"
            }`}
          >
            Your Agency <span className="font-medium opacity-80">Name</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-sm font-medium transition-colors duration-200 hover:text-accent ${
                scrolled ? "text-foreground/80" : "text-white/90"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <Button
            size="default"
            className="font-medium rounded-md"
            onClick={() => {
              if (typeof window !== "undefined" && window.crmTracker) {
                window.crmTracker.track("click", { element: "button", button_text: "Book a Call" });
              }
            }}
          >
            <Phone className="w-4 h-4 mr-2" />
            Book a Call
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={`lg:hidden transition-colors duration-200 ${
            scrolled ? "text-foreground" : "text-white"
          } hover:text-accent`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white border-b border-border ${
          isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-base font-medium text-foreground/80 hover:text-primary transition-colors py-2 border-b border-border/50 last:border-0"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Button
            size="lg"
            className="w-full mt-4 font-medium"
            onClick={() => {
              if (typeof window !== "undefined" && window.crmTracker) {
                window.crmTracker.track("click", { element: "button", button_text: "Book a Call" });
              }
            }}
          >
            <Phone className="w-4 h-4 mr-2" />
            Book a Call
          </Button>
        </div>
      </div>
    </nav>
  );
}
