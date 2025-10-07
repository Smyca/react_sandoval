import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { faqContable } from '../constants';

const Preguntas = () => {
  const [expandedItem, setExpandedItem] = useState(null);

  const toggleExpanded = (id) => {
    setExpandedItem(expandedItem === id ? null : id);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="max-w-4xl mx-auto px-6 sm:px-12 lg:px-16">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Preguntas <span className="text-blue-600">Frecuentes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Encuentra respuestas a las dudas más comunes sobre contabilidad, tributación 
            y cumplimiento de obligaciones legales en Chile.
          </p>
        </div>

        {/* Lista de FAQs */}
        <div className="space-y-4">
          {faqContable.map((faq) => (
            <div
              key={faq.id}
              className="bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300 overflow-hidden"
            >
              
              {/* Pregunta */}
              <button
                onClick={() => toggleExpanded(faq.id)}
                className="w-full px-6 py-6 text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 hover:bg-blue-50 transition-colors duration-200"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-800 leading-relaxed flex-1">
                    {faq.pregunta}
                  </h3>
                  
                  {/* Ícono */}
                  <div className="flex-shrink-0">
                    {expandedItem === faq.id ? (
                      <ChevronUp className="h-6 w-6 text-blue-600 transition-transform duration-300" />
                    ) : (
                      <ChevronDown className="h-6 w-6 text-gray-400 transition-transform duration-300" />
                    )}
                  </div>
                </div>
              </button>

              {/* Respuesta expandible con animación fluida */}
              <div
                className={`transition-all duration-500 ease-in-out ${
                  expandedItem === faq.id
                    ? 'max-h-96 opacity-100'
                    : 'max-h-0 opacity-0'
                }`}
                style={{
                  maxHeight: expandedItem === faq.id ? '500px' : '0px',
                }}
              >
                <div className="px-6 pb-6">
                  <div className="border-t border-gray-100 pt-4">
                    <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                      {faq.respuesta}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA final */}
        <div className="mt-16 text-center bg-blue-600 rounded-2xl p-8 text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            ¿No encontraste lo que buscabas?
          </h3>
          <p className="text-blue-100 text-lg mb-6 max-w-2xl mx-auto">
            Nuestro equipo de expertos está listo para resolver todas tus dudas sobre 
            contabilidad y tributación de forma personalizada.
          </p>
          <button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
            Contactar un experto
          </button>
        </div>
      </div>
    </section>
  );
};

export default Preguntas;