import { motion } from 'framer-motion';
import { Star, Users, Clock, Calendar } from 'lucide-react';
import { Button } from '../../components/Button';
import { Badge } from '../../components/Badge';

interface Session {
  date: string;
  slots: number;
  available: number;
}

interface TrainingCardProps {
  id: number;
  title: string;
  category: string;
  level: string;
  duration: string;
  price: number;
  currency: string;
  image: string;
  rating: number;
  students: number;
  sessions: Session[];
  instructor: string;
  description: string;
  onRegister: (id: number) => void;
}

export function TrainingCard({
  id,
  title,
  category,
  level,
  duration,
  price,
  currency,
  image,
  rating,
  students,
  sessions,
  instructor,
  description,
  onRegister
}: TrainingCardProps) {
  const getLevelColor = (level: string) => {
    switch (level.toLowerCase()) {
      case 'débutant': return 'success';
      case 'intermédiaire': return 'warning';
      case 'professionnel': return 'primary';
      default: return 'neutral';
    }
  };

  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700/50 rounded-2xl overflow-hidden"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 left-4">
          <Badge variant="neutral">{category}</Badge>
        </div>
        <div className="absolute top-4 right-4">
          <Badge variant={getLevelColor(level) as any}>{level}</Badge>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 line-clamp-2">
          {title}
        </h3>

        <p className="text-gray-400 text-sm mb-4 line-clamp-2">
          {description}
        </p>

        <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span>{rating}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span>{students} étudiants</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{duration}</span>
          </div>
        </div>

        <div className="mb-4 pb-4 border-b border-gray-700">
          <p className="text-xs text-gray-500 mb-2">Formateur</p>
          <p className="text-sm text-gray-300">{instructor}</p>
        </div>

        <div className="mb-4">
          <p className="text-xs text-gray-500 mb-2 flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            Prochaines sessions
          </p>
          <div className="space-y-2">
            {sessions.slice(0, 2).map((session, index) => (
              <div
                key={index}
                className="flex justify-between items-center text-sm bg-gray-800/50 rounded-lg p-2"
              >
                <span className="text-gray-300">{session.date}</span>
                <span className={`text-xs ${session.available > 0 ? 'text-green-400' : 'text-red-400'}`}>
                  {session.available > 0 ? `${session.available} places` : 'Complet'}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="text-3xl font-bold text-white">
              {price.toLocaleString()}
            </span>
            <span className="text-gray-400 ml-2">{currency}</span>
          </div>
        </div>

        <Button
          fullWidth
          onClick={() => onRegister(id)}
        >
          S'inscrire
        </Button>
      </div>
    </motion.div>
  );
}
