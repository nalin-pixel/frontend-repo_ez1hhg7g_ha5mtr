const projects = [
  {
    title: 'Founder OS',
    tag: 'Identity + Web',
    gradient: 'from-fuchsia-500 via-violet-500 to-indigo-500',
  },
  {
    title: 'Creator Plus',
    tag: 'Social Kit',
    gradient: 'from-indigo-500 via-purple-500 to-fuchsia-500',
  },
  {
    title: 'Fintech Flow',
    tag: 'Launch Strategy',
    gradient: 'from-violet-500 via-fuchsia-500 to-pink-500',
  },
  {
    title: 'Shyne Method',
    tag: 'Case Study',
    gradient: 'from-fuchsia-400 via-purple-500 to-indigo-600',
  },
];

export default function Portfolio() {
  return (
    <section id="work" className="relative py-20 md:py-28">
      <div className="absolute inset-x-0 -top-24 h-48 bg-gradient-to-b from-fuchsia-600/20 to-transparent blur-2xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">Selected work</h2>
            <p className="mt-3 text-white/70 max-w-xl">A glimpse into identities and launches we’ve crafted. Each project balances clarity, distinctiveness, and performance.</p>
          </div>
          <a href="#contact" className="inline-flex h-10 items-center rounded-full px-5 bg-white/10 hover:bg-white/20 border border-white/20 text-white text-sm transition">Work with us</a>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <div key={p.title} className="group relative overflow-hidden rounded-3xl border border-white/15 bg-white/5 backdrop-blur-xl">
              <div className={`h-56 sm:h-64 bg-gradient-to-br ${p.gradient} opacity-80`} />
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              <div className="p-6">
                <div className="text-white/60 text-xs uppercase tracking-wider">{p.tag}</div>
                <h3 className="text-xl font-semibold text-white">{p.title}</h3>
                <div className="mt-4 flex items-center gap-3">
                  {['Identity', 'Strategy', 'Design'].map((t) => (
                    <span key={t} className="text-xs text-white/70 border border-white/15 bg-white/5 rounded-full px-3 py-1">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
