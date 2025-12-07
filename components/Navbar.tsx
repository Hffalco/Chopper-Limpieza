import React, { useState } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { CONTACT_INFO, IMAGES } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Inicio', href: '#hero' },
    { name: 'Productos', href: '#productos' },
    { name: 'Ofertas', href: '#ofertas' },
    { name: 'Clientes', href: '#clientes' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <span className="text-2xl font-bold text-brand-primary tracking-tight">Chopper</span>
            {/* Si se usa imagen: <img src={IMAGES.logo} alt="Chopper Logo" className="h-10 w-auto" /> */}
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-600 hover:text-brand-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA Button Desktop */}
          <div className="hidden md:flex items-center">
             <a
              href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand-secondary hover:bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold transition-colors shadow-sm"
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-500 hover:text-gray-700 focus:outline-none p-2"
              aria-expanded={isOpen}
              aria-label="Abrir menú"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-gray-700 hover:text-brand-primary hover:bg-gray-50 px-3 py-4 rounded-md text-base font-medium text-center border-b border-gray-50 last:border-0"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;