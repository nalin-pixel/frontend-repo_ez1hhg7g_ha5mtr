import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden">
      {/* Background gradient glow */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-violet-600/30 via-fuchsia-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Copy */}
          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white/80 backdrop-blur-md">
              Personal Branding Agency
            </div>
            <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white">
              Make your brand
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-300 via-violet-200 to-indigo-200">impossible to ignore</span>
            </h1>
            <p className="mt-5 text-white/80 text-base sm:text-lg leading-relaxed max-w-xl">
              Shyne Studio helps founders and creators craft magnetic identities that convert — from visual systems to launch-ready content, all wrapped in a smooth, glass-morphic aesthetic.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="inline-flex justify-center rounded-full px-6 py-3 bg-gradient-to-r from-fuchsia-500 to-violet-600 text-white font-medium shadow-lg shadow-fuchsia-800/20 hover:opacity-90 transition">
                Start a project
              </a>
              <a href="#work" className="inline-flex justify-center rounded-full px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium transition">
                See our work
              </a>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-6 max-w-md">
              {[
                { label: 'Brands elevated', value: '50+' },
                { label: 'Avg. uplift', value: '3.2x' },
                { label: 'Client NPS', value: '92' },
              ].map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/15 bg-white/5 p-4 text-center backdrop-blur-xl">
                  <div className="text-xl font-semibold text-white">{stat.value}</div>
                  <div className="text-xs text-white/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* 3D Scene */}
          <div className="relative h-[420px] sm:h-[520px] md:h-[620px] lg:h-[680px] rounded-3xl border border-white/10 bg-white/5 overflow-hidden backdrop-blur-xl">
            <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            {/* Soft vignette overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-violet-900/30 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
