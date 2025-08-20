export default function PageHeader() {
  return (
    <header className="sticky top-0 z-10 backdrop-blur supports-[backdrop-filter]:bg-slate-900/70 border-b border-slate-800">
      <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/images/jpc_logo.png" alt="Brand" className="h-9 w-auto" />
          <div>
            <h1 className="text-xl font-bold leading-none">Achievements</h1>
            <p className="text-xs text-slate-400">Complete challenges before time runs out</p>
          </div>
        </div>
        <div className="text-sm text-slate-300">
          <span className="hidden sm:inline">Today:</span> {new Date().toLocaleDateString()}
        </div>
      </div>
    </header>
  );
}