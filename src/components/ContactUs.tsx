import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Laptop, MessageSquare, User } from 'lucide-react';

const ContactUs = () => {
    const { t } = useTranslation();

    return (
        <section className="py-16 bg-muted/30">
            <div className="container-dental">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12 max-w-5xl mx-auto px-4">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex-1 text-center md:text-left space-y-4"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-dental-navy">
                            {t('contactUs.title', 'Free Online Consultation')}
                        </h2>

                        <div className="space-y-2">
                            <h3 className="text-xl font-semibold text-foreground/80">
                                {t('contactUs.subtitle', 'Virtual Consultation:')}
                            </h3>
                            <p className="text-muted-foreground max-w-md">
                                {t('contactUs.description', 'Connect with us before your surgery for a personalized pre-op meeting')}
                            </p>
                        </div>

                        <div className="pt-4">
                            <Button
                                asChild
                                size="lg"
                                className="bg-[#2D2D2D] hover:bg-[#1a1a1a] text-white min-w-[160px]"
                            >
                                <a
                                    href="https://api.whatsapp.com/send?phone=905518622525&text=What%20are%20the%20options%20and%20pricing%20for%20dental%20treatment"
                                >
                                    {t('contactUs.button', 'Contact Us Now')}
                                </a>
                            </Button>
                        </div>
                    </motion.div>

                    {/* Icon/Illustration */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex-1 flex justify-center md:justify-end"
                    >
                        <div className="relative w-64 h-64 md:w-80 md:h-80">
                            {/* Abstract Laptop Representation */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <Laptop className="w-full h-full text-dental-navy/10" strokeWidth={1} />
                            </div>

                            {/* Chat/User Elements */}
                            <div className="absolute top-1/4 right-1/4 bg-white p-4 rounded-2xl shadow-xl animate-bounce" style={{ animationDuration: '3s' }}>
                                <MessageSquare className="w-8 h-8 text-dental-navy" />
                            </div>

                            <div className="absolute bottom-1/3 left-1/3 bg-white p-4 rounded-full shadow-lg">
                                <User className="w-12 h-12 text-primary" />
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default ContactUs;
