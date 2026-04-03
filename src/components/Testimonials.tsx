import { Star } from 'lucide-react';
import { TESTIMONIALS } from '@/constants/content';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-10 md:py-12 bg-brand-bgAlt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-textDark text-center mb-3">
          What Our Customers Say
        </h2>
        <div className="mx-auto w-16 h-1 bg-brand-primary rounded-full mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <article
              key={t.name}
              className="bg-white rounded-2xl shadow p-6 border-l-4 border-brand-primary"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} className="text-brand-primary fill-brand-primary" />
                ))}
              </div>
              <p className="text-brand-textMuted text-sm leading-relaxed mb-4">"{t.text}"</p>
              <div>
                <p className="font-semibold text-brand-textDark text-sm">{t.name}</p>
                <p className="text-brand-textMuted text-xs">{t.area}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
