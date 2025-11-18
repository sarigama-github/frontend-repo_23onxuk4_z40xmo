function PracticeAreas() {
  const areas = [
    { title: 'Corporate', desc: 'Entity formation, contracts, M&A, governance.' },
    { title: 'Litigation', desc: 'Dispute resolution, arbitration, mediation.' },
    { title: 'Intellectual Property', desc: 'Trademarks, copyrights, licensing.' },
    { title: 'Employment', desc: 'Policies, compliance, investigations.' },
    { title: 'Real Estate', desc: 'Transactions, leasing, development.' },
    { title: 'Privacy & Data', desc: 'Policies, compliance, incident response.' },
  ];

  return (
    <section id="areas" className="relative bg-slate-950 py-20">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.08),transparent_40%)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-semibold text-white">Practice Areas</h2>
        <p className="mt-3 text-slate-300 max-w-2xl">Strategic, business‑first counsel across key disciplines.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((a) => (
            <div key={a.title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition">
              <div className="text-white font-medium text-lg">{a.title}</div>
              <p className="mt-2 text-sm text-slate-300">{a.desc}</p>
              <div className="mt-4 text-xs text-slate-400">Learn more →</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PracticeAreas;
