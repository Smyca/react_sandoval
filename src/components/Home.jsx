import bgImage from "../assets/img/home.jpg";
import { useEffect, useState } from "react";

const CheckIcon = () => (
  <svg className="inline w-6 h-6 text-blue-400 mr-2" fill="none" stroke="currentColor" strokeWidth={3}
    viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const Home = () => {
  

 

  return (
    <section
      className="min-h-auto  flex justify-center items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="bg-black/80 border border-blue-400/30 shadow-2xl backdrop-blur-sm  h-auto flex items-center justify-center">
        <div className="relative flex flex-col items-center mt-6 px-4 sm:px-8 md:px-20 lg:px-40">
          <h1 className=" text-white  text-4xl md:text-5xl font-bold mb-2 drop-shadow-md left-0">
            ¿Quienes Somos?
          </h1>
          <div className="pt-10 pb-10">
            <p className="text-center opacity-100 visible
                text-white text-lg md:text-xl font-semibold mb-8 leading-relaxed drop-shadow-md"
            >
              En Fiscalizate de Sandoval & Co., nos especializamos en brindar asesoría contable, fiscal y financiera a
              emprendedores y empresas de todos los tamaños. Nuestro objetivo es ayudarte a cumplir con todas las normativas legales, optimizar tus recursos y asegurar el crecimiento sostenible de tu negocio.
            </p>
            <div className="mx-auto max-w-3xl">
              <h2 className="text-center text-white text-3xl md:text-4xl font-bold mb-4 ">
                Algunos de nuestros servicios
              </h2>
              <div className=" space-y-3 text-white text-lg md:text-xl font-semibold">
                <p>
                  <CheckIcon />
                  Constitución de Empresa.
                </p>
                <p>
                  <CheckIcon />
                  Inicio de Actividades & Obtención de RUT.
                </p>
                <p>
                  <CheckIcon />
                  Contabilidad Mensual.
                </p>
                <p>
                  <CheckIcon />
                  Declaración de Impuestos Mensuales.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;