import React from 'react';
import { TRUST_POINTS } from '../utils/mockData';
import { Shield, Award, FileText, PhoneCall } from 'lucide-react';

export const TrustBadges: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Award':
        return <Award className="w-5 h-5 text-teal-400" />;
      case 'Shield':
        return <Shield className="w-5 h-5 text-rose-400" />;
      case 'FileText':
        return <FileText className="w-5 h-5 text-teal-400" />;
      case 'PhoneCall':
        return <PhoneCall className="w-5 h-5 text-rose-400" />;
      default:
        return <Shield className="w-5 h-5 text-teal-400" />;
    }
  };

  return (
    <div className="bg-zinc-900/90 border-y border-zinc-800/80 py-8 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRUST_POINTS.map((point, index) => (
            <div key={index} className="flex items-center gap-4 p-3.5 rounded-xl bg-zinc-950/60 border border-zinc-800/60">
              <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 shrink-0">
                {getIcon(point.icon)}
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">{point.title}</h4>
                <p className="text-xs text-zinc-400 mt-0.5">{point.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
