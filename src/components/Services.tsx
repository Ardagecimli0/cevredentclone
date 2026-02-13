import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import patient1 from '@/assets/patient-1.webp';
import patient2 from '@/assets/patient-2.webp';
import patient3 from '@/assets/patient-3.webp';
import patient4 from '@/assets/patient-4.webp';
import patient5 from '@/assets/patient-5.webp';

const Services = () => {
  const { t } = useTranslation();

  const topServices = [
    { key: 'dentalImplants', image: patient1, hasPackages: true },
    { key: 'dentalVeneers', image: patient2, hasPackages: true },
    { key: 'dentalCrowns', image: patient3, hasPackages: true },
  ];

  const bottomServices = [
    { key: 'hollywoodSmile', image: patient4, hasPackages: true },
    { key: 'restorativeDentistry', image: patient5, hasPackages: true },
  ];

  const ServiceCard = ({ service, index }: { service: typeof topServices[0]; index: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-card rounded-2xl overflow-hidden shadow-lg border border-border"
    >
      {/* Image with Title Overlay */}
      <div className="relative">
        <div className="aspect-square overflow-hidden">
          <img
            src={service.image}
            alt={t(`services.${service.key}.title`)}
            className="w-full h-full object-cover object-top"
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <a
            href="https://api.whatsapp.com/send?phone=905518622525&text=What%20are%20the%20options%20and%20pricing%20for%20dental%20treatment"
            className="block bg-dental-navy text-white text-center py-3 px-4 font-bold text-lg hover:bg-primary transition-colors"
          >
            {t(`services.${service.key}.title`)}
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 text-center">
        {service.hasPackages ? (
          <>
            <p className="font-semibold text-foreground mb-4">
              {t(`services.${service.key}.subtitle`)}
            </p>
            <ul className="space-y-2 mb-6">
              {(t(`services.${service.key}.items`, { returnObjects: true }) as string[]).map(
                (item, i) => (
                  <li key={i} className="flex items-start gap-2 text-left justify-center">
                    <ChevronRight className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" />
                    <a
                      href="https://api.whatsapp.com/send?phone=905518622525&text=What%20are%20the%20options%20and%20pricing%20for%20dental%20treatment"
                      className="text-sm text-dental-navy hover:text-primary underline"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </>
        ) : (
          <p className="text-sm text-muted-foreground mb-6">
            {t(`services.${service.key}.description`)}
          </p>
        )}

        <Button
          asChild
          className="bg-[#1e1e3f] hover:bg-[#1e1e3f]/90 text-white"
        >
          <a
            href="https://api.whatsapp.com/send?phone=905518622525&text=What%20are%20the%20options%20and%20pricing%20for%20dental%20treatment"
          >
            {t('services.getMoreInfo')}
          </a>
        </Button>
      </div>
    </motion.div>
  );

  return (
    <section id="services" className="section-padding bg-background">
      <div className="container-dental">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="heading-secondary text-center text-dental-navy mb-12"
        >
          {t('services.title')}
        </motion.h2>

        {/* Top Row - 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {topServices.map((service, index) => (
            <ServiceCard key={service.key} service={service} index={index} />
          ))}
        </div>

        {/* Bottom Row - 2 cards centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {bottomServices.map((service, index) => (
            <ServiceCard key={service.key} service={service} index={index + 3} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
