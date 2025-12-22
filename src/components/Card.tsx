import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
}

export function Card({ children, className = '', hover = true, glow = false }: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -5 } : {}}
      className={`
        bg-gradient-to-br from-gray-900 to-gray-800
        border border-gray-700/50
        rounded-2xl p-6
        ${glow ? 'shadow-lg shadow-pink-500/10' : ''}
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}
