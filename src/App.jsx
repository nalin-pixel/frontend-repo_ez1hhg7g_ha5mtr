import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <div className="min-h-screen bg-[#0b0714] text-white">
      {/* Subtle background gradient + noise */}
      <div className="fixed inset-0 -z-0 bg-gradient-to-b from-[#140a2a] via-[#0b0714] to-[#0b0714]" />

      <Navbar />
      <Hero />
      <Services />
      <Portfolio />

      {/* Contact / CTA */}
      <section id="contact" className="relative py-20 md:py-28">
        <div className="absolute inset-x-0 -top-24 h-48 bg-gradient-to-b from-indigo-600/20 to-transparent blur-2xl pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/5 p-8 sm:p-12 backdrop-blur-xl">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-fuchsia-500/10 via-violet-600/10 to-indigo-500/10" />
            <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-2">
                <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">Let’s build a brand that shines</h3>
                <p className="mt-3 text-white/80 max-w-2xl">Tell us about your goals and timeline — we’ll come back with a clear plan, timeline, and fixed project pricing.</p>
              </div>
              <div className="flex lg:justify-end">
                <a href="mailto:hello@shynestudio.co" className="inline-flex items-center rounded-full px-6 py-3 bg-gradient-to-r from-fuchsia-500 to-violet-600 text-white font-medium shadow-lg shadow-fuchsia-800/20 hover:opacity-90 transition">
                  hello@shynestudio.co
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-sm">© {new Date().getFullYear()} Shyne Studio. All rights reserved.</p>
          <div className="text-white/60 text-sm">Made with intention, clarity, and a little shimmer.</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
