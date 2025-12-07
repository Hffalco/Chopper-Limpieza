import React from 'react';
import { ArrowRight, Truck, Store, ShieldCheck } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <div className="text-center lg:text-left space-y-8 z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Insumos de limpieza para <span className="text-brand-primary">hogares</span> y <span className="text-brand-primary">comercios</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0">
              Calidad profesional al mejor precio. Venta mayorista y minorista con asesoramiento personalizado en San Juan.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="#ofertas"
                className="inline-flex justify-center items-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-brand-primary hover:bg-sky-700 transition-colors shadow-lg shadow-blue-500/30"
              >
                Ver Ofertas
              </a>
              <a 
                href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=Hola,%20quisiera%20consultar%20precios`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center px-8 py-3 border border-gray-300 text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors"
              >
                Contactar por WhatsApp
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>

            <div className="pt-8 flex flex-wrap justify-center lg:justify-start gap-4 text-sm font-medium text-gray-500">
              <div className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-full border border-gray-100">
                <Truck className="h-5 w-5 text-brand-secondary" />
                <span>Entrega rápida</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-full border border-gray-100">
                <Store className="h-5 w-5 text-brand-secondary" />
                <span>Mayorista y Minorista</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-full border border-gray-100">
                <ShieldCheck className="h-5 w-5 text-brand-secondary" />
                <span>Atención personalizada</span>
              </div>
            </div>
          </div>

          <div className="relative lg:h-full flex justify-center items-center">
             {/* Decorative blob */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-50 rounded-full blur-3xl opacity-50 -z-10"></div>
             
             {/* Placeholder for Hero Image - Simulating product group */}
             <div className="relative rounded-2xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
               <img 
                 src="https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&q=80&w=800" 
                 alt="Productos de limpieza Chopper" 
                 className="w-full h-auto object-cover max-h-[500px]"
                 loading="lazy"
               />
               <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                 <p className="text-white font-bold text-lg">Calidad garantizada</p>
               </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;