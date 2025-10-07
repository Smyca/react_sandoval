import bgImage from "../assets/img/home.jpg";
import { useEffect, useState } from "react";

const CheckIcon = () => (
  <svg className="inline w-6 h-6 text-blue-400 mr-2" fill="none" stroke="currentColor" strokeWidth={3}
    viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const Home = () => {
  const scrollToServicios = () => {
    const serviciosSection = document.getElementById('servicios');
    if (serviciosSection) {
      serviciosSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section
      className="min-h-screen flex items-center bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay degradado */}
    <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-black/100 to-black/80"></div>
      {/* Contenido principal */}
      <div className="relative z-10 min-h-screen w-full  ">
        
        {/* Lado izquierdo - Contenido */}
        <div className="flex flex-col  justify-center px-6 sm:px-12 lg:px-16 xl:px-20 py-20">
          
          {/* Encabezado */}
          <div className="mb-8">
            <h1 className="text-blue-400 text-lg md:text-xl font-semibold mb-4 tracking-wide uppercase">
              Servicios de Contabilidad en Chile
            </h1>
            
            <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight ">
              Somos expertos en asesorías 
              <span className="text-blue-400"> contables</span>, 
              <span className="text-blue-400"> tributarias</span> y 
              <span className="text-blue-400"> laborales</span>.
            </h2>
          </div>

          {/* Descripción */}
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
            En Fiscalízate de Sandoval & Co., nos especializamos en brindar asesoría integral 
            a emprendedores y empresas de todos los tamaños. Te ayudamos a cumplir con las 
            normativas legales y optimizar tus recursos.
          </p>

         

          {/* Botón de acción */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={scrollToServicios}
              className="bg-blue-600 hover:bg-blue-900 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Más información
            </button>
            
           
          </div>

         
        </div>

        {/* Lado derecho - Imagen (visible en pantallas grandes) */}
        <div className="hidden lg:block relative">
          {/* La imagen de fondo ya está aplicada al contenedor principal */}
        </div>
      </div>
    </section>
  );
};

export default Home;