function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="text-white font-semibold tracking-tight">LEXORA</a>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-slate-300">
          <a href="#areas" className="hover:text-white">Practice Areas</a>
          <a href="#team" className="hover:text-white">Attorneys</a>
          <a href="#consult" className="hover:text-white">Consultation</a>
        </nav>
        <a href="#consult" className="px-4 py-2 rounded-xl bg-white text-slate-900 text-sm font-medium shadow">Book</a>
      </div>
    </header>
  );
}

export default Navbar;
