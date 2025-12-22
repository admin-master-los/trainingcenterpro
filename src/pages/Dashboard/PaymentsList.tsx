import { Badge } from '../../components/Badge';
import { CreditCard, Smartphone, Building2 } from 'lucide-react';

interface Payment {
  id: number;
  student: string;
  training: string;
  amount: number;
  currency: string;
  date: string;
  method: string;
  status: string;
}

interface PaymentsListProps {
  payments: Payment[];
}

export function PaymentsList({ payments }: PaymentsListProps) {
  const getMethodIcon = (method: string) => {
    switch (method.toLowerCase()) {
      case 'mobile money':
        return <Smartphone className="w-4 h-4" />;
      case 'carte bancaire':
        return <CreditCard className="w-4 h-4" />;
      case 'virement':
        return <Building2 className="w-4 h-4" />;
      default:
        return <CreditCard className="w-4 h-4" />;
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-700">
            <th className="text-left py-3 px-4 text-sm font-semibold text-gray-400">Étudiant</th>
            <th className="text-left py-3 px-4 text-sm font-semibold text-gray-400">Formation</th>
            <th className="text-left py-3 px-4 text-sm font-semibold text-gray-400">Montant</th>
            <th className="text-left py-3 px-4 text-sm font-semibold text-gray-400">Méthode</th>
            <th className="text-left py-3 px-4 text-sm font-semibold text-gray-400">Date</th>
            <th className="text-left py-3 px-4 text-sm font-semibold text-gray-400">Statut</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((payment) => (
            <tr key={payment.id} className="border-b border-gray-800 hover:bg-gray-800/30 transition-colors">
              <td className="py-3 px-4 text-sm text-white">{payment.student}</td>
              <td className="py-3 px-4 text-sm text-gray-300">{payment.training}</td>
              <td className="py-3 px-4 text-sm font-semibold text-white">
                {payment.amount.toLocaleString()} {payment.currency}
              </td>
              <td className="py-3 px-4 text-sm">
                <div className="flex items-center gap-2 text-gray-300">
                  {getMethodIcon(payment.method)}
                  <span>{payment.method}</span>
                </div>
              </td>
              <td className="py-3 px-4 text-sm text-gray-400">{payment.date}</td>
              <td className="py-3 px-4 text-sm">
                <Badge variant={payment.status === 'completed' ? 'success' : 'warning'}>
                  {payment.status === 'completed' ? 'Complété' : 'En attente'}
                </Badge>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
