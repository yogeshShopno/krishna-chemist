import Navbar         from '@/components/Navbar';
import AnnouncementBar from '@/components/AnnouncementBar';
import Hero            from '@/components/Hero';
import Services        from '@/components/Services';
import WhyChooseUs     from '@/components/WhyChooseUs';
import About           from '@/components/About';
import Testimonials    from '@/components/Testimonials';
import FAQ             from '@/components/FAQ';
import Contact         from '@/components/Contact';
import Footer          from '@/components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <AnnouncementBar />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <About />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
