
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ThankYou = () => {
    const { t, i18n } = useTranslation();

    const { lang } = useParams();

    useEffect(() => {
        if (lang && ['en', 'fr', 'de', 'es', 'tr', 'ru', 'it'].includes(lang)) {
            i18n.changeLanguage(lang);
        }
    }, [lang, i18n]);

    useEffect(() => {
        document.title = `${t('thankYou.title')} | ${t('site.title', 'CevreDent')}`;
    }, [i18n.language, t]);



    return (
        <div className="min-h-screen bg-white flex flex-col">
            <Header />
            <main className="flex-grow flex items-center justify-center py-20 mt-16 lg:mt-24">
                <div className="container px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="max-w-md mx-auto space-y-8 p-8 bg-white rounded-2xl shadow-sm border border-gray-100"
                    >
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                            className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto"
                        >
                            <CheckCircle className="w-12 h-12 text-green-500" />
                        </motion.div>

                        <div className="space-y-3">
                            <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
                                {t('thankYou.title')}
                            </h1>

                            <p className="text-gray-500 leading-relaxed">
                                {t('thankYou.description')}
                            </p>
                        </div>

                        <a
                            href={`https://api.whatsapp.com/send/?phone=905467633721&text=${t('whatsappMsg')}&type=phone_number&app_absent=0`}
                            className="inline-flex w-full items-center justify-center px-8 py-4 bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-green-500/20"
                        >
                            {t('thankYou.contactUs')}
                        </a>
                    </motion.div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default ThankYou;
