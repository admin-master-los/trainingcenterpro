import { motion } from 'framer-motion';
import { BookOpen, Users, CreditCard, Award, BarChart3, Calendar, ArrowRight, CheckCircle, Zap } from 'lucide-react';
import { Button } from '../../components/Button';

interface TrainerPageProps {
  onNavigate: (page: string) => void;
}

export function TrainerPage({ onNavigate }: TrainerPageProps) {
  const features = [
    {
      icon: BookOpen,
      title: "Catalogue de formations",
      description: "Créez et gérez vos formations avec un éditeur intuitif. Photos, vidéos, descriptions détaillées.",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: Users,
      title: "Gestion des inscriptions",
      description: "Inscriptions automatisées, formulaires personnalisables, confirmations par email.",
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: CreditCard,
      title: "Paiements intégrés",
      description: "Mobile Money, cartes bancaires, virements. Encaissement sécurisé et automatique.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Award,
      title: "Certificats automatiques",
      description: "Génération et envoi automatique d'attestations professionnelles personnalisées.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: BarChart3,
      title: "Tableau de bord analytics",
      description: "Suivez vos revenus, taux de remplissage, performance en temps réel.",
      color: "from-orange-500 to-amber-500"
    },
    {
      icon: Calendar,
      title: "Planning & sessions",
      description: "Planifiez vos sessions, gérez les places disponibles, calendrier synchronisé.",
      color: "from-teal-500 to-cyan-500"
    }
  ];

  const benefits = [
    "Réduisez votre temps administratif de 50%",
    "Augmentez vos inscriptions de 40%",
    "Automatisez vos paiements et relances",
    "Centralisez toute votre activité",
    "Support technique dédié 24/7",
    "Formation complète incluse"
  ];

  const stats = [
    { value: "2,500+", label: "Formateurs actifs" },
    { value: "150K+", label: "Apprenants formés" },
    { value: "98%", label: "Satisfaction" },
    { value: "24/7", label: "Support" }
  ];

  return (
    <div className="min-h-screen bg-black pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full text-purple-400 text-sm font-medium mb-6"
          >
            <Zap className="w-4 h-4 inline mr-2" />
            Espace Formateur
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Créez votre
            <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent"> plateforme de formation</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto mb-8"
          >
            Tout ce dont vous avez besoin pour digitaliser votre activité, gérer vos formations et développer votre business en ligne
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Button
              size="lg"
              icon={ArrowRight}
              onClick={() => onNavigate('dashboard')}
            >
              Créer mon portail formateur
            </Button>
            <Button
              size="lg"
              variant="secondary"
            >
              Voir une démo
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + index * 0.1 }}
              >
                <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-4">
            Fonctionnalités
            <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent"> clés</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Une plateforme complète pour gérer toute votre activité de formation
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.03, y: -5 }}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700/50 hover:border-pink-500/50 transition-all group"
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 lg:p-12 border border-gray-700/50 mb-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Pourquoi choisir
                <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent"> notre plateforme ?</span>
              </h2>
              <p className="text-gray-400 mb-6">
                Rejoignez des milliers de formateurs qui ont déjà transformé leur activité grâce à TrainingCenter Pro
              </p>

              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="relative">
              <div className="aspect-video rounded-xl overflow-hidden border-2 border-pink-500/30 shadow-2xl shadow-pink-500/20">
                <img
                  src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Dashboard preview"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl" />
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-pink-500/20 rounded-full blur-3xl" />
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-pink-500/10 to-purple-500/10 border border-pink-500/30 rounded-2xl p-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Prêt à commencer ?
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Créez votre portail de formation en quelques minutes et commencez à digitaliser votre activité dès aujourd'hui
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              icon={ArrowRight}
              onClick={() => onNavigate('dashboard')}
            >
              Créer mon portail maintenant
            </Button>
            <Button
              size="lg"
              variant="secondary"
              onClick={() => onNavigate('home')}
            >
              Retour à l'accueil
            </Button>
          </div>
          <p className="text-gray-500 text-sm mt-6">
            Gratuit pendant 30 jours • Aucune carte bancaire requise
          </p>
        </motion.div>
      </div>
    </div>
  );
}
