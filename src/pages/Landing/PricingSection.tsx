import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Button } from '../../components/Button';
import { Badge } from '../../components/Badge';
import { platformContent } from '../../data/platformContent';

interface PricingSectionProps {
  onNavigate?: (page: string) => void;
}

export function PricingSection({ onNavigate }: PricingSectionProps) {
  const { pricing } = platformContent;

  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            {pricing.title}
            <br />
            <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              {pricing.titleHighlight}
            </span>
          </h2>
          <p className="text-xl text-gray-400">
            {pricing.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricing.plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`
                relative rounded-2xl p-8 border
                ${plan.popular
                  ? 'bg-gradient-to-br from-pink-500/10 to-purple-500/10 border-pink-500/50 scale-105'
                  : 'bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700/50'
                }
              `}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge variant="primary" size="md">Le plus populaire</Badge>
                </div>
              )}

              <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
              <p className="text-gray-400 mb-6">{plan.description}</p>

              <div className="mb-6">
                {plan.price !== null ? (
                  <>
                    <span className="text-5xl font-bold text-white">
                      {plan.price.toLocaleString()}
                    </span>
                    <span className="text-gray-400 ml-2">{plan.currency}{plan.period}</span>
                  </>
                ) : (
                  <span className="text-3xl font-bold text-white">Sur mesure</span>
                )}
              </div>

              <Button
                fullWidth
                variant={plan.popular ? 'primary' : 'secondary'}
                size="lg"
                className="mb-6"
                onClick={() => onNavigate?.('role-selection')}
              >
                {plan.cta}
              </Button>

              <ul className="space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
