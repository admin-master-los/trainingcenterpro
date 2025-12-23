import { motion } from 'framer-motion';
import { Zap, Users, CreditCard, Award, ArrowRight } from 'lucide-react';

export function HowItWorksSection() {
  const steps = [
    {
      icon: Zap,
      number: "01",
      title: "Créez votre portail",
      description: "En quelques minutes, configurez votre espace de formation personnalisé avec vos couleurs et votre logo",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: Users,
      number: "02",
      title: "Ajoutez vos formations",
      description: "Importez vos programmes, définissez les prix et planifiez les sessions en toute simplicité",
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: CreditCard,
      number: "03",
      title: "Recevez les paiements",
      description: "Mobile Money, cartes bancaires, virements : vos apprenants paient en ligne en toute sécurité",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Award,
      number: "04",
      title: "Délivrez des certificats",
      description: "Génération automatique d'attestations professionnelles à la fin de chaque formation",
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full text-purple-400 text-sm font-medium mb-4"
          >
            Simple et efficace
          </motion.span>
          
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Comment ça marche ?
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Lancez votre plateforme de formation en 4 étapes simples
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-pink-500/0 via-purple-500/50 to-pink-500/0 -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  <motion.div
                    whileHover={{ y: -10 }}
                    className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700/50 hover:border-gray-600 transition-all group"
                  >
                    {/* Number Badge */}
                    <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-gray-700 rounded-full flex items-center justify-center">
                      <span className="text-xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                        {step.number}
                      </span>
                    </div>

                    {/* Icon */}
                    <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {step.description}
                    </p>

                    {/* Hover Arrow */}
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      whileHover={{ opacity: 1, x: 0 }}
                      className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all"
                    >
                      <ArrowRight className="w-5 h-5 text-pink-500" />
                    </motion.div>

                    {/* Glow Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity`} />
                  </motion.div>

                  {/* Arrow Between Steps (Desktop) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-8 -translate-y-1/2 z-10">
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <ArrowRight className="w-8 h-8 text-purple-500" />
                      </motion.div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-lg shadow-lg shadow-pink-500/30 hover:shadow-pink-500/50 transition-all duration-200 inline-flex items-center gap-2"
          >
            Démarrer gratuitement
            <ArrowRight className="w-5 h-5" />
          </motion.button>
          <p className="text-gray-400 text-sm mt-4">
            Aucune carte bancaire requise • Configuration en 5 minutes
          </p>
        </motion.div>
      </div>
    </section>
  );
}
