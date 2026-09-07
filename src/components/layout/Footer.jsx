import Image from "next/image";
import Link from "next/link";
import Container from "@/components/layout/Container";

const navLinks = [
  { label: "Rooms", href: "#" },
  { label: "Amenities", href: "#" },
  { label: "Gallery", href: "#" },
  { label: "Contact", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-ivory">
      <Container>
        <div className="py-16 flex flex-col md:flex-row justify-between gap-12">
          <div className="flex items-center gap-3">
            <Image
              src="/images/bathoha-logo-3d.png"
              alt="Bathoha Resort"
              width={32}
              height={32}
              className="h-8 w-auto"
            />
            <span className="font-body font-bold uppercase tracking-wide">
              Bathoha Resort
            </span>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="font-body text-sm uppercase tracking-wide text-ivory/80 hover:text-gold transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-start gap-4">
            <div className="relative w-16 h-16 shrink-0 border border-ivory/20">
              <Image
                src="/images/street-sign.jpg"
                alt="Bathoha Resort street entrance"
                fill
                className="object-cover"
              />
            </div>
            <p className="font-body text-sm text-ivory/70 leading-relaxed">
              [batoharesort@gmail.com
              <br />
              09056000077]
              <br />
              [Phone / email placeholder]
            </p>
          </div>
        </div>

        <div className="border-t border-ivory/10 py-6 text-center">
          <p className="font-body text-xs text-ivory/50">
            © {new Date().getFullYear()} Bathoha Resort. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}