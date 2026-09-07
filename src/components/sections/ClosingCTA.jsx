import Section from "@/components/layout/Section";
import Button from "@/components/ui/Button";

export default function ClosingCTA() {
  return (
    <Section className="bg-stone">
      <div className="text-center max-w-xl mx-auto">
        <h2 className="font-heading text-4xl md:text-5xl text-charcoal mb-6">
          Begin Your Stay
        </h2>
        <p className="font-body text-grey mb-10">
          [Reserve your stay and experience Bathoha for yourself.]
        </p>
        <Button variant="primary" href="#" className="!bg-gold hover:!bg-gold/90">
          Book Now
        </Button>
        <p className="font-body text-sm text-grey mt-10">
          [batoharesort@gmail.com · 09056000077]
        </p>
      </div>
    </Section>
  );
}