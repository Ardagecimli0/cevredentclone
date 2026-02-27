import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import CountrySelect from './CountrySelect';

const WhyChooseUs = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const { lang: urlLang } = useParams();
  const [formData, setFormData] = useState({ name: '', phone: '', email: '' });

  const items = t('whyChoose.items', { returnObjects: true }) as Array<{
    title: string;
    description: string;
  }>;

  const [loading, setLoading] = useState(false);
  const [phoneError, setPhoneError] = useState(false);

  // Initial state is empty to allow IP-based detection in CountrySelect
  const [formCountry, setFormCountry] = useState('');

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, ''); // Kural 1: Sadece rakamlar

    // Kural 2: Başındaki 0'ı sil
    if (value.startsWith('0')) {
      value = value.substring(1);
    }

    // Kural 3: Ülke Bazlı Özel Başlangıç Kontrolleri (Validation on entry)
    if (formCountry === '+90' && value.length > 0 && value[0] !== '5') return; // Türkiye: '5' ile başlamalı
    if (formCountry === '+7' && value.length > 0 && value[0] !== '9') return;  // Rusya: Genelde '9' ile başlar
    if (formCountry === '+39' && value.length > 0 && value[0] !== '3') return; // İtalya: Genelde '3' ile başlar

    // Kural 4: Ülke Bazlı Hane Sınırları (MaxLength)
    if (formCountry === '+90' && value.length > 10) value = value.substring(0, 10);
    if (formCountry === '+7' && value.length > 10) value = value.substring(0, 10);
    if (formCountry === '+39' && value.length > 10) value = value.substring(0, 10);
    if (formCountry === '+49' && value.length > 11) value = value.substring(0, 11);

    setFormData({ ...formData, phone: value });

    // Görsel Geri Bildirim
    const phoneLength = value.length;
    let isError = false;
    if (phoneLength > 0) {
      if (formCountry === '+90') isError = phoneLength < 10;
      else if (formCountry === '+7') isError = phoneLength < 10;
      else if (formCountry === '+39') isError = phoneLength < 9;
      else if (formCountry === '+49') isError = phoneLength < 10;
      else isError = phoneLength < 7;
    }
    setPhoneError(isError);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const phoneLength = formData.phone.length;
    let isValid = false;

    // Ülke Bazlı Kesin Doğrulama
    if (formCountry === '+90') isValid = phoneLength === 10;
    else if (formCountry === '+7') isValid = phoneLength === 10;
    else if (formCountry === '+39') isValid = phoneLength >= 9 && phoneLength <= 10;
    else if (formCountry === '+49') isValid = phoneLength >= 10 && phoneLength <= 11;
    else isValid = phoneLength >= 7 && phoneLength <= 15;

    if (!isValid) {
      setPhoneError(true);
      alert(t('promo.invalidPhone'));
      return;
    }

    setLoading(true);
    // ... rest of the code

    try {
      // Prepare the data to send to the API
      // Map language code to full English name for Zoho
      const languageMap: Record<string, string> = {
        en: 'English',
        tr: 'Turkish',
        de: 'German',
        fr: 'French',
        es: 'Spanish',
        ru: 'Russian',
        it: 'Italian'
      };

      // Detect language from URL or i18n
      const pathLang = window.location.pathname.split('/')[1];
      const currentLang = languageMap[pathLang] || languageMap[i18n.language.split('-')[0]] || 'English';

      const payload = {
        name: formData.name,
        phone: `${formCountry}${formData.phone}`,
        email: formData.email,
        lead_source: "Google/Web Form",
        language: currentLang,
        source_language: currentLang,
        ip: "",
        doctor: "CevreDent",
        interest: ["Dental"],
        procedure: [],
        utm_source: "",
        utm_medium: "",
        utm_keyword: "",
        utm_matchtype: "",
        utm_network: "",
        gclid: "",
        lar_id: "7240697000000968008"
      };

      console.log("Sending to Zoho:", payload);

      const response = await fetch(`https://cevre.hotelistan.net/api/form-patient`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      console.log("Zoho response status:", response.status);

      if (!response.ok) {
        throw new Error(`API returned status: ${response.status}`);
      }

      // Success handling
      // alert(t('promo.success', 'Form submitted successfully!'));
      setFormData({ name: '', phone: '', email: '' });
      navigate(`/${i18n.language}/thank-you`);

    } catch (error) {
      console.error("Error submitting form:", error);
      alert(t('promo.error', 'Error submitting form. Please try again or contact us via WhatsApp.'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="why" className="section-padding bg-dental-navy">
      <div className="container-dental">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left: Why Choose Us */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-secondary text-white mb-8">
              {t('whyChoose.title')}
            </h2>

            <div className="space-y-6">
              {items.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                    <p className="text-sm text-white/70">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Promo Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-secondary rounded-2xl p-6 md:p-8"
          >
            <h3 className="text-2xl font-bold text-dental-navy mb-2">
              {t('promo.title')}
            </h3>
            <p className="text-muted-foreground mb-6">
              {t('promo.description')}
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="text"
                placeholder={t('promo.name')}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="h-12 bg-white border-border"
              />
              <div className="flex gap-2">
                <CountrySelect
                  value={formCountry}
                  onChange={setFormCountry}
                />
                <Input
                  type="tel"
                  placeholder=""
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  className={`h-12 bg-white border-border flex-1 transition-colors ${phoneError ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                  required
                />
              </div>
              <Input
                type="email"
                placeholder={t('promo.email')}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="h-12 bg-white border-border"
              />
              <Button
                type="submit"
                size="lg"
                className="w-full bg-dental-navy hover:bg-dental-navy/90 text-white h-12"
                disabled={loading}
              >
                {loading ? t('promo.sending') : t('promo.cta')}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
