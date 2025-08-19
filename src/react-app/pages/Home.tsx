import Header from '@/react-app/components/Header';
import Hero from '@/react-app/components/Hero';
import Features from '@/react-app/components/Features';
import CallToAction from '@/react-app/components/CallToAction';
import Footer from '@/react-app/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
