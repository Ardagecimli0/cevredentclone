import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import ba1 from '@/assets/bfafter/1.png';
import ba2 from '@/assets/bfafter/2.png';
import ba3 from '@/assets/bfafter/3.png';
import ba4 from '@/assets/bfafter/4.png';
import ba5 from '@/assets/bfafter/5.png';
import ba6 from '@/assets/bfafter/6.png';
import ba7 from '@/assets/bfafter/7.png';
import ba8 from '@/assets/bfafter/8.png';

const BeforeAfter = () => {
  const { t } = useTranslation();
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const images = [ba1, ba2, ba3, ba4, ba5, ba6, ba7, ba8];

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section id="before-after" className="section-padding bg-background">
      <div className="container-dental">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="heading-secondary text-center text-dental-navy mb-12"
        >
          {t('beforeAfter.title')}
        </motion.h2>

        {/* Carousel */}
        <div className="relative mb-8 max-w-6xl mx-auto px-4 md:px-12">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 2000,
                stopOnInteraction: false,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {images.map((img, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-full md:basis-1/3">
                  <div className="rounded-xl overflow-hidden shadow-lg h-[400px] relative group">
                    <img
                      src={img}
                      alt={`Before & After ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Overlay with Logo/Branding matching reference */}
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4 flex justify-between items-end">
                      <span className="text-white font-semibold text-sm">{t('beforeAfter.badge')}</span>
                      <span className="text-white/80 text-xs">CevreDent</span>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-4 md:-left-12 bg-white text-dental-navy border-none shadow-lg hover:bg-gray-50" />
            <CarouselNext className="-right-4 md:-right-12 bg-white text-dental-navy border-none shadow-lg hover:bg-gray-50" />
          </Carousel>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-2 mb-8 flex-wrap px-4">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${current === index ? 'bg-dental-navy w-6' : 'bg-dental-navy/30'
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="text-center">
          <Button
            asChild
            size="lg"
            className="bg-dental-navy hover:bg-dental-navy/90 text-white"
          >
            <a
              href="https://api.whatsapp.com/send?phone=905518622525&text=What%20are%20the%20options%20and%20pricing%20for%20dental%20treatment"
            >
              {t('beforeAfter.cta')}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
