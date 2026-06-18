import Header from './components/Header';
import Hero from './components/Hero';
import Pillars from './components/Pillars';
import WaterLab from './components/WaterLab';
import Calculator from './components/Calculator';
import StorePreview from './components/StorePreview';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-brand-blue/30 bg-brand-cream">
      <Header />
      <main>
        <Hero />
        <Pillars />
        <WaterLab />
        <Calculator />
        <StorePreview />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
