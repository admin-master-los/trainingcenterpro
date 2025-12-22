import { useState } from 'react';
import { Button } from '../../components/Button';
import { ArrowRight } from 'lucide-react';

interface RegistrationFormProps {
  training: any;
  onSubmit: (data: any) => void;
  initialData: any;
}

export function RegistrationForm({ training, onSubmit, initialData }: RegistrationFormProps) {
  const [formData, setFormData] = useState(initialData);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700/50 rounded-2xl p-6">
      <div className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Prénom *
            </label>
            <input
              type="text"
              required
              value={formData.firstName}
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-pink-500"
              placeholder="Votre prénom"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Nom *
            </label>
            <input
              type="text"
              required
              value={formData.lastName}
              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-pink-500"
              placeholder="Votre nom"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Email *
          </label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-pink-500"
            placeholder="votre@email.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Téléphone *
          </label>
          <input
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-pink-500"
            placeholder="+225 XX XX XX XX XX"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Choisir une session *
          </label>
          <select
            required
            value={formData.session}
            onChange={(e) => setFormData({ ...formData, session: e.target.value })}
            className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-pink-500"
          >
            <option value="">Sélectionnez une session</option>
            {training.sessions.map((session: any, index: number) => (
              <option
                key={index}
                value={session.date}
                disabled={session.available === 0}
              >
                {session.date} - {session.available > 0 ? `${session.available} places disponibles` : 'Complet'}
              </option>
            ))}
          </select>
        </div>

        <Button
          type="submit"
          fullWidth
          size="lg"
          icon={ArrowRight}
        >
          Continuer vers le paiement
        </Button>
      </div>
    </form>
  );
}
