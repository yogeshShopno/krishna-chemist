import { NAV_LINKS, SHOP } from '@/constants/content';
import { AlarmCheck, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Col 1: Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className=" h-12 w-12">
                <img src="/logo.jpeg" alt="krishna chemist Logo" width={100} height={100} className="rounded-full object-cover w-full h-full " />              </div>

              <span className="font-display font-bold text-lg leading-tight">
                Krishna Chemist
                <span className="block text-xs font-body font-normal text-white/70">
                  & Retail Store
                </span>
              </span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">{SHOP.tagline}</p>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-base mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-white/80 hover:text-white text-sm transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact */}
          <div>
            <h4 className="font-display font-semibold text-base mb-4">Contact Us</h4>
            <ul className="space-y-2 text-white/80 text-sm">
              <li>
                <a href={SHOP.phoneHref} className="hover:text-white transition-colors">
                  {SHOP.phone}
                </a>
              </li>
              <li className="leading-relaxed">{SHOP.address}</li>
              <li>  {SHOP.timings}</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-center text-white/60 text-xs">
          Powered by Krishna Chemist & Retail Store © 2026. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
