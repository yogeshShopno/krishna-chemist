import {
  ClipboardList,
  ShoppingBag,
  Truck,
  Baby,
  Stethoscope,
  Leaf,
  type LucideIcon,
} from 'lucide-react';
import { SERVICES } from '@/constants/content';

const iconMap: Record<string, LucideIcon> = {
  ClipboardList,
  ShoppingBag,
  Truck,
  Baby,
  Stethoscope,
  Leaf,
};

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-textDark text-center mb-3">
          What We Offer
        </h2>
        <div className="mx-auto w-16 h-1 bg-brand-primary rounded-full mb-12" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s) => {
            const Icon = iconMap[s.icon];
            return (
              <article
                key={s.id}
                className="bg-white rounded-2xl shadow-md border-t-4 border-brand-primary p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-200"
              >
                <div className="mb-4">
                  <Icon size={36} className="text-brand-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-brand-textDark mb-2">
                  {s.title}
                </h3>
                <p className="text-brand-textMuted text-sm leading-relaxed">{s.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
