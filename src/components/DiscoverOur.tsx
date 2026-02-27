import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import clinic1 from '@/assets/unnamed.webp';
import clinic2 from '@/assets/2025-05-14.webp';
import clinic3 from '@/assets/2025-05-14 (1).webp';
import clinic4 from '@/assets/2025-05-14 (2).webp';
import clinic5 from '@/assets/2025-05-14 (3).webp';

const DiscoverOur = () => {
    const { t } = useTranslation();

    const photos = [clinic1, clinic2, clinic3, clinic4, clinic5];

    return (
        <section className="section-padding bg-background">
            <div className="container-dental">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="heading-secondary text-center text-dental-navy mb-12"
                >
                    {t('discoverOur.title', 'Discover Our Clinic with Photos')}
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
                    {/* Top Row: 3 Images */}
                    {photos.slice(0, 3).map((photo, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="rounded-xl overflow-hidden shadow-lg h-64 md:h-72"
                        >
                            <img
                                src={photo}
                                alt={`Clinic Photo ${index + 1}`}
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                            />
                        </motion.div>
                    ))}

                    {/* Bottom Row: 1 Vertical, 1 Wide */}
                    {/* Image 4: Vertical/Portrait */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="rounded-xl overflow-hidden shadow-lg h-96 md:h-auto md:aspect-[3/4]"
                    >
                        <img
                            src={photos[3]}
                            alt="Clinic Photo 4"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                    </motion.div>

                    {/* Image 5: Wide spanning 2 columns */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="md:col-span-2 rounded-xl overflow-hidden shadow-lg h-96 md:h-auto"
                    >
                        <img
                            src={photos[4]}
                            alt="Clinic Photo 5"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default DiscoverOur;
