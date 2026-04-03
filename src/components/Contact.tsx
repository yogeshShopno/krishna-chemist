import { MapPin, Phone, MessageCircle, Clock } from 'lucide-react';
import { SHOP } from '@/constants/content';

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-brand-bgAlt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-textDark text-center mb-3">
          Find Us &amp; Get in Touch
        </h2>
        <div className="mx-auto w-16 h-1 bg-brand-primary rounded-full mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Info */}
          <div className="bg-white rounded-2xl shadow-md p-8">
            <h3 className="font-display text-xl font-bold text-brand-textDark mb-6">
              Contact Information
            </h3>
            <ul className="space-y-5">
              <li className="flex gap-4 items-start">
                <MapPin className="text-brand-primary mt-0.5 shrink-0" size={20} />
                <span className="text-brand-textMuted text-sm leading-relaxed">{SHOP.address}</span>
              </li>
              <li className="flex gap-4 items-center">
                <Phone className="text-brand-primary shrink-0" size={20} />
                <a
                  href={SHOP.phoneHref}
                  className="text-brand-textMuted text-sm hover:text-brand-primary transition-colors"
                >
                  {SHOP.phone}
                </a>
              </li>
              <li className="flex gap-4 items-center">
                <MessageCircle className="text-brand-primary shrink-0" size={20} />
                <a
                  href={SHOP.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-textMuted text-sm hover:text-brand-primary transition-colors"
                >
                  WhatsApp: {SHOP.phone}
                </a>
              </li>
              <li className="flex gap-4 items-center">
                <Clock className="text-brand-primary shrink-0" size={20} />
                <span className="text-brand-textMuted text-sm">{SHOP.timings}</span>
              </li>
            </ul>

            <div className="flex flex-wrap gap-3 mt-8">
              <a
                href={SHOP.phoneHref}
                className="inline-flex items-center gap-2 bg-brand-primary hover:bg-brand-primaryLight text-white font-semibold px-5 py-2.5 rounded-full text-sm transition-colors duration-200"
              >
                <Phone size={15} /> Call Now
              </a>
              <a
                href={SHOP.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-brand-secondary text-brand-secondary hover:bg-brand-secondary hover:text-white font-semibold px-5 py-2.5 rounded-full text-sm transition-all duration-200"
              >
                <MessageCircle size={15} /> WhatsApp
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-md h-80 md:h-full min-h-[300px]">
            <iframe
              src="https://maps.google.com/maps?q=Kadi+Gujarat+384440&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              title="Krishna chemist & Retail Store "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
