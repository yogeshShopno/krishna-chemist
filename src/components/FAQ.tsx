'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQS } from '@/constants/content';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-10 md:py-12 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-textDark text-center mb-3">
          Frequently Asked Questions
        </h2>
        <div className="mx-auto w-16 h-1 bg-brand-primary rounded-full mb-12" />

        <div className="space-y-3">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`rounded-xl border transition-all duration-200 ${
                  isOpen
                    ? 'border-brand-primary shadow-sm'
                    : 'border-gray-200 hover:border-brand-primaryLight'
                }`}
              >
                <button
                  className="w-full flex items-center justify-between px-5 py-4 text-left"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                >
                  <span className="font-semibold text-brand-textDark text-sm pr-4">{faq.q}</span>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-brand-primary transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-4 text-brand-textMuted text-sm leading-relaxed border-t border-brand-primaryBg pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
