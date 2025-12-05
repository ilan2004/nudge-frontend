import { Hero } from "@/components/landing/hero";
import { Philosophy } from "@/components/landing/philosophy";
import { Features } from "@/components/landing/features";
import { Journey } from "@/components/landing/journey";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-mint-500">
      <Navbar />
      <Hero />
      <Philosophy />
      <Features /> {/* Key Features Section */}
      <Journey />
      <Footer />
    </main>
  );
}
