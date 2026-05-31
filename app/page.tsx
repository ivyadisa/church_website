import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServiceSchedule from "@/components/ServiceSchedule";
import ChurchMap from "@/components/ChurchMap";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      {/* NAVBAR (fixed, so content must start below it) */}
      <Navbar />

      {/* PAGE CONTENT */}
      <main className="pt-24">

        <Hero />

        <ServiceSchedule />

        <ChurchMap />

        <ContactSection />

      </main>
    </>
  );
}