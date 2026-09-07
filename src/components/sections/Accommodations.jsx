import Image from "next/image";
import Section from "@/components/layout/Section";
import Button from "@/components/ui/Button";

export default function Accommodations() {
  return (
    <Section className="bg-stone">
      <div className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-16">
        <div className="w-full md:w-3/5 relative aspect-[4/3]">
          <Image
            src="/images/room.jpg"
            alt="Bathoha Resort guest room"
            fill
            className="object-cover"
          />
        </div>

        <div className="w-full md:w-2/5">
          <p className="font-body text-sm uppercase tracking-[0.2em] text-gold mb-4">
            Accommodations
          </p>
          <h2 className="font-heading text-3xl md:text-4xl text-charcoal mb-6">
            Made for Your Stay
          </h2>
          <p className="font-body text-grey mb-8 leading-relaxed">
            [Body placeholder — needs confirmed info: how many room types, names, key features. Do not invent room names, sizes, or amenities.]
          </p>
          <Button variant="secondary" href="#">
            Explore Rooms
          </Button>
        </div>
      </div>
    </Section>
  );
}