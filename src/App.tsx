import Header from './components/Header';
import Hero from './components/Hero';
import Purification from './components/Purification';
import Calculator from './components/Calculator';
import UseCases from './components/UseCases';
import Testimonials from './components/Testimonials';
import Cafe from './components/Cafe';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-brand-cyan/30">
      <Header />
      <main>
        <Hero />
        <Cafe />
        <Purification />
        <Calculator />
        <Testimonials />
        <UseCases />
      </main>
      <Footer />
    </div>
  );
}
