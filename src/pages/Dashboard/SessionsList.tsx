import { Calendar, Users, CheckCircle, AlertCircle } from 'lucide-react';
import { Badge } from '../../components/Badge';

interface Session {
  id: number;
  training: string;
  date: string;
  time: string;
  participants: number;
  capacity: number;
  status: string;
}

interface SessionsListProps {
  sessions: Session[];
}

export function SessionsList({ sessions }: SessionsListProps) {
  return (
    <div className="space-y-4">
      {sessions.map((session) => {
        const fillRate = (session.participants / session.capacity) * 100;
        const isConfirmed = session.status === 'confirmed';

        return (
          <div
            key={session.id}
            className="bg-gray-800/50 rounded-xl p-4 border border-gray-700/50 hover:border-gray-600 transition-colors"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <h3 className="font-semibold text-white mb-1">{session.training}</h3>
                <div className="flex items-center gap-3 text-sm text-gray-400">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{session.date}</span>
                  </div>
                  <span>{session.time}</span>
                </div>
              </div>
              <Badge variant={isConfirmed ? 'success' : 'warning'}>
                {isConfirmed ? <CheckCircle className="w-3 h-3 mr-1 inline" /> : <AlertCircle className="w-3 h-3 mr-1 inline" />}
                {isConfirmed ? 'Confirmé' : 'Places disponibles'}
              </Badge>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm">
                <Users className="w-4 h-4 text-gray-400" />
                <span className="text-white font-medium">
                  {session.participants}/{session.capacity}
                </span>
                <span className="text-gray-400">participants</span>
              </div>
              <div className="text-sm text-gray-400">
                {fillRate.toFixed(0)}% rempli
              </div>
            </div>

            <div className="mt-3 w-full bg-gray-700 rounded-full h-2 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-pink-500 to-purple-600 rounded-full transition-all"
                style={{ width: `${fillRate}%` }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
