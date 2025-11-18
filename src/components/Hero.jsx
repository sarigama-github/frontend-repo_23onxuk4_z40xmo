import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-slate-950">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.08),transparent_40%),radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.08),transparent_35%),radial-gradient(circle_at_70%_80%,rgba(251,146,60,0.08),transparent_35%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-white/80 ring-1 ring-white/10">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            AI Voice Agent — live demo
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white">
            Boutique Law, Elevated by AI
          </h1>
          <p className="mt-5 text-lg text-slate-300 leading-relaxed">
            Meet Lexora, your voice-enabled legal concierge. Ask about our practice areas, meet the team, or book a consultation — all hands‑free.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#consult" className="px-5 py-3 rounded-xl bg-white text-slate-900 font-medium shadow-lg shadow-black/20 hover:shadow-black/30 transition">Book a consultation</a>
            <a href="#areas" className="px-5 py-3 rounded-xl bg-white/10 text-white font-medium ring-1 ring-white/15 hover:bg-white/15 transition">Explore practice areas</a>
          </div>
          <p className="mt-6 text-sm text-slate-400">No obligation. Private and secure.</p>
        </div>
        <div className="relative h-[500px] w-full rounded-3xl border border-white/10 bg-slate-900/40 overflow-hidden">
          <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-slate-950/10" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
