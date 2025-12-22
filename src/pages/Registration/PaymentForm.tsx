import { useState } from 'react';
import { motion } from 'framer-motion';
import { Smartphone, CreditCard, Building2, CheckCircle } from 'lucide-react';
import { Button } from '../../components/Button';
import { platformContent } from '../../data/platformContent';

interface PaymentFormProps {
  training: any;
  onSubmit: (data: any) => void;
}

export function PaymentForm({ training, onSubmit }: PaymentFormProps) {
  const [selectedMethod, setSelectedMethod] = useState<string>('');
  const [paymentData, setPaymentData] = useState({
    mobileNumber: '',
    cardNumber: '',
    cardExpiry: '',
    cardCVV: '',
    cardName: ''
  });

  const { paymentMethods } = platformContent;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => {
      onSubmit({ method: selectedMethod, ...paymentData });
    }, 1500);
  };

  const getIcon = (iconName: string) => {
    const icons = {
      Smartphone,
      CreditCard,
      Building2
    };
    return icons[iconName as keyof typeof icons] || CreditCard;
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700/50 rounded-2xl p-6">
        <h3 className="text-lg font-bold text-white mb-4">Choisir un mode de paiement</h3>

        <div className="space-y-3">
          {paymentMethods.map((method) => {
            const Icon = getIcon(method.icon);

            return (
              <motion.button
                key={method.id}
                type="button"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedMethod(method.id)}
                className={`
                  w-full p-4 rounded-xl border-2 transition-all text-left
                  ${selectedMethod === method.id
                    ? 'border-pink-500 bg-pink-500/10'
                    : 'border-gray-700 bg-gray-800/50 hover:border-gray-600'
                  }
                `}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`
                      w-10 h-10 rounded-lg flex items-center justify-center
                      ${selectedMethod === method.id ? 'bg-pink-500' : 'bg-gray-700'}
                    `}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">{method.name}</div>
                      {method.providers.length > 0 && (
                        <div className="text-xs text-gray-400">
                          {method.providers.join(', ')}
                        </div>
                      )}
                    </div>
                  </div>
                  {selectedMethod === method.id && (
                    <CheckCircle className="w-5 h-5 text-pink-500" />
                  )}
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>

      {selectedMethod === 'mobile-money' && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700/50 rounded-2xl p-6"
        >
          <h3 className="text-lg font-bold text-white mb-4">Informations Mobile Money</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Numéro de téléphone *
              </label>
              <input
                type="tel"
                required
                value={paymentData.mobileNumber}
                onChange={(e) => setPaymentData({ ...paymentData, mobileNumber: e.target.value })}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-pink-500"
                placeholder="+225 XX XX XX XX XX"
              />
            </div>
            <p className="text-sm text-gray-400">
              Un code de validation vous sera envoyé pour confirmer le paiement
            </p>
          </div>
        </motion.div>
      )}

      {selectedMethod === 'card' && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700/50 rounded-2xl p-6"
        >
          <h3 className="text-lg font-bold text-white mb-4">Informations carte bancaire</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Nom sur la carte *
              </label>
              <input
                type="text"
                required
                value={paymentData.cardName}
                onChange={(e) => setPaymentData({ ...paymentData, cardName: e.target.value })}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-pink-500"
                placeholder="NOM PRENOM"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Numéro de carte *
              </label>
              <input
                type="text"
                required
                value={paymentData.cardNumber}
                onChange={(e) => setPaymentData({ ...paymentData, cardNumber: e.target.value })}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-pink-500"
                placeholder="1234 5678 9012 3456"
                maxLength={19}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Expiration *
                </label>
                <input
                  type="text"
                  required
                  value={paymentData.cardExpiry}
                  onChange={(e) => setPaymentData({ ...paymentData, cardExpiry: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-pink-500"
                  placeholder="MM/AA"
                  maxLength={5}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  CVV *
                </label>
                <input
                  type="text"
                  required
                  value={paymentData.cardCVV}
                  onChange={(e) => setPaymentData({ ...paymentData, cardCVV: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-pink-500"
                  placeholder="123"
                  maxLength={3}
                />
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {selectedMethod === 'transfer' && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700/50 rounded-2xl p-6"
        >
          <h3 className="text-lg font-bold text-white mb-4">Informations de virement</h3>
          <div className="space-y-3 text-sm">
            <div>
              <span className="text-gray-400">Banque:</span>
              <span className="text-white ml-2">BACI - Banque Atlantique</span>
            </div>
            <div>
              <span className="text-gray-400">IBAN:</span>
              <span className="text-white ml-2">CI93 0000 1234 5678 9012 3456 78</span>
            </div>
            <div>
              <span className="text-gray-400">BIC:</span>
              <span className="text-white ml-2">ATCICIAB</span>
            </div>
            <div className="pt-3 border-t border-gray-700">
              <p className="text-gray-400">
                Merci d'effectuer le virement puis de nous envoyer la preuve de paiement par email à contact@trainingcenterpro.com
              </p>
            </div>
          </div>
        </motion.div>
      )}

      {selectedMethod && (
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700/50 rounded-2xl p-6">
          <div className="flex justify-between items-center mb-4">
            <span className="text-gray-400">Montant à payer</span>
            <span className="text-2xl font-bold text-white">
              {training.price.toLocaleString()} {training.currency}
            </span>
          </div>
          <Button
            type="submit"
            fullWidth
            size="lg"
          >
            Confirmer le paiement
          </Button>
        </div>
      )}
    </form>
  );
}
