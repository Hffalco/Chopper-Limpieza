import React, { useState } from 'react';
import { PRODUCTS, CATEGORIES, CONTACT_INFO } from '../constants';
import { MessageCircle } from 'lucide-react';

const Products: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredProducts = activeCategory === "Todos" 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <section id="productos" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestros Productos</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explorá nuestra selección de insumos de limpieza de alta eficiencia. 
            Venta directa de fábrica.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-brand-primary text-white shadow-md transform scale-105'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-brand-primary hover:text-brand-primary'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100 group">
              <div className="relative h-64 overflow-hidden bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                {product.badge && (
                  <span className="absolute top-4 right-4 bg-brand-accent text-brand-dark text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                    {product.badge}
                  </span>
                )}
              </div>
              <div className="p-6">
                <div className="text-xs font-semibold text-brand-primary mb-2 uppercase tracking-wide">
                  {product.category}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-6 h-10 line-clamp-2">
                  {product.description}
                </p>
                <a
                  href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=Hola,%20me%20interesa%20el%20producto:%20${product.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex justify-center items-center gap-2 bg-white border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white font-semibold py-2 px-4 rounded-lg transition-colors"
                >
                  <MessageCircle size={18} />
                  Consultar Precio
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;