import Hero from "@/components/sections/Hero";
import Welcome from "@/components/sections/Welcome";
import Atmosphere from "@/components/sections/Atmosphere";
import Accommodations from "@/components/sections/Accommodations";
import ClosingCTA from "@/components/sections/ClosingCTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-ivory">
      <Hero />
      <Welcome />
      <Atmosphere />
      <Accommodations />
      <ClosingCTA />
    </main>
  );
}