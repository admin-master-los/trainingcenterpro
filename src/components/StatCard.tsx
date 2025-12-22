import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

interface StatCardProps {
  label: string;
  value: string;
  unit?: string;
  change?: string;
  trend?: 'up' | 'down' | 'neutral';
}

export function StatCard({ label, value, unit, change, trend = 'neutral' }: StatCardProps) {
  const trendIcons = {
    up: TrendingUp,
    down: TrendingDown,
    neutral: Minus
  };

  const trendColors = {
    up: 'text-green-400',
    down: 'text-red-400',
    neutral: 'text-gray-400'
  };

  const TrendIcon = trendIcons[trend];

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700/50"
    >
      <p className="text-gray-400 text-sm mb-2">{label}</p>
      <div className="flex items-end justify-between">
        <div>
          <h3 className="text-3xl font-bold text-white">
            {value}
            {unit && <span className="text-xl text-gray-400 ml-1">{unit}</span>}
          </h3>
        </div>
        {change && (
          <div className={`flex items-center gap-1 text-sm ${trendColors[trend]}`}>
            <TrendIcon className="w-4 h-4" />
            <span>{change}</span>
          </div>
        )}
      </div>
    </motion.div>
  );
}
