'use client';

import { useEffect, useMemo, useState } from 'react';
import { formatHMS } from '@/lib/format';

function secondsUntil(deadlineISO: string): number {
  const target = new Date(deadlineISO).getTime();
  const now = Date.now();
  return Math.max(0, Math.floor((target - now) / 1000));
}

export default function CountdownTimer({ deadline }: { deadline: string }) {
  const [remaining, setRemaining] = useState<number>(() => secondsUntil(deadline));

  useEffect(() => {
    const id = setInterval(() => setRemaining(secondsUntil(deadline)), 1000);
    return () => clearInterval(id);
  }, [deadline]);

  const label = useMemo(() => formatHMS(remaining), [remaining]);

  return (
    <span className="inline-flex items-center gap-1 text-xs font-semibold text-yellow-300 bg-yellow-500/10 px-2 py-1 rounded-full border border-yellow-500/30">
      ⏳ {label}
    </span>
  );
}