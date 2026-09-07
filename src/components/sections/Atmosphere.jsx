import Image from "next/image";

export default function Atmosphere() {
  return (
    <section className="relative w-full h-[70vh] md:h-[85vh]">
      <Image
        src="/images/corridor.jpg"
        alt="Bathoha Resort interior corridor"
        fill
        className="object-cover"
      />

      <p className="absolute bottom-8 left-8 font-body text-xs uppercase tracking-[0.2em] text-ivory">
        [Where light lingers, and the pace slows down.]
      </p>
    </section>
  );
}