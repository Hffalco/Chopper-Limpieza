import React from 'react';
import { Briefcase } from 'lucide-react';

const Clients: React.FC = () => {
  const clientTypes = [
    "Restaurantes", "Oficinas", "Consorcios", "Gimnasios", 
    "Hoteles", "Escuelas", "Clínicas", "Fábricas"
  ];

  return (
    <section id="clientes" className="py-16 bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-10">
          <span className="inline-block p-3 rounded-full bg-blue-100 text-brand-primary mb-4">
            <Briefcase size={24} />
          </span>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Confían en Nosotros</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Abastecemos a empresas y comercios de todo San Juan con factura A y B.
            Atención prioritaria para pedidos mayoristas.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {clientTypes.map((type, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-100 rounded-lg p-6 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow h-24"
            >
              <span className="text-gray-400 font-bold text-lg uppercase tracking-wider">
                {type}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;