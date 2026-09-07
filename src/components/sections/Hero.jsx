import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <Image
        src="/images/facade-hero.jpg"
        alt="Bathoha Resort exterior"
        fill
        priority
        className="object-cover object-[center_30%]"
      />

      <div className="absolute inset-0 bg-charcoal/30" />

      <div className="relative h-full flex flex-col items-center justify-end text-center pb-24 px-6">
        <p className="font-body text-sm uppercase tracking-[0.2em] text-ivory mb-4">
          Bathoha Resort
        </p>
        <h1 className="font-heading text-4xl md:text-6xl text-ivory max-w-2xl">
          [A Space to Breathe, Beautifully Designed.]
        </h1>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-px h-12 bg-ivory/60" />
      </div>
    </section>
  );
}