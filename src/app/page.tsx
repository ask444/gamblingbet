import PageHeader from '@/components/PageHeader';
import GameCard from '@/components/GameCard';
import { games } from '@/data/games';

export default function Page() {
  return (
    <main className="min-h-screen">
      <PageHeader />

      <section className="mx-auto max-w-7xl px-4 py-6 sm:py-10">
        <div className="mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Your Games</h2>
          <p className="text-slate-400 mt-1">Finish achievements before time runs out to unlock rewards.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {games.map((g, i) => (
            <GameCard key={g.id} game={g} index={i} />)
          )}
        </div>
      </section>

      <footer className="border-t border-slate-800">
        <div className="mx-auto max-w-7xl px-4 py-6 text-sm text-slate-400 flex items-center justify-between">
          <span>© {new Date().getFullYear()} Casino Brand</span>
          <span className="inline-flex items-center gap-2">
            <img src="/images/jpc_logo.png" alt="Brand" className="h-5 w-auto" />
            Powered by Next.js + Tailwind
          </span>
        </div>
      </footer>
    </main>
  );
}