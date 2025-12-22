import { Award, Download } from 'lucide-react';
import { Button } from '../../components/Button';

interface Certificate {
  id: number;
  student: string;
  training: string;
  issueDate: string;
  status: string;
}

interface CertificatesListProps {
  certificates: Certificate[];
}

export function CertificatesList({ certificates }: CertificatesListProps) {
  return (
    <div className="space-y-3">
      {certificates.map((cert) => (
        <div
          key={cert.id}
          className="bg-gray-800/50 rounded-xl p-4 border border-gray-700/50 hover:border-gray-600 transition-colors"
        >
          <div className="flex items-start justify-between">
            <div className="flex gap-3 flex-1">
              <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Award className="w-5 h-5 text-green-400" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-white mb-1">{cert.student}</h4>
                <p className="text-sm text-gray-400 mb-1">{cert.training}</p>
                <p className="text-xs text-gray-500">Émis le {cert.issueDate}</p>
              </div>
            </div>
            <button className="text-gray-400 hover:text-white transition-colors p-2">
              <Download className="w-5 h-5" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
