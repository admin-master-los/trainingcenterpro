import { motion } from 'framer-motion';
import { BookOpen, Award, Clock, TrendingUp, Play, Download, Calendar, CheckCircle } from 'lucide-react';

export function StudentPage() {
  const studentData = {
    name: "Amadou Diop",
    avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150",
    enrolledCourses: 3,
    completedCourses: 1,
    certificates: 1,
    totalHours: 45
  };

  const courses = [
    {
      id: 1,
      title: "Développement Web Full-Stack",
      instructor: "Dr. Koffi Mensah",
      progress: 65,
      image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=400",
      nextLesson: "React Hooks avancés",
      duration: "12 semaines",
      status: "in-progress"
    },
    {
      id: 2,
      title: "Marketing Digital & Réseaux Sociaux",
      instructor: "Aminata Diallo",
      progress: 100,
      image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=400",
      nextLesson: "Completed",
      duration: "8 semaines",
      status: "completed"
    },
    {
      id: 3,
      title: "Design Graphique avec Adobe Suite",
      instructor: "Fatoumata Traoré",
      progress: 25,
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400",
      nextLesson: "Introduction à Photoshop",
      duration: "10 semaines",
      status: "in-progress"
    }
  ];

  const upcomingLessons = [
    { id: 1, title: "React Hooks avancés", date: "24 Déc 2025", time: "10:00", course: "Développement Web" },
    { id: 2, title: "Photoshop - Retouche photo", date: "26 Déc 2025", time: "14:00", course: "Design Graphique" },
    { id: 3, title: "Node.js & Express", date: "28 Déc 2025", time: "10:00", course: "Développement Web" }
  ];

  const certificates = [
    {
      id: 1,
      course: "Marketing Digital & Réseaux Sociaux",
      issueDate: "15 Déc 2025",
      instructor: "Aminata Diallo"
    }
  ];

  return (
    <div className="min-h-screen bg-black pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <img
                src={studentData.avatar}
                alt={studentData.name}
                className="w-16 h-16 rounded-full border-2 border-pink-500"
              />
              <div>
                <h1 className="text-3xl font-bold text-white">
                  Bonjour, {studentData.name.split(' ')[0]} 👋
                </h1>
                <p className="text-gray-400">Continuons votre apprentissage</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { icon: BookOpen, label: "Cours actifs", value: studentData.enrolledCourses, color: "from-pink-500 to-rose-500" },
            { icon: Award, label: "Certificats", value: studentData.certificates, color: "from-purple-500 to-indigo-500" },
            { icon: CheckCircle, label: "Terminés", value: studentData.completedCourses, color: "from-green-500 to-emerald-500" },
            { icon: Clock, label: "Heures", value: studentData.totalHours, color: "from-blue-500 to-cyan-500" }
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700/50"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-lg flex items-center justify-center mb-3`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* My Courses */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="text-2xl font-bold text-white mb-4">Mes formations</h2>
              <div className="space-y-4">
                {courses.map((course, index) => (
                  <motion.div
                    key={course.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden border border-gray-700/50 hover:border-pink-500/50 transition-all"
                  >
                    <div className="flex flex-col sm:flex-row gap-4 p-4">
                      <div className="relative w-full sm:w-32 h-32 rounded-lg overflow-hidden flex-shrink-0">
                        <img
                          src={course.image}
                          alt={course.title}
                          className="w-full h-full object-cover"
                        />
                        {course.status === 'completed' && (
                          <div className="absolute inset-0 bg-green-500/80 flex items-center justify-center">
                            <CheckCircle className="w-8 h-8 text-white" />
                          </div>
                        )}
                      </div>

                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="text-lg font-bold text-white mb-1">{course.title}</h3>
                            <p className="text-sm text-gray-400">{course.instructor}</p>
                          </div>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            course.status === 'completed'
                              ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                              : 'bg-pink-500/20 text-pink-400 border border-pink-500/30'
                          }`}>
                            {course.status === 'completed' ? 'Terminé' : 'En cours'}
                          </span>
                        </div>

                        <div className="mb-3">
                          <div className="flex items-center justify-between text-sm mb-2">
                            <span className="text-gray-400">Progression</span>
                            <span className="text-white font-semibold">{course.progress}%</span>
                          </div>
                          <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${course.progress}%` }}
                              transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                              className="h-full bg-gradient-to-r from-pink-500 to-purple-600 rounded-full"
                            />
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-400">
                            {course.status === 'completed' ? 'Terminé' : `Prochain: ${course.nextLesson}`}
                          </span>
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg text-sm font-semibold flex items-center gap-2"
                          >
                            {course.status === 'completed' ? (
                              <>Revoir <Play className="w-4 h-4" /></>
                            ) : (
                              <>Continuer <Play className="w-4 h-4" /></>
                            )}
                          </motion.button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Upcoming Lessons */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700/50"
            >
              <div className="flex items-center gap-2 mb-4">
                <Calendar className="w-5 h-5 text-pink-500" />
                <h3 className="text-lg font-bold text-white">Prochains cours</h3>
              </div>
              <div className="space-y-3">
                {upcomingLessons.map((lesson) => (
                  <div key={lesson.id} className="bg-gray-800/50 rounded-lg p-3 border border-gray-700/50">
                    <div className="text-sm font-semibold text-white mb-1">{lesson.title}</div>
                    <div className="text-xs text-gray-400 mb-2">{lesson.course}</div>
                    <div className="flex items-center gap-2 text-xs text-gray-400">
                      <Calendar className="w-3 h-3" />
                      <span>{lesson.date}</span>
                      <span>•</span>
                      <Clock className="w-3 h-3" />
                      <span>{lesson.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Certificates */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700/50"
            >
              <div className="flex items-center gap-2 mb-4">
                <Award className="w-5 h-5 text-green-500" />
                <h3 className="text-lg font-bold text-white">Certificats</h3>
              </div>
              <div className="space-y-3">
                {certificates.map((cert) => (
                  <div key={cert.id} className="bg-green-500/10 rounded-lg p-4 border border-green-500/30">
                    <div className="text-sm font-semibold text-white mb-2">{cert.course}</div>
                    <div className="text-xs text-gray-400 mb-3">
                      Émis le {cert.issueDate}
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full px-3 py-2 bg-green-500 text-white rounded-lg text-sm font-semibold flex items-center justify-center gap-2"
                    >
                      <Download className="w-4 h-4" />
                      Télécharger
                    </motion.button>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Progress Stats */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl p-6 border border-purple-500/30"
            >
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="w-5 h-5 text-purple-400" />
                <h3 className="text-lg font-bold text-white">Cette semaine</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 text-sm">Leçons complétées</span>
                  <span className="text-white font-bold">8</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 text-sm">Temps d'étude</span>
                  <span className="text-white font-bold">12h</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 text-sm">Moyenne</span>
                  <span className="text-white font-bold">87%</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
