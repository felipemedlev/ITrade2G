import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ServicesSection from '../components/ServicesSection';
import LogoCarousel from '../components/LogoCarousel';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow-1">
        <Hero />
        <ServicesSection />
        <LogoCarousel />
        <section className="py-5">
          <div className="container">
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
