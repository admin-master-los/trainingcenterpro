import { motion } from 'framer-motion';
import { Shield, Clock, TrendingUp, Lock, Smartphone, Globe, CheckCircle } from 'lucide-react';

export function TrustBenefitsSection() {
  const benefits = [
    {
      icon: Shield,
      title: "100% Sécurisé",
      description: "Paiements cryptés et données protégées selon les normes bancaires"
    },
    {
      icon: Clock,
      title: "Gain de temps",
      description: "Automatisez 90% de vos tâches administratives répétitives"
    },
    {
      icon: TrendingUp,
      title: "Croissance garantie",
      description: "Augmentez vos inscriptions de 40% dès les 3 premiers mois"
    },
    {
      icon: Smartphone,
      title: "Mobile-First",
      description: "Interface optimisée pour smartphone, tablette et ordinateur"
    },
    {
      icon: Lock,
      title: "Conformité totale",
      description: "Respect des réglementations locales et internationales"
    },
    {
      icon: Globe,
      title: "Paiements locaux",
      description: "Mobile Money, cartes et virements adaptés à votre marché"
    }
  ];

  const stats = [
    { number: "2,500+", label: "Centres de formation", color: "from-pink-500 to-rose-500" },
    { number: "150K+", label: "Apprenants formés", color: "from-purple-500 to-indigo-500" },
    { number: "98%", label: "Taux de satisfaction", color: "from-blue-500 to-cyan-500" },
    { number: "15+", label: "Pays couverts", color: "from-green-500 to-emerald-500" }
  ];

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgb(255 255 255) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700/50 rounded-2xl p-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className={`text-4xl sm:text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Section Header */}
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
            className="inline-block px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full text-green-400 text-sm font-medium mb-4"
          >
            ✓ Approuvé par des milliers de formateurs
          </motion.span>
          
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Pourquoi nous faire
            <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent"> confiance ?</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Une plateforme pensée pour votre réussite et la croissance de votre activité
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div
                  whileHover={{ scale: 1.03, y: -5 }}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700/50 hover:border-pink-500/50 transition-all group h-full relative"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                    {benefit.title}
                    <CheckCircle className="w-4 h-4 text-green-400" />
                  </h3>
                  
                  <p className="text-gray-400 text-sm">
                    {benefit.description}
                  </p>

                  {/* Glow on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity" />
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center items-center gap-8"
        >
          <div className="flex items-center gap-2 text-gray-400">
            <Shield className="w-5 h-5 text-green-400" />
            <span className="text-sm">Certifié ISO 27001</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <Lock className="w-5 h-5 text-green-400" />
            <span className="text-sm">Conforme RGPD</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <CheckCircle className="w-5 h-5 text-green-400" />
            <span className="text-sm">Paiements PCI-DSS</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <Globe className="w-5 h-5 text-green-400" />
            <span className="text-sm">Support 24/7</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
