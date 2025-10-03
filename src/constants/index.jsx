import img1 from "../assets/img/Img-1.jpg";
import _blue from "../assets/img/blue.jpg";
import _home from "../assets/img/home.jpg";
import declIva from "../assets/img/decl_iva.jfif";
import declJuradas from "../assets/img/decl_juradas.jfif";
import _equipo from "../assets/img/equipo.jpg";
import inicioAct from "../assets/img/inicio_act.jfif";
import _logo from "../assets/img/logo.png";
import _service from "../assets/img/service.jpeg";
import _test1 from "../assets/img/test1.jpg";



export const servicios = [
  {
    nombre: "Creación de empresa",
    img: img1,
    descripcion: "Formaliza tu empresa con la redacción de estatutos y la inscripción legal necesaria para operar en Chile.",
    subservicios: [
      "Redacción de estatutos",
      "Constitución legal",
      "Publicaciones y protocolización"
    ]
  },
  {
    nombre: "Inicio de Actividades",
    img: inicioAct,
    descripcion: "Gestiona los trámites iniciales para operar legalmente.",
    subservicios: [
      "Obtención de RUT",
      "Inicio de actividades comerciales",
      "Definición de régimen tributario"
    ]
  },
  {
    nombre: "Declaración de Formulario 29 (IVA)",
    img: declIva,
    descripcion: "Cumple con la declaración mensual de impuestos ante el SII.",
    subservicios: [
      "Cálculo y declaración del IVA",
      "Retenciones de impuestos",
      "Pago de impuestos mensuales"
    ]
  },
  {
    nombre: "Declaraciones Juradas",
    img: declJuradas,
    descripcion: "Prepara y presenta las declaraciones exigidas por el SII.",
    subservicios: [
      "Declaración de ingresos y retenciones",
      "Declaración de compras y ventas",
      "Informes de inversión y movimientos financieros"
    ]
  },
  {
    nombre: "Declaración Renta Segunda Categoría",
    img: img1,
    descripcion: "Cumple con la declaración anual de impuestos personales.",
    subservicios: [
      "Determinación de rentas imponibles",
      "Aplicación de beneficios y exenciones",
      "Presentación de declaración anual"
    ]
  },
  {
    nombre: "Contabilidad bajo normas PCGA",
    img: img1,
    descripcion: "Lleva la contabilidad de tu empresa conforme a las normativas contables.",
    subservicios: [
      "Registro y control de operaciones",
      "Elaboración de estados financieros",
      "Cumplimiento normativo y auditoría"
    ]
  }
];



export const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Packs", href: "#packs" },

               // Sobre el equipo de contadores
  { label: "Preguntas Frecuentes", href: "#faq" },      // FAQ sobre temas contables y tributarios
          // Blog, artículos, descargas, etc.
  { label: "Contacto", href: "#contacto" }             // Formulario o datos de contacto
];

export const packs = [
  {
    nombre: "Pack Emprendedor",
    icono: "🚀",
    colorFondo: "bg-orange-100",
    colorTexto: "text-orange-800", // Color oscuro para el nombre
    descripcion: "Ideal para iniciar tu negocio de forma rápida y correcta.",
    beneficios: [
      'Constitución de empresa en "Tu Empresa en un Día".',
      "Redacción de estatutos y asesoría en régimen tributario.",
      "Inicio de actividades ante el SII y obtención de RUT.",
      "Primer mes de contabilidad mensual gratis.",
      "Asesoría en facturación electrónica y documentos tributarios.",
    ],
    precio: "CLP $79.990 (promocional)",
  },
  {
    nombre: "Pack Pyme Tranquila", 
    icono: "🏢📊",
    colorFondo: "bg-blue-100",
    colorTexto: "text-blue-800", // Color oscuro para el nombre
    descripcion: "Para pequeñas empresas que quieren cumplir sin preocupaciones.",
    beneficios: [
      "Contabilidad mensual por 3 meses.",
      "Declaración de IVA (F29) incluida por 3 meses.",
      "Elaboración de estados financieros básicos.",
      "Asesoría tributaria inicial para optimización de impuestos.",
      "20% de descuento en Declaración de Renta Anual.",
      "Reunión virtual para aclarar dudas.",
    ],
    precio: "CLP $99.990 (promocional)",
  },
  {
    nombre: "Pack Profesional",
    icono: "👨‍⚕️👩‍💻", 
    colorFondo: "bg-green-100",
    colorTexto: "text-green-800", // Color oscuro para el nombre
    descripcion: "Pensado para profesionales independientes.",
    beneficios: [
      "Inicio de actividades como persona natural (segunda categoría).",
      "Obtención de RUT y Clave Tributaria.",
      "Inscripción para emisión de boletas de honorarios electrónicas.",
      "Capacitación virtual sobre retenciones y pagos provisionales.",
      "20% de descuento en Declaración de Renta Anual.",
    ],
    precio: "CLP $29.990 (promocional)",
  },
  {
    nombre: "Pack Renta y Cumplimiento Fiscal",
    icono: "🏦✅",
    colorFondo: "bg-purple-100",
    colorTexto: "text-purple-800", // Color oscuro para el nombre
    descripcion: "Para quienes necesitan cumplir sus obligaciones tributarias sin errores.",
    beneficios: [
      "Declaración de Renta (Formulario 22) para primera categoría.",
      "Presentación de Declaraciones Juradas (según corresponda).",
      "Análisis y optimización de impuestos.",
      "Regularización de observaciones con el SII.",
      "Asesoría personalizada en planificación tributaria.",
    ],
    precio: "CLP $49.990 - $74.990 (según situación tributaria)",
  },
];