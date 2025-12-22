import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter } from 'lucide-react';
import { TrainingCard } from './TrainingCard';
import { platformContent } from '../../data/platformContent';
import { Badge } from '../../components/Badge';

interface CatalogPageProps {
  onNavigate: (page: string, data?: any) => void;
}

export function CatalogPage({ onNavigate }: CatalogPageProps) {
  const { trainings } = platformContent;
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const categories = Array.from(new Set(trainings.map(t => t.category)));

  const filteredTrainings = trainings.filter(training => {
    const matchesCategory = !selectedCategory || training.category === selectedCategory;
    const matchesSearch = !searchQuery ||
      training.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      training.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleRegister = (trainingId: number) => {
    const training = trainings.find(t => t.id === trainingId);
    onNavigate('registration', { training });
  };

  return (
    <div className="min-h-screen bg-black pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Catalogue de
            <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent"> formations</span>
          </h1>
          <p className="text-xl text-gray-400">
            Choisissez parmi {trainings.length} formations professionnelles
          </p>
        </motion.div>

        <div className="mb-8 space-y-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Rechercher une formation..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-gray-900 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-pink-500"
            />
          </div>

          <div className="flex items-center gap-3 flex-wrap">
            <Filter className="w-5 h-5 text-gray-400" />
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-lg transition-colors ${
                selectedCategory === null
                  ? 'bg-pink-500 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              Tous
            </button>
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  selectedCategory === category
                    ? 'bg-pink-500 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {filteredTrainings.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-400 text-lg">Aucune formation trouvée</p>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredTrainings.map((training, index) => (
              <motion.div
                key={training.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <TrainingCard {...training} onRegister={handleRegister} />
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}
