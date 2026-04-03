import Image from 'next/image';

const STATS = [
  { value: '21+', label: 'Years of Service' },
  { value: '1Lac+', label: 'Happy Customers' },
  { value: '6', label: 'Services Offered' },
  { value: '365', label: 'Days Open' },
];

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <p className="text-brand-primary font-semibold text-sm uppercase tracking-widest mb-3">
              Our Story
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-textDark mb-6">
              About Krishna Chemist & Retail Store
            </h2>
            <div className="space-y-4 text-brand-textMuted leading-relaxed">
              <p>
                Krishna Chemist & Retail Store has been a cornerstone of healthcare in Kadi for
                over a decade. Strategically located under Dr. Navin Patel Hospital on Bus
                Station Road, we serve patients, families, and healthcare professionals with
                genuine medicines and expert guidance every single day.
              </p>
              <p>
                Our pharmacy is fully licensed and certified, sourcing all medicines exclusively
                from authorized distributors. We believe every customer deserves authentic
                products, transparent pricing, and knowledgeable service — no shortcuts, ever.
              </p>
              <p>
                From prescription medicines and surgical supplies to Ayurvedic products and
                baby care, our comprehensive inventory means you rarely need to look elsewhere.
                And with home delivery and WhatsApp ordering, getting your medicines has never
                been easier.
              </p>
              <p>
                Trusted by thousands of Kadi families, we remain committed to being your
                reliable health partner — morning, noon, and night.
              </p>
            </div>
          </div>

          {/* Logo */}
          <div className="flex flex-col items-center gap-10">
            <div className="relative">
              <div className="absolute inset-0 bg-brand-primary/10 rounded-full blur-2xl scale-110" />
              <Image
                src="/shop.jpeg"
                alt="Pharmacist View"
                width={1000}
                height={1000}
                className="relative drop-shadow-xl rounded-3xl object-cover"
              />
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 w-full">
              {STATS.map((s) => (
                <div
                  key={s.label}
                  className="bg-brand-primaryBg rounded-2xl p-4 text-center border border-brand-primary/20"
                >
                  <p className="font-display text-3xl font-bold text-brand-primary">{s.value}</p>
                  <p className="text-brand-textMuted text-xs mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
