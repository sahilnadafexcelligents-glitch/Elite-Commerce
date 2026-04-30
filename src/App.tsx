import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import NicheCategories from "./components/NicheCategories";
import FeatureGrid from "./components/FeatureGrid";
import MockupGallery from "./components/MockupGallery";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-dark-bg transition-colors duration-300">
      <Navbar />
      <main>
        <Hero />
        <NicheCategories />
        <MockupGallery />
        <FeatureGrid />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
