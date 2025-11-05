import { Rocket, Palette, Megaphone, Sparkles } from 'lucide-react';

const items = [
  {
    icon: Sparkles,
    title: 'Brand Identity Systems',
    desc: 'Logos, palettes, type, and a complete visual language designed to shine across every touchpoint.',
  },
  {
    icon: Palette,
    title: 'Personal Website & Portfolio',
    desc: 'Conversion-focused, responsive sites that tell your story with clarity and credibility.',
  },
  {
    icon: Megaphone,
    title: 'Content & Social Kits',
    desc: 'On-brand templates and assets for high-velocity content creation across platforms.',
  },
  {
    icon: Rocket,
    title: 'Launch Strategy',
    desc: 'Positioning, messaging, and rollout plans that turn attention into action.',
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-20 md:py-28">
      <div className="absolute inset-x-0 -top-24 h-48 bg-gradient-to-b from-indigo-600/20 to-transparent blur-2xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">Services crafted to amplify you</h2>
          <p className="mt-3 text-white/70">From strategy to polish — we build identities that feel inevitable and perform in the wild.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group relative rounded-3xl border border-white/15 bg-white/5 p-6 backdrop-blur-xl hover:bg-white/10 transition overflow-hidden">
              <div className="absolute -inset-px opacity-0 group-hover:opacity-100 bg-gradient-to-b from-fuchsia-500/20 to-violet-600/10 transition pointer-events-none" />
              <div className="relative">
                <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-fuchsia-500 to-violet-600 text-white flex items-center justify-center shadow-lg shadow-fuchsia-800/20">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm text-white/70 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
