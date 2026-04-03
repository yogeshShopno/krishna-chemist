import Image from 'next/image';
import { Phone, MessageCircle } from 'lucide-react';
import { SHOP } from '@/constants/content';

const BADGES = [
  '✔ Licensed Pharmacy',
  '✔ 21+ Years',
  '✔ Home Delivery',
  '✔ Open Late',
];

export default function Hero() {
  return (
    <section
      id="home"
      className="bg-brand-primaryBg  flex items-center py-10 md:py-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="fade-in-up">
            <p className="text-brand-primary font-semibold text-sm uppercase tracking-widest mb-3">
              Kadi&apos;s Most Trusted Pharmacy
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-brand-textDark leading-tight mb-5">
              Your Trusted Chemist in Kadi —{' '}
              <span className="text-brand-primary">Open 7 AM to 11:30 PM</span>
            </h1>
            <p className="text-brand-textMuted text-lg leading-relaxed mb-8">
              Serving Kadi families for over a decade with genuine medicines, expert advice
              &amp; fast home delivery. Located under Dr. Navin Patel Hospital.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href={SHOP.phoneHref}
                className="inline-flex items-center gap-2 bg-brand-primary hover:bg-brand-primaryLight text-white font-semibold px-6 py-3 rounded-full shadow-lg transition-all duration-200"
              >
                <Phone size={18} /> Call Us Now
              </a>
              <a
                href={SHOP.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-brand-secondary text-brand-secondary hover:bg-brand-secondary hover:text-white font-semibold px-6 py-3 rounded-full transition-all duration-200"
              >
                <MessageCircle size={18} /> WhatsApp Us
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-3">
              {BADGES.map((b) => (
                <span
                  key={b}
                  className="bg-white border border-brand-primary text-brand-secondary text-xs font-semibold px-4 py-1.5 rounded-full shadow-sm"
                >
                  {b}
                </span>
              ))}
            </div>
          </div>

          {/* Logo */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-brand-primary/10 rounded-full blur-3xl scale-110" />
              <Image
                src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&q=80&w=800"
                alt="Pharmacy Inside View"
                width={1000}
                height={1000}
                priority
                className="relative drop-shadow-2xl rounded-3xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
