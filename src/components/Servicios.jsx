import React, { useRef } from "react";
import { servicios } from "../constants";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Servicios = () => {
  const scrollRef = useRef();
  const cardWidth = 340 + 32; // ancho + gap
  const infiniteServicios = [...servicios, ...servicios];

  // Función para scrollear con flechas
  const scroll = (dir) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <section id="servicios" className="w-full py-12 bg-gradient-to-b from-blue-900/60 to-blue-900/20">
      <div className="max-w-6xl mx-auto px-4 relative">
        <h2 className="text-white text-3xl md:text-4xl font-bold mb-10 text-center">Nuestros Servicios</h2>
        {/* Flechas */}
        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-blue-900/80 rounded-full p-3 shadow-lg hover:bg-blue-600 transition hidden md:block"
          onClick={() => scroll("left")}
          aria-label="Scroll left"
        >
          <ChevronLeft className="text-white w-8 h-8" />
        </button>
        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-blue-900/80 rounded-full p-3 shadow-lg hover:bg-blue-600 transition hidden md:block"
          onClick={() => scroll("right")}
          aria-label="Scroll right"
        >
          <ChevronRight className="text-white w-8 h-8" />
        </button>
        <div className="overflow-hidden">
          <div
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto scrollbar-none cursor-grab select-none"
            style={{
              width: `${infiniteServicios.length * 372}px`,
              scrollBehavior: "smooth",
            }}
          >
            {infiniteServicios.map((servicio, idx) => (
              <div
                key={idx + servicio.nombre}
                className="min-w-[340px] max-w-[340px] bg-blue-900/90 rounded-2xl shadow-lg flex flex-col items-center px-6 py-8 mx-auto transition hover:scale-105"
              >
                <img
                  src={servicio.img}
                  alt={servicio.nombre}
                  className="w-full h-44 object-cover rounded-xl mb-6"
                />
                <h3 className="text-white text-xl md:text-2xl font-bold text-center mb-3">{servicio.nombre}</h3>
                <p className="text-blue-100 text-base md:text-lg text-center mb-4">{servicio.descripcion}</p>
                <ul className="mb-6 text-blue-200 text-sm list-disc list-inside text-left">
                  {servicio.subservicios.map((sub, i) => (
                    <li key={i}>{sub}</li>
                  ))}
                </ul>
                <button className="bg-green-700 hover:bg-green-800 text-white font-semibold px-8 py-2 rounded-xl shadow transition">
                  Solicitar
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Servicios;