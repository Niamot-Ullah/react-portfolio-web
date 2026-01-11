
import React, { useState, useEffect } from 'react';
import { Section } from '../types';
import { ThemeToggle } from './ThemeToggle';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', href: `#${Section.About}` },
    { label: 'Skills', href: `#${Section.Skills}` },
    { label: 'Projects', href: `#${Section.Projects}` },
    { label: 'Education', href: `#${Section.Education}` },
    { label: 'Contact', href: `#${Section.Contact}` },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-card py-3 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold tracking-tighter text-gray-900 dark:text-white">
          NEYAMAT<span className="text-indigo-500">.</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}
          <ThemeToggle />
          <a href={`https://drive.google.com/file/d/18exFd3uzdOSnz-zkTq5RQuT7tJdS6is8/view?usp=drive_link`} target="_blank" className="px-8 py-2 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold transition-all shadow-lg shadow-indigo-600/20 hover:scale-105 active:scale-95">
                  Resume
                </a>
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-4 lg:hidden">
          <ThemeToggle />
          <button 
            className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-white focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden absolute top-full left-0 right-0 glass-card transition-all duration-300 ${mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
        <div className="flex flex-col p-6 space-y-4">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-medium text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};
