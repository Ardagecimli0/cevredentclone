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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-20 md:pb-0">
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
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6">
            {t('hero.title')}
          </h1>
          <p className="text-xl md:text-2xl text-primary font-semibold mb-2 md:mb-3">
            {t('hero.subtitle')}
          </p>
          <p className="text-base md:text-xl text-white/80 mb-6 md:mb-10">
            {t('hero.description')}
          </p>

          <motion.a
            href={`https://api.whatsapp.com/send?phone=905518622525&text=${t('whatsappMsg')}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-5 py-3 md:px-8 md:py-4 bg-primary text-primary-foreground text-sm md:text-base font-semibold rounded-lg shadow-dental hover:shadow-dental-lg transition-all duration-300 w-full md:w-auto justify-center max-w-xs md:max-w-none"
          >
            {t('hero.cta')}
          </motion.a>

          {/* Scroll Indicator */}
          <motion.a
            href="#why"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="block mt-8 md:mt-16"
          >
            <ChevronDown className="w-8 h-8 md:w-10 md:h-10 text-white mx-auto" />
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
        className="absolute bottom-0 left-0 right-0 z-20 bg-white py-3 flex md:hidden flex-row items-center justify-center gap-4 shadow-lg"
      >
        <img
          src={isoLogo}
          alt="ISO Certification"
          className="h-10 w-auto object-contain brightness-0"
        />
        <img
          src={jciLogo}
          alt="JCI Accreditation"
          className="h-10 w-auto object-contain brightness-0"
        />
        <img
          src={mohLogo}
          alt="Ministry of Health"
          className="h-10 w-auto object-contain brightness-0"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
