import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import NicheCategories from "./components/NicheCategories";
import FeatureGrid from "./components/FeatureGrid";
import MockupGallery from "./components/MockupGallery";
import TrustSignals from "./components/TrustSignals";
import PricingSection from "./components/PricingSection";
import FAQSection from "./components/FAQSection";
import FinalCTA from "./components/FinalCTA";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <TrustSignals />
        <NicheCategories />
        <MockupGallery />
        <FeatureGrid />
        <PricingSection />
        <FAQSection />
        <FinalCTA />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
