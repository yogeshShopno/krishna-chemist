import { ShieldCheck, Truck, UserCheck, Clock, type LucideIcon } from 'lucide-react';
import { WHY_ITEMS } from '@/constants/content';

const iconMap: Record<string, LucideIcon> = { ShieldCheck, Truck, UserCheck, Clock };

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-10 md:py-12 bg-brand-bgAlt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-textDark text-center mb-3">
          Why Choose Us
        </h2>
        <div className="mx-auto w-16 h-1 bg-brand-primary rounded-full mb-12" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {WHY_ITEMS.map((item) => {
            const Icon = iconMap[item.icon];
            return (
              <div key={item.title} className="flex gap-5 bg-white rounded-2xl p-6 shadow-sm">
                <div className="shrink-0 w-12 h-12 bg-brand-primaryBg rounded-xl flex items-center justify-center">
                  <Icon size={24} className="text-brand-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-brand-textDark text-lg mb-1">
                    {item.title}
                  </h3>
                  <p className="text-brand-textMuted text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
