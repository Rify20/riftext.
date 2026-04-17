import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import OCRWorkspace from "@/components/ocr-workspace";
import WhyRifText from "@/components/why-riftext";
import HowItWorks from "@/components/how-it-works";
import Footer from "@/components/footer";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <OCRWorkspace />
      <WhyRifText />
      <HowItWorks />
      <Footer />
    </main>
  );
}