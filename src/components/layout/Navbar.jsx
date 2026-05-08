import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Menu, Rocket, X } from 'lucide-react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: 'hero' },
    { name: 'Services', href: 'services' },
    { name: 'Features', href: 'features' },
    { name: 'Contact', href: 'contact' },
  ];

  return (
    <nav
      className={`fixed end-0 top-0 z-50 w-full ${isScrolled ? 'bg-primary/50 border-b border-white/10 backdrop-blur-md' : 'transparent-nav'} py-3`}
    >
      <div className={`container`}>
        <div className={`flex justify-between`}>
          {/* logo */}
          <div className={`flex items-center justify-between gap-1`}>
            <Rocket className="text-accent h-8 w-8" />
            <span className="text-secondary text-2xl font-bold tracking-tight">
              Market<span className="text-accent">Boost</span>
            </span>
          </div>

          <div className={`hidden items-center justify-between gap-3 md:flex`}>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                smooth={true}
                duration={500}
                offset={-70}
                spy={true}
                activeClass="text-accent"
                className={`text-text-dim hover:text-accent text-xs font-bold tracking-widest uppercase transition-colors`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-secondary rounded-md p-2"
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className={` ${isScrolled ? 'bg-surface' : 'bg-surface/80'} border-secondary/5 mt-3 overflow-hidden border-b md:hidden`}
            >
              <div className="flex flex-col gap-1 space-y-1 px-4 pt-2 pb-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    duration={500}
                    offset={-70}
                    spy={true}
                    activeClass="nav-active"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`hover:text-accent text-text-dim block px-4 py-3 text-[10px] font-bold tracking-widest uppercase hover:bg-white/5`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};
export default Navbar;
