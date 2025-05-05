import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ServicesSection from '../components/ServicesSection';
import LogoCarousel from '../components/LogoCarousel';
import Proposito from '@/components/Proposito';
import Footer from '../components/Footer';
import LoQueHacemos from '@/components/LoQueHacemos';
import ExperienciaInternacional from '@/components/ExperienciaInternacional';
import NuevosMercados from '@/components/NuevosMercados';
import Accordion from '@/components/Accordion';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow-1">
        <Hero />
        <ServicesSection />
        <Proposito />
        <LogoCarousel />
        <LoQueHacemos />
        {/* Ingreso a Nuevos Mercados Section */}
        <NuevosMercados />
        {/* Agenciamiento y Externalizacion Section */}
        <Accordion />
        <ExperienciaInternacional />
      </main>
      <Footer />
    </>
  );
}
