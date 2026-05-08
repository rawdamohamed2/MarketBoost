import { motion } from 'motion/react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Element, Link } from 'react-scroll';

const Hero = () => {
  return (
    <Element
      name={'hero'}
      className="bg-primary relative flex min-h-dvh items-center overflow-hidden py-20 md:py-0"
    >
      <div className="relative z-10 container">
        <div className="mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent bg-accent/10 border-accent/20 mb-6 inline-block rounded-sm border px-3 py-1 text-[10px] font-bold tracking-widest uppercase">
              Digital Transformation
            </span>
            <h1 className="hero-gradient-text mb-6 text-5xl leading-tight font-extrabold md:text-7xl">
              Grow Your Business With Smart Marketing
            </h1>
            <p className="text-text-dim mb-10 max-w-xl text-lg leading-relaxed">
              Elevate your brand presence with data-driven strategies and
              creative content tailored for high-growth results.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                smooth={true}
                duration={500}
                offset={-70}
                spy={true}
                to="contact"
                className="text-primary bg-accent shadow-accent/10 group inline-flex items-center justify-center rounded-lg px-8 py-3.5 text-sm font-bold tracking-wider uppercase shadow-xl transition-all hover:bg-cyan-400"
              >
                Get Started
                <ArrowRight className="ms-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                smooth={true}
                duration={500}
                offset={-70}
                spy={true}
                to="services"
                className="border-secondary/10 bg-secondary/5 text-secondary hover:bg-secondary/10 inline-flex items-center justify-center rounded-lg border px-8 py-3.5 text-sm font-bold tracking-wider uppercase transition-all"
              >
                View Services
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-2 left-1/2 -translate-x-1/2 sm:bottom-4"
      >
        <Link to={'services'} smooth={true}>
          <ChevronDown className="text-text-dim h-8 w-8" />
        </Link>
      </motion.div>
    </Element>
  );
};
export default Hero;
