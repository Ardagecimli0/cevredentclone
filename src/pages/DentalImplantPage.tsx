import Header from '@/components/Header';
import Hero from '@/components/Hero';
import WhyChooseUs from '@/components/WhyChooseUs';
import Services from '@/components/Services';
import ContactUs from '@/components/ContactUs';
import DiscoverOur from '@/components/DiscoverOur';
import Accommodation from '@/components/Accommodation';
import BeforeAfter from '@/components/BeforeAfter';
import Packages from '@/components/Packages';
import Influencers from '@/components/Influencers';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const DentalImplantPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <WhyChooseUs />
        <Services />
        <ContactUs />
        <BeforeAfter />
        <Packages />
        <Accommodation />
        <DiscoverOur />
        <ContactUs />
        <Influencers />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default DentalImplantPage;
