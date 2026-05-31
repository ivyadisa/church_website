import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServiceSchedule from "@/components/ServiceSchedule";
import ChurchMap from "@/components/ChurchMap";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <Navbar />
       <Hero />
       <ServiceSchedule />
       <ChurchMap />
        <ContactSection />

      <main className="p-10 text-center">
        <h1 className="text-4xl font-bold">
          The Mountain of Breakthrough Church
        </h1>

        <p className="mt-4 text-lg">
          Rounder Kariobangi, Nairobi, Kenya
        </p>
      </main>
    </>
  );
}