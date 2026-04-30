import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import NicheCategories from "./components/NicheCategories";
import FeatureGrid from "./components/FeatureGrid";
import MockupGallery from "./components/MockupGallery";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <NicheCategories />
        <MockupGallery />
        <FeatureGrid />
      </main>
      <Footer />
    </div>
  );
}
