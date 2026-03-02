"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#why-us", label: "Why Us" },
  { href: "#agents", label: "Agents" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-4 sm:px-6 md:px-12 py-3 md:py-4 bg-gradient-to-b from-black/90 to-black/60 backdrop-blur-md border-b border-white/5 transition-all duration-300">
        {/* Logo */}
        <Link href="/" className="group rounded-full">
          <div className="rounded-full border border-white/15 overflow-hidden bg-white/95 p-1 shadow-lg shadow-black/20 group-hover:border-primary/50 transition-all duration-300">
            <Image
              src="/logo_new.jpeg"
              alt="Woodhouse Realty"
              width={60}
              height={60}
              className="rounded-full object-contain w-8 h-8 sm:w-10 sm:h-10 md:w-[52px] md:h-[52px] lg:w-[60px] lg:h-[60px]"
            />
          </div>
        </Link>

        {/* Links - Desktop */}
        <div className="hidden lg:flex items-center gap-8 text-sm font-light text-white tracking-wider">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Button className="hidden md:flex border border-primary/50 text-white bg-primary/10 backdrop-blur-sm hover:bg-primary hover:text-black hover:border-primary rounded-xl px-8 py-6 tracking-widest text-xs uppercase font-medium transition-all duration-300">
            Contact Us
          </Button>

          {/* Hamburger - Mobile/Tablet */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-xl border border-white/15 bg-white/5 backdrop-blur-sm text-white hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-72 sm:w-80 bg-gradient-to-b from-black/95 to-black/90 backdrop-blur-xl border-l border-white/10 shadow-2xl transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center w-10 h-10 rounded-xl border border-white/15 bg-white/5 text-white hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        {/* Mobile Nav Links */}
        <div className="flex flex-col gap-1 px-6 mt-4">
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-primary text-lg font-light tracking-wider py-3 px-4 rounded-xl hover:bg-white/5 transition-all duration-200"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="px-6 mt-8">
          <Button
            onClick={() => setIsOpen(false)}
            className="w-full border border-primary/50 text-white bg-primary/10 backdrop-blur-sm hover:bg-primary hover:text-black hover:border-primary rounded-xl px-8 py-6 tracking-widest text-xs uppercase font-medium transition-all duration-300"
          >
            Contact Us
          </Button>
        </div>
      </div>
    </>
  );
}
