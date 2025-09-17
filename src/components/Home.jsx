import bgImage from "../assets/img/home.jpg"; // Ajusta la ruta si es necesario

// Puedes usar un ícono SVG para el check en vez de una imagen si lo prefieres
const CheckIcon = () => (
<svg className="inline w-6 h-6 text-blue-400 mr-2" fill="none" stroke="currentColor" strokeWidth={3}
  viewBox="0 0 24 24">
  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
</svg>
);

const Home = () => {
return (
<section className="w-full min-h-screen flex justify-center items-center bg-cover bg-center animate-fadeIn" style={{
    backgroundImage: `url(${bgImage})`,
  }}>
  <div
    className="bg-black/80 rounded-[3rem] border border-blue-400/30 shadow-2xl max-w-6xl w-full mx-4 py-12 px-8 flex flex-col items-center backdrop-blur-xl mt-8 md:-mt-16">
    <h1 className="text-white text-4xl md:text-5xl font-bold mb-8 drop-shadow-md">
      ¿Quienes Somos?
    </h1>
    <p className="text-white text-lg md:text-xl font-semibold mb-8 leading-relaxed drop-shadow-md">
      En Fiscalizate de Sandoval & Co., nos especializamos en brindar asesoría contable, fiscal y financiera a
      emprendedores y empresas de todos los tamaños.
      Nuestro objetivo es ayudarte a cumplir con todas las normativas legales, optimizar tus recursos y asegurar el
      crecimiento sostenible de tu negocio.
    </p>
    <div className="mx-auto max-w-3xl">
      <h2 className="text-white text-3xl md:text-4xl font-bold mb-4 underline underline-offset-2">
        Algunos de nuestros servicios:
      </h2>
      <ul className="list-disc ml-6 space-y-3 text-white text-lg md:text-xl font-semibold">
        <li>
          <CheckIcon />
          Constitución de Empresa.
        </li>
        <li>
          <CheckIcon />
          Inicio de Actividades & Obtención de RUT.
        </li>
        <li>
          <CheckIcon />
          Contabilidad Mensual.
        </li>
        <li>
          <CheckIcon />
          Declaración de Impuestos Mensuales.
        </li>
      </ul>
    </div>
  </div>
</section>
);
};

export default Home;