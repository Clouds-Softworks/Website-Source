import React, { useState, useEffect } from 'react';
import { Cloud, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-900/90 backdrop-blur-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Cloud className="w-8 h-8 text-blue-500" />
            <span className="ml-2 text-white font-semibold text-lg">Clouds Softworks</span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <NavLink href="/" label="Home" />
              <NavLink href="/projects" label="Projects" />
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* mobile menu for those filthy phone users */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-sm">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <MobileNavLink href="/" label="Home" />
            <MobileNavLink href="/projects" label="Projects" />

          </div>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ href, label }: { href: string; label: string }) => (
  <a
    href={href}
    className="text-gray-300 hover:text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors"
  >
    {label}
  </a>
);

const MobileNavLink = ({ href, label }: { href: string; label: string }) => (
  <a
    href={href}
    className="block text-gray-300 hover:text-white px-3 py-2 rounded-lg text-base font-medium"
  >
    {label}
  </a>
);

export default Navbar;