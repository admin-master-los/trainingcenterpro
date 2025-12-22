import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare } from 'lucide-react';
import { Button } from '../../components/Button';
import { platformContent } from '../../data/platformContent';

interface CTASectionProps {
  onNavigate: (page: string) => void;
}

export function CTASection({ onNavigate }: CTASectionProps) {
  const { cta } = platformContent;

  return (
    <section className="py-32 bg-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-6xl font-bold text-white mb-6">
            {cta.final.title}
            <br />
            <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              {cta.final.titleHighlight}
            </span>
          </h2>

          <p className="text-xl text-gray-400 mb-12">
            {cta.final.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              icon={ArrowRight}
              onClick={() => onNavigate('catalog')}
            >
              {cta.final.cta}
            </Button>
            <Button
              size="lg"
              variant="secondary"
              icon={MessageSquare}
            >
              {cta.final.ctaSecondary}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
