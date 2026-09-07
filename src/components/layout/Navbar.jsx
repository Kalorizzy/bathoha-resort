"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";

const navLinks = [
  { label: "Rooms", href: "#" },
  { label: "Amenities", href: "#" },
  { label: "Gallery", href: "#" },
  { label: "Contact", href: "#" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 50);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? "bg-ivory border-b border-grey/20" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1320px] mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/bathoha-logo-3d.png"
            alt="Bathoha Resort"
            width={36}
            height={36}
            className="h-9 w-auto"
          />
          <span className="font-body font-bold uppercase tracking-wide text-lg text-charcoal">
            Bathoha
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-body text-sm uppercase tracking-wide text-charcoal hover:text-gold transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <Button variant="primary" href="#">
            Book Now
          </Button>
        </div>

        <button
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
          aria-expanded={menuOpen}
          className="md:hidden flex flex-col gap-1.5 p-2"
        >
          <span className="w-6 h-px bg-charcoal" />
          <span className="w-6 h-px bg-charcoal" />
        </button>

        <div
          className={`fixed inset-0 z-50 bg-ivory flex flex-col items-center justify-center gap-8 transition-opacity duration-300 md:hidden ${
            menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        >
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            className="absolute top-6 right-6 text-3xl text-charcoal"
          >
            ×
          </button>

          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-heading text-3xl text-charcoal"
            >
              {link.label}
            </Link>
          ))}

          <Button variant="primary" href="#" onClick={() => setMenuOpen(false)}>
            Book Now
          </Button>
        </div>
      </div>
    </nav>
  );
}