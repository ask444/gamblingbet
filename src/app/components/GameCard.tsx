'use client';

import { motion } from 'framer-motion';
import CountdownTimer from './CountdownTimer';
import ProgressBar from './ProgressBar';
import AchievementIcons, { IconState } from './AchievementIcons';
import type { Game } from '@/data/games';

function computeProgress(achievements: Record<string, boolean>): number {
  const entries = Object.values(achievements);
  const done = entries.filter(Boolean).length;
  return Math.round((done / entries.length) * 100);
}
type AchievementKey = keyof Game['achievements'];
function toIcons(game: Game): IconState[] {
  const map: Record<AchievementKey, string> = {
    icon_10x: '/images/icon_10x.png',
    icon_20x: '/images/icon_20x.png',
    icon_100x: '/images/icon_100x.png',
    icon_2wins: '/images/icon_2wins.png',
    icon_5wins: '/images/icon_5wins.png',
    icon_deposit: '/images/icon_deposit.png',
  };

  const labels: Record<AchievementKey, string> = {
    icon_10x: '10x Multiplier',
    icon_20x: '20x Multiplier',
    icon_100x: '100x Multiplier',
    icon_2wins: 'Win 2 Times',
    icon_5wins: 'Win 5 Times',
    icon_deposit: 'Make a Deposit',
  };

  return (Object.keys(game.achievements) as AchievementKey[]).map((k) => ({
    key: k,
    label: labels[k],
    unlocked: game.achievements[k],
    src: map[k],
  }));
}

export default function GameCard({ game, index }: { game: Game; index: number }) {
  const progress = computeProgress(game.achievements);
  const icons = toIcons(game);

  return (
    <motion.article
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: index * 0.06, duration: 0.5 }}
      className="card overflow-hidden group relative"
      style={{
        backgroundImage: game.background ? `url(${game.background})` : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-slate-900/60 group-hover:bg-slate-900/50 transition-colors"></div>

      <div className="relative p-4 sm:p-5">
        {/* Top Row: Thumbnail + Title + Countdown */}
        <div className="flex gap-4 items-center">
          <img
            src={game.thumbnail}
            alt={game.title}
            className="h-20 w-20 sm:h-24 sm:w-24 rounded-xl object-cover ring-1 ring-white/10 shadow-md"
          />

          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-lg sm:text-xl font-bold truncate">{game.title}</h3>
              <CountdownTimer deadline={game.deadline} />
            </div>
            <div className="mt-3">
              <div className="flex items-center justify-between text-xs text-slate-300 mb-1">
                <span>Overall Progress</span>
                <span className="font-semibold">{progress}%</span>
              </div>
              <ProgressBar progress={progress} />
            </div>
          </div>
        </div>

        {/* Achievements */}
        <AchievementIcons icons={icons} />

        {/* CTA Row */}
        <div className="mt-4 flex items-center justify-between">
          <button
            className="px-4 py-2 rounded-xl bg-brand-600 hover:bg-brand-700 active:bg-brand-800 transition-colors font-semibold shadow-md focus:outline-none focus-visible:shadow-glow"
            aria-label={`Play ${game.title}`}
          >
            Play
          </button>

          {progress === 100 ? (
            <span className="text-emerald-300 text-sm font-semibold">All achievements complete ✔</span>
          ) : (
            <span className="text-slate-300 text-sm">{6 - Math.round((progress/100)*6)} left</span>
          )}
        </div>
      </div>
    </motion.article>
  );
}