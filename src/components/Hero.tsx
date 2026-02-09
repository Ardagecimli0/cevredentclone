import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import ba1 from '@/assets/bfafter/1.png';
import ba2 from '@/assets/bfafter/2.png';
import ba3 from '@/assets/bfafter/3.png';
import ba4 from '@/assets/bfafter/4.png';
import ba5 from '@/assets/bfafter/5.png';
import ba6 from '@/assets/bfafter/6.png';
import ba7 from '@/assets/bfafter/7.png';
import ba8 from '@/assets/bfafter/8.png';
import isoLogo from '@/assets/certificates/iso.png';
import jciLogo from '@/assets/certificates/jci.png';
import mohLogo from '@/assets/certificates/moh.png';

const Hero = () => {
  const { t } = useTranslation();

  const bgImages = [ba1, ba2, ba3, ba4, ba5, ba6, ba7, ba8];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Grid of Before/After Images */}
      <div className="absolute inset-0 grid grid-cols-3 md:grid-cols-5 gap-1 opacity-30">
        {Array.from({ length: 15 }).map((_, i) => (
          <div key={i} className="aspect-square overflow-hidden">
            <img
              src={bgImages[i % bgImages.length]}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-dental-dark/80" />

      {/* Content */}
      <div className="relative z-10 container-dental text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            {t('hero.title')}
          </h1>
          <p className="text-xl md:text-2xl text-primary font-semibold mb-3">
            {t('hero.subtitle')}
          </p>
          <p className="text-lg md:text-xl text-white/80 mb-10">
            {t('hero.description')}
          </p>

          <motion.a
            href="https://api.whatsapp.com/send?phone=905494755287&text=What%20are%20the%20options%20and%20pricing%20for%20dental%20treatment"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg shadow-dental hover:shadow-dental-lg transition-all duration-300"
          >
            {t('hero.cta')}
          </motion.a>

          {/* Scroll Indicator */}
          <motion.a
            href="#why"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="block mt-16"
          >
            <ChevronDown className="w-10 h-10 text-white mx-auto" />
          </motion.a>
        </motion.div>

        {/* Certification Logos - Desktop (Glass Box) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="hidden md:flex flex-wrap items-center justify-center gap-8 mt-12 bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10 max-w-3xl mx-auto"
        >
          <img src={isoLogo} alt="ISO Certification" className="h-16 w-auto opacity-90 hover:opacity-100 transition-opacity drop-shadow-lg" />
          <img src={jciLogo} alt="JCI Accreditation" className="h-16 w-auto opacity-90 hover:opacity-100 transition-opacity drop-shadow-lg" />
          <img src={mohLogo} alt="Ministry of Health" className="h-16 w-auto opacity-90 hover:opacity-100 transition-opacity drop-shadow-lg" />
        </motion.div>
      </div>

      {/* Certification Logos - Mobile Bottom Bar (White Background, Black Logos) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="absolute bottom-0 left-0 right-0 z-20 bg-white py-4 flex md:hidden flex-row items-center justify-center gap-6 shadow-lg"
      >
        <img
          src={isoLogo}
          alt="ISO Certification"
          className="h-12 w-auto object-contain brightness-0"
        />
        <img
          src={jciLogo}
          alt="JCI Accreditation"
          className="h-12 w-auto object-contain brightness-0"
        />
        <img
          src={mohLogo}
          alt="Ministry of Health"
          className="h-12 w-auto object-contain brightness-0"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
