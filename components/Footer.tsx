import React from 'react';
import { Facebook, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-950 text-gray-400 py-10 border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="text-center md:text-left">
            <h3 className="text-white text-xl font-bold mb-2">Chopper Centro Limpieza</h3>
            <p className="text-sm">Insumos de limpieza para tu hogar y empresa.</p>
          </div>

          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors" aria-label="Facebook">
                <Facebook size={24} />
            </a>
            <a href="#" className="hover:text-white transition-colors" aria-label="Instagram">
                <Instagram size={24} />
            </a>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm font-medium">
            <a href="#hero" className="hover:text-brand-primary transition-colors">Inicio</a>
            <a href="#productos" className="hover:text-brand-primary transition-colors">Productos</a>
            <a href="#ofertas" className="hover:text-brand-primary transition-colors">Ofertas</a>
            <a href="#contacto" className="hover:text-brand-primary transition-colors">Contacto</a>
          </div>

        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-xs text-gray-600 flex flex-col items-center">
            <p>&copy; {new Date().getFullYear()} Chopper Centro Limpieza. Todos los derechos reservados.</p>
            <p className="mt-2 flex items-center gap-1">
                Hecho con <span className="text-red-500">❤️</span> en San Juan
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;