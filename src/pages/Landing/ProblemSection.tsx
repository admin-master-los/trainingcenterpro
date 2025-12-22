import { motion } from 'framer-motion';
import { AlertCircle } from 'lucide-react';
import { Card } from '../../components/Card';
import { platformContent } from '../../data/platformContent';

export function ProblemSection() {
  const { problem } = platformContent;

  return (
    <section className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            {problem.title}
            <br />
            <span className="text-gray-500">{problem.subtitle}</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problem.issues.map((issue, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card hover={false} className="border-red-900/30">
                <AlertCircle className="w-8 h-8 text-red-400 mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">
                  {issue.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {issue.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
