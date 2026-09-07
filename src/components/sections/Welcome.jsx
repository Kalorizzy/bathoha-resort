import Image from "next/image";
import Section from "@/components/layout/Section";

export default function Welcome() {
  return (
    <Section className="bg-ivory">
      <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
        <div className="w-full md:w-3/5 relative aspect-[4/3]">
          <Image
            src="/images/reception.jpg"
            alt="Bathoha Resort reception"
            fill
            className="object-cover"
          />
        </div>

        <div className="w-full md:w-2/5">
          <p className="font-body text-sm uppercase tracking-[0.2em] text-gold mb-4">
            Welcome
          </p>
          <p className="font-heading text-2xl md:text-3xl text-charcoal leading-relaxed">
            [At Bathoha Resort, we believe true luxury lies in simplicity — in clean lines, warm materials, and rooms built to breathe. Every corner has been shaped with intention, from the light that falls across our halls to the quiet comfort of your stay. Welcome to a place designed around you.]
          </p>
        </div>
      </div>
    </Section>
  );
}