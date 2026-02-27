import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const Influencers = () => {
  const { t } = useTranslation();

  const videos = [
    'https://www.youtube.com/embed/v2ZA0P2OYio',
    'https://www.youtube.com/embed/Wv50Iyy0Bk0',
    'https://www.youtube.com/embed/eemE3Z3i2IA',
  ];

  return (
    <section id="influencers" className="section-padding bg-secondary">
      <div className="container-dental">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="heading-secondary text-center mb-12"
        >
          {t('influencers.title')}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="aspect-video rounded-xl overflow-hidden shadow-lg"
            >
              <iframe
                src={video}
                title={`Influencer Video ${index + 1}`}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Influencers;
