import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { RefreshCw, MessageSquare, Car, Building, Plane, HeartHandshake } from 'lucide-react';

const Packages = () => {
  const { t } = useTranslation();

  const packages = [
    {
      icon: RefreshCw,
      titleKey: 'packages.items.0.title',
      descKey: 'packages.items.0.description',
      color: 'text-blue-300'
    },
    {
      icon: MessageSquare,
      titleKey: 'packages.items.1.title',
      descKey: 'packages.items.1.description',
      color: 'text-blue-300'
    },
    {
      icon: Car,
      titleKey: 'packages.items.2.title',
      descKey: 'packages.items.2.description',
      color: 'text-blue-300'
    },
    {
      icon: Building,
      titleKey: 'packages.items.3.title',
      descKey: 'packages.items.3.description',
      color: 'text-blue-300'
    },
    {
      icon: Plane,
      titleKey: 'packages.items.4.title',
      descKey: 'packages.items.4.description',
      color: 'text-blue-300'
    },
    {
      icon: HeartHandshake,
      titleKey: 'packages.items.5.title',
      descKey: 'packages.items.5.description',
      color: 'text-blue-300'
    }
  ];

  return (
    <section id="packages" className="section-padding bg-background">
      <div className="container-dental">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="heading-secondary text-center text-dental-navy mb-12"
        >
          {t('packages.title')}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {packages.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-blue-50/50 rounded-2xl p-6 md:p-8 text-center hover:shadow-lg transition-shadow border border-blue-100"
            >
              <div className="flex justify-center mb-6">
                <item.icon className={`w-12 h-12 ${item.color} opacity-80`} />
              </div>
              <h3 className="text-xl font-bold text-dental-navy mb-4">
                {t(item.titleKey)}
              </h3>
              <p className="text-sm text-foreground/70 leading-relaxed">
                {t(item.descKey)}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button
            asChild
            size="lg"
            className="bg-[#1e1e3f] hover:bg-[#1e1e3f]/90 text-white min-w-[200px]"
          >
            <a
              href={`https://api.whatsapp.com/send?phone=905518622525&text=${t('whatsappMsg')}`}
            >
              {t('packages.cta')}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Packages;
