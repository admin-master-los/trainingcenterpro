import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { Button } from '../../components/Button';
import { RegistrationForm } from './RegistrationForm';
import { PaymentForm } from './PaymentForm';
import { platformContent } from '../../data/platformContent';

interface RegistrationPageProps {
  training: any;
  onNavigate: (page: string) => void;
}

export function RegistrationPage({ training, onNavigate }: RegistrationPageProps) {
  const [step, setStep] = useState<'info' | 'payment' | 'success'>('info');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    session: ''
  });

  if (!training) {
    return (
      <div className="min-h-screen bg-black pt-24 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-400 mb-4">Formation non trouvée</p>
          <Button onClick={() => onNavigate('catalog')}>
            Retour au catalogue
          </Button>
        </div>
      </div>
    );
  }

  const handleInfoSubmit = (data: any) => {
    setFormData(data);
    setStep('payment');
  };

  const handlePaymentSubmit = (paymentData: any) => {
    setStep('success');
  };

  return (
    <div className="min-h-screen bg-black pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => step === 'info' ? onNavigate('catalog') : setStep('info')}
          className="flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Retour
        </button>

        <div className="mb-8">
          <div className="flex items-center gap-4 mb-6">
            {['info', 'payment', 'success'].map((s, index) => (
              <div key={s} className="flex items-center gap-2">
                <div className={`
                  w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold
                  ${step === s || (s === 'info' && step !== 'info') || (s === 'payment' && step === 'success')
                    ? 'bg-pink-500 text-white'
                    : 'bg-gray-800 text-gray-400'
                  }
                `}>
                  {index + 1}
                </div>
                {index < 2 && (
                  <div className={`w-12 h-1 ${
                    (s === 'info' && step !== 'info') || (s === 'payment' && step === 'success')
                      ? 'bg-pink-500'
                      : 'bg-gray-800'
                  }`} />
                )}
              </div>
            ))}
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
            {step === 'info' && 'Informations personnelles'}
            {step === 'payment' && 'Paiement'}
            {step === 'success' && 'Inscription confirmée'}
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              {step === 'info' && (
                <motion.div
                  key="info"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                >
                  <RegistrationForm
                    training={training}
                    onSubmit={handleInfoSubmit}
                    initialData={formData}
                  />
                </motion.div>
              )}

              {step === 'payment' && (
                <motion.div
                  key="payment"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                >
                  <PaymentForm
                    training={training}
                    onSubmit={handlePaymentSubmit}
                  />
                </motion.div>
              )}

              {step === 'success' && (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700/50 rounded-2xl p-8 text-center"
                >
                  <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-12 h-12 text-green-400" />
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-4">
                    Inscription réussie !
                  </h2>
                  <p className="text-gray-400 mb-8">
                    Vous allez recevoir un email de confirmation avec tous les détails de votre formation.
                  </p>
                  <div className="space-y-3">
                    <Button fullWidth onClick={() => onNavigate('catalog')}>
                      Retour au catalogue
                    </Button>
                    <Button fullWidth variant="secondary" onClick={() => onNavigate('home')}>
                      Retour à l'accueil
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700/50 rounded-2xl p-6 sticky top-24">
              <h3 className="text-lg font-bold text-white mb-4">Récapitulatif</h3>

              <div className="aspect-video rounded-lg overflow-hidden mb-4">
                <img
                  src={training.image}
                  alt={training.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <h4 className="font-semibold text-white mb-2">{training.title}</h4>
              <p className="text-sm text-gray-400 mb-4">{training.instructor}</p>

              <div className="space-y-2 mb-4 pb-4 border-b border-gray-700">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Durée</span>
                  <span className="text-white">{training.duration}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Niveau</span>
                  <span className="text-white">{training.level}</span>
                </div>
                {formData.session && (
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Session</span>
                    <span className="text-white">{formData.session}</span>
                  </div>
                )}
              </div>

              <div className="flex justify-between items-center">
                <span className="text-gray-400">Total</span>
                <span className="text-2xl font-bold text-white">
                  {training.price.toLocaleString()} {training.currency}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
