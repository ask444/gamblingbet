'use client';

import { motion } from 'framer-motion';

export default function ProgressBar({ progress }: { progress: number }) {
  const pct = Math.min(100, Math.max(0, progress));

  return (
    <div className="w-full h-3 rounded-full bg-slate-700 overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${pct}%` }}
        transition={{ type: 'spring', stiffness: 120, damping: 20 }}
        className="h-full bg-gradient-to-r from-brand-500 to-brand-300"
        style={{ backgroundSize: '200% 100%' }}
      />
    </div>
  );
}