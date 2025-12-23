import { motion } from 'framer-motion';
import { GraduationCap, Users, ArrowRight } from 'lucide-react';

interface RoleSelectionProps {
  onNavigate: (page: string) => void;
}

export function RoleSelectionPage({ onNavigate }: RoleSelectionProps) {
  const roles = [
    {
      type: 'student',
      title: 'Apprenant',
      description: 'Je veux suivre des formations et développer mes compétences',
      icon: GraduationCap,
      color: 'from-blue-500 to-cyan-500',
      benefits: [
        'Accès au catalogue de formations',
        'Suivi de progression personnalisé',
        'Certificats professionnels',
        'Planning de cours interactif'
      ],
      action: () => onNavigate('catalog')
    },
    {
      type: 'trainer',
      title: 'Formateur',
      description: 'Je veux créer et gérer mes formations en ligne',
      icon: Users,
      color: 'from-pink-500 to-purple-500',
      benefits: [
        'Plateforme de gestion complète',
        'Inscriptions & paiements automatisés',
        'Génération de certificats',
        'Analytics et reporting'
      ],
      action: () => onNavigate('trainer')
    }
  ];

  return (
    <div className="min-h-screen bg-black pt-24 pb-16 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-2 bg-pink-500/10 border border-pink-500/30 rounded-full text-pink-400 text-sm font-medium mb-6"
          >
            Bienvenue sur TrainingCenter Pro
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4"
          >
            Vous êtes ?
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Choisissez votre profil pour accéder à votre espace personnalisé
          </motion.p>
        </motion.div>

        {/* Role Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {roles.map((role, index) => {
            const Icon = role.icon;

            return (
              <motion.div
                key={role.type}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                onClick={role.action}
                className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border-2 border-gray-700/50 hover:border-pink-500/50 transition-all cursor-pointer group"
              >
                {/* Background Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${role.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity`} />

                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${role.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Title & Description */}
                <h2 className="text-2xl font-bold text-white mb-3">
                  {role.title}
                </h2>
                <p className="text-gray-400 mb-6">
                  {role.description}
                </p>

                {/* Benefits */}
                <ul className="space-y-3 mb-8">
                  {role.benefits.map((benefit, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 + i * 0.05 }}
                      className="flex items-center gap-3 text-gray-300 text-sm"
                    >
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${role.color}`} />
                      {benefit}
                    </motion.li>
                  ))}
                </ul>

                {/* CTA Button */}
                <motion.div
                  whileHover={{ x: 5 }}
                  className={`flex items-center gap-2 text-white font-semibold bg-gradient-to-r ${role.color} px-6 py-3 rounded-lg justify-center group-hover:shadow-lg transition-all`}
                >
                  Continuer
                  <ArrowRight className="w-5 h-5" />
                </motion.div>

                {/* Hover Arrow */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-all"
                >
                  <ArrowRight className="w-6 h-6 text-pink-500" />
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Footer Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center text-gray-500 text-sm mt-12"
        >
          Vous pourrez changer de profil à tout moment depuis votre compte
        </motion.p>
      </div>
    </div>
  );
}
