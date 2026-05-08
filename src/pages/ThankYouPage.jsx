import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { CheckCircle2, Home } from 'lucide-react';
import { useEffect, useState } from 'react';
import InformationCard from '../components/InformationCard.jsx';

const ThankYouPage = () => {
  const [lastData, setLastData] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem('lastContactData');
    if (saved) {
      setLastData(JSON.parse(saved));
    }
  }, []);
  console.log(lastData);
  return (
    <section className="bg-primary container flex min-h-screen items-center justify-center p-4 py-25 md:py-4">
      <div className={`grid gap-4 md:grid-cols-2`}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-surface relative w-full max-w-md overflow-hidden rounded-[2rem] border border-white/5 p-12 text-center shadow-2xl"
        >
          {/* Background glow */}
          <div className="bg-accent/20 absolute top-0 left-1/2 -z-10 h-32 w-32 -translate-x-1/2 blur-3xl" />

          <div className="bg-accent/10 text-accent mb-8 inline-flex h-20 w-20 items-center justify-center rounded-2xl">
            <CheckCircle2 className="h-10 w-10" />
          </div>

          <h1 className="hero-gradient-text mb-4 text-3xl font-extrabold">
            Thank You!
          </h1>
          <p className="mb-10 text-sm leading-relaxed text-slate-400">
            Your message has been sent successfully. Our team will review your
            request and get back to you within 24 hours.
          </p>

          <div className="flex flex-col gap-4">
            <Link
              to="/"
              className="bg-accent text-primary shadow-accent/10 inline-flex items-center justify-center gap-2 rounded-xl py-4 text-xs font-bold tracking-widest uppercase shadow-lg transition-all hover:bg-cyan-300"
            >
              <Home className="h-4 w-4" />
              Back to Home
            </Link>
            <div className="border-surface border border-t pt-4">
              <p className="text-xs text-slate-600">
                MarketBoost Digital Solutions
              </p>
            </div>
          </div>
        </motion.div>
        <InformationCard lastData={lastData} />
      </div>
    </section>
  );
};
export default ThankYouPage;
