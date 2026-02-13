import { useTranslation } from 'react-i18next';
import { MapPin, Phone, Mail } from 'lucide-react';
import logo from '@/assets/cevre-dental-logo.png';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer id="contact" className="bg-dental-navy text-white">
      {/* Main Footer */}
      <div className="container-dental py-12">
        <div className="flex flex-col items-center justify-center gap-8 text-center">

          {/* 1. Logo */}
          <img src={logo} alt="CevreDent" className="h-10 md:h-14 w-auto" />

          {/* 2. Contact Info - Vertical with Icons */}
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-white" />
              <span className="font-medium">Mecidiyeköy Mahallesi, Büyükdere Cd. Ocak Apt No:91 Kat 2 Daire:2, 34387 Şişli/İstanbul</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-white" />
              <a href="tel:+905518622525" className="font-medium hover:text-primary transition-colors">
                +90 551 862 25 25
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-white" />
              <a href="mailto:info@cevredent.com" className="font-medium hover:text-primary transition-colors">
                info@cevredent.com
              </a>
            </div>
          </div>

          {/* 3. Social Media Section */}
          <div className="flex flex-col items-center gap-4 mt-4">
            <h3 className="text-2xl font-medium">{t('footer.socialMedia')}</h3>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/cevredent/"
                rel="noopener noreferrer"
                className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center hover:bg-white hover:text-dental-navy transition-all duration-300"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/cevredent/"
                rel="noopener noreferrer"
                className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center hover:bg-white hover:text-dental-navy transition-all duration-300"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@cevredent"
                rel="noopener noreferrer"
                className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center hover:bg-white hover:text-dental-navy transition-all duration-300"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-4">
        <div className="container-dental text-center">
          <p className="text-white/60 text-sm">
            {t('footer.copyright')}
          </p>

          {/* Navigation Links - Bottom */}
          <div className="flex flex-wrap justify-center gap-6 mt-6">
            {[
              { key: 'whyChoose', href: '#why' },
              { key: 'beforeAfter', href: '#before-after' },
              { key: 'influencers', href: '#influencers' },
              { key: 'services', href: '#services' },
              { key: 'contact', href: '#contact' },
            ].map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="text-sm font-medium text-white/60 hover:text-white transition-colors"
              >
                {t(`nav.${item.key}`)}
              </a>
            ))}
          </div>

        </div>
      </div>
    </footer >
  );
};

export default Footer;
