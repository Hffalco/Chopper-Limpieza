import React from 'react';
import { OFFERS, CONTACT_INFO } from '../constants';
import { Tag, ArrowRight } from 'lucide-react';

const Offers: React.FC = () => {
  return (
    <section id="ofertas" className="py-16 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2 flex items-center gap-2">
              <Tag className="text-brand-accent transform -rotate-12" size={32} />
              Ofertas Imperdibles
            </h2>
            <p className="text-gray-600">Precios especiales para cuidar tu bolsillo.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {OFFERS.map((offer) => (
            <div key={offer.id} className="bg-gradient-to-br from-brand-primary to-blue-700 rounded-2xl p-6 text-white shadow-lg relative overflow-hidden group">
              {/* Decorative circle */}
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/10 rounded-full blur-2xl group-hover:bg-white/20 transition-colors"></div>
              
              <div className="relative z-10">
                <div className="inline-block bg-brand-accent text-brand-dark text-xs font-bold px-2 py-1 rounded mb-4">
                  {offer.discount}
                </div>
                <h3 className="text-2xl font-bold mb-2">{offer.title}</h3>
                <p className="text-blue-100 mb-6">{offer.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold">{offer.price}</span>
                  <a 
                    href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=Hola,%20quiero%20la%20oferta:%20${offer.title}`}
                    className="bg-white text-brand-primary p-2 rounded-full hover:bg-gray-100 transition-colors"
                    aria-label={`Comprar oferta ${offer.title}`}
                  >
                    <ArrowRight size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Promo Banner */}
        <div className="bg-brand-secondary rounded-2xl p-8 md:p-12 text-center text-white relative overflow-hidden shadow-xl">
            <div className="relative z-10 max-w-3xl mx-auto">
                <h3 className="text-2xl md:text-4xl font-bold mb-4">📢 Promo Semanal</h3>
                <p className="text-lg md:text-xl mb-8 opacity-90">
                    Todas las semanas renovamos nuestro catálogo de descuentos. 
                    ¡Escribinos y pedí la lista actualizada!
                </p>
                <a 
                    href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=Hola,%20quiero%20ver%20la%20lista%20de%20ofertas%20semanales`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-white text-green-600 font-bold py-3 px-8 rounded-full hover:shadow-lg transform hover:-translate-y-1 transition-all"
                >
                    Pedir lista por WhatsApp
                </a>
            </div>
            {/* Background patterns */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>
        </div>

      </div>
    </section>
  );
};

export default Offers;