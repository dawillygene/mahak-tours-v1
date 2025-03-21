import Features from "./components/Features";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import TourCardsSection from "./components/TourCardsSection";
import SafariTripsSection from "./components/SafariTripsSection"; 
import SafariToursSection from "./components/SafariToursSection";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Hero />
      </div>
      <Features />
      <SafariTripsSection />
      <SafariToursSection />

    </>
  )
}