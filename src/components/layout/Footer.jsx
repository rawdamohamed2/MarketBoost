import React from 'react';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="border-t border-slate-900 bg-slate-950 py-12 text-center">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-4 text-2xl font-bold tracking-tighter text-white">
          Market<span className="text-cyan-500">Boost</span>
        </div>
        <p className="mb-8 text-sm text-slate-500">
          © {new Date().getFullYear()} MarketBoost Digital Solutions. All rights
          reserved.
        </p>
        <div className="flex justify-center space-x-6">
          {['Home', 'Services', 'Features', 'Contact'].map((item) => (
            <Link
              key={item}
              to={`${item.toLowerCase()}`}
              smooth={true}
              duration={500}
              offset={-70}
              spy={true}
              className="text-sm font-medium text-slate-400 transition-colors hover:text-cyan-400"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};
export default Footer;
