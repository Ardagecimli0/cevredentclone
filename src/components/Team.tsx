import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import dtAyse from '@/assets/dt-ayse.webp';
import dtBusra from '@/assets/dt-busra.webp';
import dtSuhan from '@/assets/dt-suhan.webp';
import dtSiyavus from '@/assets/dt-siyavus.webp';
import dtAli from '@/assets/dt-ali.webp';

const Team = () => {
  const { t } = useTranslation();

  const teamMembers = [
    { name: 'Doc. Dr. Ayşe ATAY', image: dtAyse },
    { name: 'Spec. Dr. Suhan İNAL', image: dtSuhan },
    { name: 'Spec. Dr. Siavash ABBASGHOLIZADEH', image: dtSiyavus },
    { name: 'Spec. Dr. Siavash ABBASGHOLIZADEH', image: dtSiyavus },
    { name: 'Dt. Ali BAYRAMOGLU', image: dtAli },
    { name: 'Büşra ABUSALİH', image: dtBusra },
  ];

  return (
    <section id="team" className="section-padding bg-background">
      <div className="container-dental">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="heading-secondary text-center text-dental-navy mb-12"
        >
          {t('team.title')}
        </motion.h2>

        {/* Team Grid - 3x2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-xl p-6 text-center shadow-sm border border-border hover:shadow-md transition-shadow"
            >
              {/* Circular Image with Gradient Border */}
              <div className="relative w-32 h-32 mx-auto mb-4">
                <div className="absolute inset-0 bg-gradient-to-b from-sky-200 to-transparent rounded-full" />
                <div className="absolute inset-1 bg-white rounded-full overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="font-semibold text-sm text-dental-navy">{member.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
