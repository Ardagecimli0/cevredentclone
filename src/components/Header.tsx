import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
// import { languages, languageNames, languageFlags, type Language, localizedSlugs } from '@/lib/i18n/config';
import logo from '@/assets/cevre-dental-logoheader.png';

const Header = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [isLangOpen, setIsLangOpen] = useState(false);

  // const currentLang = i18n.language as Language;

  const navItems = [
    { key: 'whyChoose', href: '#why' },
    { key: 'beforeAfter', href: '#before-after' },
    { key: 'influencers', href: '#influencers' },
    { key: 'services', href: '#services' },
    { key: 'contact', href: '#contact' },
  ];

  /*
  const changeLanguage = (lang: Language) => {
    i18n.changeLanguage(lang);
    setIsLangOpen(false);
    navigate(`/${lang}/${localizedSlugs[lang]}`);
  };
  */

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container-dental">
        <div className="flex items-center justify-center lg:justify-between h-16 lg:h-24 relative">
          {/* Mobile Menu Button - Left Aligned to balance or keep right? User said "menu kalsin" (menu stay). Usually menu is on right. 
             If logo is centered, menu can be on right. 
             To center logo absolutely: left-1/2 -translate-x-1/2.
          */}

          {/* Logo - Centered on Mobile, Left on Desktop */}
          <a href="/" className="flex items-center -translate-x-2 lg:translate-x-0">
            <img src={logo} alt="CevreDent" className="h-8 md:h-10 lg:h-12 w-auto transition-all duration-300" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 ml-auto mr-8">
            {/* Adjusted margin to push nav to right since logo is static on desktop now */}
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="text-base font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                {t(`nav.${item.key}`)}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button - Right Aligned */}
          <div className="absolute right-0 lg:static flex items-center gap-4">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 hover:bg-muted rounded-lg transition-colors"
            >
              {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden border-t border-border"
            >
              <div className="py-4 space-y-2">
                {navItems.map((item) => (
                  <a
                    key={item.key}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-4 py-3 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-muted rounded-lg transition-colors"
                  >
                    {t(`nav.${item.key}`)}
                  </a>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
