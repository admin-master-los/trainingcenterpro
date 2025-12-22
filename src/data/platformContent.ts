export const platformContent = {
  // HERO SECTION
  hero: {
    title: "Transformez vos formations",
    titleHighlight: "en un business digital",
    subtitle: "La plateforme tout-en-un pour digitaliser vos formations, gérer vos inscriptions et développer votre activité",
    cta: "Lancer mon portail de formation",
    ctaSecondary: "Voir une démo",
    stats: [
      { value: "-50%", label: "Temps administratif" },
      { value: "+40%", label: "Inscriptions" },
      { value: "100%", label: "Digital" }
    ]
  },

  // PROBLEM / SOLUTION
  problem: {
    title: "Les défis des centres de formation",
    subtitle: "aujourd'hui",
    issues: [
      { title: "Gestion manuelle", description: "Inscriptions papier, suivi Excel, perte de temps" },
      { title: "Visibilité limitée", description: "Difficile d'attirer de nouveaux apprenants" },
      { title: "Paiements complexes", description: "Gestion des règlements fastidieuse" },
      { title: "Suivi inefficace", description: "Aucune vue d'ensemble sur votre activité" }
    ]
  },

  solution: {
    title: "Une plateforme",
    titleHighlight: "clé en main",
    subtitle: "pour transformer votre centre de formation",
    tagline: "Tout ce dont vous avez besoin pour digitaliser votre activité de formation",
    cta: "Découvrir la plateforme"
  },

  // FEATURES
  features: [
    {
      icon: "BookOpen",
      title: "Catalogue de formations",
      description: "Présentez vos formations avec style. Photos, vidéos, niveaux, dates, prix.",
      image: "/assets/feature-catalog.jpg"
    },
    {
      icon: "UserPlus",
      title: "Inscriptions en ligne",
      description: "Vos apprenants s'inscrivent en quelques clics. Formulaires intelligents et confirmations automatiques.",
      image: "/assets/feature-registration.jpg"
    },
    {
      icon: "CreditCard",
      title: "Paiements intégrés",
      description: "Mobile Money, Cartes bancaires, Virements. Encaissez facilement et en toute sécurité.",
      image: "/assets/feature-payment.jpg"
    },
    {
      icon: "Award",
      title: "Certificats automatiques",
      description: "Générez et envoyez des attestations professionnelles dès la fin de la formation.",
      image: "/assets/feature-certificates.jpg"
    },
    {
      icon: "BarChart3",
      title: "Dashboard formateur",
      description: "Suivez vos sessions, participants, revenus en temps réel. Pilotez votre activité.",
      image: "/assets/feature-dashboard.jpg"
    },
    {
      icon: "MessageSquare",
      title: "Communication automatisée",
      description: "Rappels, confirmations, relances. Restez en contact avec vos apprenants.",
      image: "/assets/feature-communication.jpg"
    }
  ],

  // TRAINING CATALOG
  trainings: [
    {
      id: 1,
      title: "Développement Web Full-Stack",
      category: "Développement",
      level: "Intermédiaire",
      duration: "12 semaines",
      price: 450000,
      currency: "FCFA",
      image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800",
      rating: 4.8,
      students: 156,
      sessions: [
        { date: "15 Jan 2026", slots: 12, available: 3 },
        { date: "05 Fév 2026", slots: 15, available: 8 },
        { date: "20 Mar 2026", slots: 12, available: 12 }
      ],
      instructor: "Dr. Koffi Mensah",
      description: "Maîtrisez le développement web moderne avec React, Node.js et MongoDB"
    },
    {
      id: 2,
      title: "Marketing Digital & Réseaux Sociaux",
      category: "Marketing",
      level: "Débutant",
      duration: "8 semaines",
      price: 280000,
      currency: "FCFA",
      image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800",
      rating: 4.9,
      students: 203,
      sessions: [
        { date: "10 Jan 2026", slots: 20, available: 5 },
        { date: "01 Fév 2026", slots: 20, available: 15 }
      ],
      instructor: "Aminata Diallo",
      description: "Développez votre présence en ligne et boostez vos ventes"
    },
    {
      id: 3,
      title: "Comptabilité & Gestion Financière",
      category: "Finance",
      level: "Professionnel",
      duration: "16 semaines",
      price: 520000,
      currency: "FCFA",
      image: "https://images.pexels.com/photos/6863332/pexels-photo-6863332.jpeg?auto=compress&cs=tinysrgb&w=800",
      rating: 4.7,
      students: 98,
      sessions: [
        { date: "20 Jan 2026", slots: 10, available: 2 },
        { date: "10 Mar 2026", slots: 10, available: 7 }
      ],
      instructor: "Jean-Baptiste Kouassi",
      description: "Formation certifiante en comptabilité générale et analytique"
    },
    {
      id: 4,
      title: "Design Graphique avec Adobe Suite",
      category: "Design",
      level: "Intermédiaire",
      duration: "10 semaines",
      price: 350000,
      currency: "FCFA",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      rating: 4.6,
      students: 134,
      sessions: [
        { date: "12 Jan 2026", slots: 15, available: 10 },
        { date: "15 Fév 2026", slots: 15, available: 15 }
      ],
      instructor: "Fatoumata Traoré",
      description: "Photoshop, Illustrator, InDesign : devenez designer professionnel"
    },
    {
      id: 5,
      title: "Gestion de Projet Agile & Scrum",
      category: "Management",
      level: "Intermédiaire",
      duration: "6 semaines",
      price: 320000,
      currency: "FCFA",
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800",
      rating: 4.8,
      students: 167,
      sessions: [
        { date: "08 Jan 2026", slots: 18, available: 6 },
        { date: "25 Fév 2026", slots: 18, available: 14 }
      ],
      instructor: "Ibrahim Sow",
      description: "Certifiez-vous Scrum Master et pilotez des projets avec agilité"
    },
    {
      id: 6,
      title: "Anglais Professionnel Intensif",
      category: "Langues",
      level: "Tous niveaux",
      duration: "12 semaines",
      price: 220000,
      currency: "FCFA",
      image: "https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg?auto=compress&cs=tinysrgb&w=800",
      rating: 4.9,
      students: 289,
      sessions: [
        { date: "05 Jan 2026", slots: 25, available: 8 },
        { date: "20 Jan 2026", slots: 25, available: 18 },
        { date: "10 Fév 2026", slots: 25, available: 25 }
      ],
      instructor: "Sarah Johnson",
      description: "Passez du niveau débutant à opérationnel en milieu professionnel"
    }
  ],

  // PRICING
  pricing: {
    title: "Tarifs transparents",
    titleHighlight: "adaptés à votre activité",
    subtitle: "Choisissez la formule qui correspond à vos besoins",
    plans: [
      {
        name: "Starter",
        price: 0,
        currency: "FCFA",
        period: "/mois",
        description: "Pour démarrer votre activité digitale",
        features: [
          "Jusqu'à 3 formations",
          "50 inscriptions/mois",
          "Catalogue en ligne",
          "Inscriptions & paiements",
          "Support email"
        ],
        cta: "Commencer gratuitement",
        popular: false
      },
      {
        name: "Pro",
        price: 45000,
        currency: "FCFA",
        period: "/mois",
        description: "Pour les centres en croissance",
        features: [
          "Formations illimitées",
          "500 inscriptions/mois",
          "Dashboard analytics",
          "Certificats automatiques",
          "Multi-formateurs",
          "Support prioritaire",
          "Branding personnalisé"
        ],
        cta: "Essayer 30 jours gratuits",
        popular: true
      },
      {
        name: "Enterprise",
        price: null,
        currency: "FCFA",
        period: "",
        description: "Pour les grandes organisations",
        features: [
          "Tout illimité",
          "API & intégrations",
          "Manager dédié",
          "Formation de l'équipe",
          "SLA garantis",
          "Développements sur mesure"
        ],
        cta: "Nous contacter",
        popular: false
      }
    ]
  },

  // DASHBOARD MOCK DATA
  dashboard: {
    stats: [
      { label: "Revenus ce mois", value: "2 450 000", unit: "FCFA", change: "+12%", trend: "up" },
      { label: "Inscriptions", value: "47", unit: "", change: "+8%", trend: "up" },
      { label: "Taux de remplissage", value: "78", unit: "%", change: "+5%", trend: "up" },
      { label: "Note moyenne", value: "4.7", unit: "/5", change: "—", trend: "neutral" }
    ],
    upcomingSessions: [
      { id: 1, training: "Développement Web Full-Stack", date: "15 Jan 2026", time: "09:00", participants: 12, capacity: 15, status: "confirmed" },
      { id: 2, training: "Marketing Digital", date: "16 Jan 2026", time: "14:00", participants: 18, capacity: 20, status: "confirmed" },
      { id: 3, training: "Design Graphique", date: "18 Jan 2026", time: "10:00", participants: 14, capacity: 15, status: "confirmed" },
      { id: 4, training: "Gestion de Projet", date: "20 Jan 2026", time: "09:00", participants: 8, capacity: 18, status: "places available" }
    ],
    recentPayments: [
      { id: 1, student: "Amadou Diop", training: "Développement Web", amount: 450000, currency: "FCFA", date: "12 Déc 2025", method: "Mobile Money", status: "completed" },
      { id: 2, student: "Marie Kouadio", training: "Marketing Digital", amount: 280000, currency: "FCFA", date: "11 Déc 2025", method: "Carte bancaire", status: "completed" },
      { id: 3, student: "Yao N'Guessan", training: "Comptabilité", amount: 520000, currency: "FCFA", date: "10 Déc 2025", method: "Virement", status: "pending" },
      { id: 4, student: "Awa Sow", training: "Design Graphique", amount: 350000, currency: "FCFA", date: "09 Déc 2025", method: "Mobile Money", status: "completed" },
      { id: 5, student: "Boubacar Kane", training: "Anglais Pro", amount: 220000, currency: "FCFA", date: "08 Déc 2025", method: "Carte bancaire", status: "completed" }
    ],
    certificates: [
      { id: 1, student: "Ibrahim Touré", training: "Marketing Digital", issueDate: "05 Déc 2025", status: "issued" },
      { id: 2, student: "Fatou Balde", training: "Gestion de Projet", issueDate: "03 Déc 2025", status: "issued" },
      { id: 3, student: "Sekou Diarra", training: "Anglais Pro", issueDate: "01 Déc 2025", status: "issued" }
    ]
  },

  // PAYMENT METHODS
  paymentMethods: [
    { id: "mobile-money", name: "Mobile Money", providers: ["Orange Money", "MTN Money", "Moov Money", "Wave"], icon: "Smartphone" },
    { id: "card", name: "Carte bancaire", providers: ["Visa", "Mastercard"], icon: "CreditCard" },
    { id: "transfer", name: "Virement bancaire", providers: [], icon: "Building2" }
  ],

  // TESTIMONIALS
  testimonials: [
    {
      name: "Koffi Mensah",
      role: "Directeur, TechAcademy Abidjan",
      avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150",
      content: "Nos inscriptions ont doublé en 3 mois. La plateforme est intuitive et nos apprenants adorent.",
      rating: 5
    },
    {
      name: "Aminata Diallo",
      role: "Coach indépendante",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150",
      content: "Je passe 4x moins de temps sur l'administratif. Je peux enfin me concentrer sur la formation.",
      rating: 5
    },
    {
      name: "Jean-Baptiste Kouassi",
      role: "Centre de formation comptable",
      avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150",
      content: "Les paiements mobiles ont tout simplifié. Plus de suivi Excel, tout est automatique.",
      rating: 5
    }
  ],

  // FOOTER
  footer: {
    tagline: "La plateforme qui transforme les centres de formation",
    links: {
      product: [
        { label: "Fonctionnalités", href: "#features" },
        { label: "Tarifs", href: "#pricing" },
        { label: "Démo", href: "#demo" }
      ],
      company: [
        { label: "À propos", href: "#about" },
        { label: "Blog", href: "#blog" },
        { label: "Contact", href: "#contact" }
      ],
      legal: [
        { label: "Conditions d'utilisation", href: "#terms" },
        { label: "Confidentialité", href: "#privacy" }
      ]
    },
    social: [
      { platform: "Twitter", icon: "Twitter", url: "#" },
      { platform: "LinkedIn", icon: "Linkedin", url: "#" },
      { platform: "Facebook", icon: "Facebook", url: "#" }
    ],
    copyright: "© 2026 TrainingCenter Pro. Tous droits réservés."
  },

  // CTA SECTIONS
  cta: {
    final: {
      title: "Prêt à transformer",
      titleHighlight: "votre centre de formation ?",
      subtitle: "Rejoignez les centaines de formateurs qui ont déjà digitalisé leur activité",
      cta: "Démarrer gratuitement",
      ctaSecondary: "Parler à un expert"
    }
  }
};
