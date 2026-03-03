import React from 'react';
import { STATUS_CONFIG, type DocumentData } from '../../types/document';

interface StatusBadgeProps {
  status: DocumentData['status'];
  size?: 'sm' | 'md';
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status, size = 'md' }) => {
  const config = STATUS_CONFIG[status];
  return (
    <span
      className={`
        inline-flex items-center gap-1.5 font-semibold rounded-full
        ${config.bg} ${config.text}
        ${size === 'sm' ? 'px-2.5 py-0.5 text-[11px]' : 'px-3 py-1 text-[12px]'}
      `}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${config.dot}`} />
      {config.label}
    </span>
  );
};

export default StatusBadge;
