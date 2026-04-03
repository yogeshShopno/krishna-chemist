import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Pharma 24/7 – Krishna Chemist | Kadi Gujarat',
  description:
    'Trusted chemist shop in Kadi, Gujarat. Prescription medicines, home delivery, Ayurvedic products. Open 7 AM to 11:30 PM every day.',
  keywords: [
    'chemist kadi',
    'pharmacy kadi gujarat',
    'medicine home delivery kadi',
    'krishna chemist',
    'pharma 24/7',
  ],
  icons: {
    icon: '/logo.jpeg',
  },
  openGraph: {
    title: 'Pharma 24/7 – Krishna Chemist',
    description: 'Your trusted health partner in Kadi, Gujarat.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-brand-textDark antialiased">{children}</body>
    </html>
  );
}
