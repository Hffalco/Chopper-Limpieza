import React from 'react';
import { Star } from 'lucide-react';
import { REVIEWS } from '../constants';

const Reviews: React.FC = () => {
  return (
    <section id="resenas" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Lo que dicen nuestros clientes</h2>
                <div className="flex items-center gap-2">
                    <div className="flex text-yellow-400">
                        {[1, 2, 3, 4, 5].map((s) => <Star key={s} fill="currentColor" size={20} />)}
                    </div>
                    <span className="text-gray-600 font-medium">4.9/5 Promedio General</span>
                </div>
            </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REVIEWS.map((review) => (
            <div key={review.id} className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:border-brand-primary/30 transition-colors">
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={16} 
                    fill={i < review.rating ? "currentColor" : "none"} 
                    className={i < review.rating ? "text-yellow-400" : "text-gray-300"}
                  />
                ))}
              </div>
              <p className="text-gray-600 text-sm mb-6 italic">"{review.text}"</p>
              <div className="flex items-center gap-3">
                 <div className="w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary font-bold">
                    {review.name.charAt(0)}
                 </div>
                 <div>
                    <h4 className="font-bold text-gray-900 text-sm">{review.name}</h4>
                    <span className="text-xs text-gray-500">{review.location}</span>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;