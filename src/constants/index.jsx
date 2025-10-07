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
  { label: "Inicio", href: "/#inicio" },
  { label: "Servicios", href: "/#servicios" },
  { label: "Packs", href: "/#packs" },

               // Sobre el equipo de contadores
  { label: "Preguntas Frecuentes", href: "/#faq" },      // FAQ sobre temas contables y tributarios
          // Blog, artículos, descargas, etc.
  { label: "Contacto", href: "/#contacto" }             // Formulario o datos de contacto
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



export const faqContable = [
  {
    id: 1,
    categoria: "Creación de Empresa",
    pregunta: "¿Cuánto tiempo demora crear una empresa en Chile?",
    respuesta: "Con el sistema 'Tu Empresa en un Día' del Registro de Empresas y Sociedades, puedes constituir tu empresa en 24 horas hábiles. Nosotros nos encargamos de toda la gestión: redacción de estatutos, inscripción legal y las publicaciones necesarias para que puedas operar inmediatamente.",
    etiquetas: ["constitución", "empresa", "tiempo", "trámites"]
  },
  {
    id: 2,
    categoria: "Creación de Empresa",
    pregunta: "¿Qué tipo de empresa me conviene más: SPA, LTDA o EIRL?",
    respuesta: "Depende de tu situación específica. Las SPA son más flexibles y permiten socios extranjeros fácilmente. Las LTDA tienen responsabilidad limitada pero son menos flexibles. Las EIRL son ideales para emprendedores individuales. Te asesoramos para elegir la mejor opción según tu proyecto y objetivos.",
    etiquetas: ["tipo empresa", "SPA", "LTDA", "EIRL", "asesoría"]
  },
  {
    id: 3,
    categoria: "Inicio de Actividades",
    pregunta: "¿Cuándo debo hacer el inicio de actividades en el SII?",
    respuesta: "Debes hacer el inicio de actividades antes de comenzar cualquier actividad comercial o cuando obtengas tu primer ingreso. Si no lo haces a tiempo, podrías enfrentar multas del SII. Nosotros gestionamos todo el proceso: obtención de RUT, definición del régimen tributario y configuración de la facturación electrónica.",
    etiquetas: ["inicio actividades", "SII", "RUT", "multas", "facturación"]
  },
  {
    id: 4,
    categoria: "Declaración IVA",
    pregunta: "¿Qué pasa si no declaro el IVA a tiempo?",
    respuesta: "El no declarar el Formulario 29 (IVA) en los plazos establecidos genera multas automáticas que van desde el 5% al 30% del impuesto adeudado, más intereses. Además, el SII puede aplicar sanciones adicionales. Nosotros te ayudamos a mantener al día tus declaraciones mensuales y evitar estas penalizaciones.",
    etiquetas: ["IVA", "F29", "multas", "plazos", "SII"]
  },
  {
    id: 5,
    categoria: "Declaración IVA",
    pregunta: "¿Puedo declarar IVA sin movimientos comerciales?",
    respuesta: "Sí, debes presentar el Formulario 29 aunque no hayas tenido ventas o compras en el mes. Se presenta 'en cero' pero es obligatorio hacerlo. Si tienes dudas sobre cómo llenar correctamente tu declaración, nosotros nos encargamos de calcular y presentar tu IVA mensual.",
    etiquetas: ["IVA", "sin movimientos", "declaración en cero", "obligatorio"]
  },
  {
    id: 6,
    categoria: "Contabilidad",
    pregunta: "¿Es obligatorio llevar contabilidad en mi empresa?",
    respuesta: "Depende del tipo de empresa y sus ingresos. Las empresas del régimen general (Primera Categoría) deben llevar contabilidad completa bajo normas PCGA. Las empresas en régimen simplificado tienen obligaciones menores. Nosotros evaluamos tu situación y llevamos la contabilidad que necesitas según tu régimen tributario.",
    etiquetas: ["contabilidad obligatoria", "PCGA", "régimen tributario", "Primera Categoría"]
  },
  {
    id: 7,
    categoria: "Contabilidad",
    pregunta: "¿Qué documentos debo guardar para mi contabilidad?",
    respuesta: "Debes conservar todas las facturas de compra y venta, boletas, contratos, estados de cuenta bancarios, comprobantes de pago y cualquier documento que respalde operaciones comerciales. La ley exige mantenerlos por 6 años. Nosotros te orientamos sobre qué documentos son necesarios y cómo organizarlos correctamente.",
    etiquetas: ["documentos", "respaldo", "6 años", "facturas", "organización"]
  },
  {
    id: 8,
    categoria: "Declaración de Renta",
    pregunta: "¿Cuándo debo hacer la Declaración de Renta?",
    respuesta: "La Declaración de Renta se presenta anualmente entre abril y mayo del año siguiente. Las empresas (Primera Categoría) y personas con ingresos superiores a ciertos montos están obligadas. Te ayudamos a determinar si debes declarar y optimizamos tu situación tributaria para pagar solo lo justo.",
    etiquetas: ["declaración renta", "abril", "mayo", "obligación", "optimización"]
  },
  {
    id: 9,
    categoria: "Declaración de Renta",
    pregunta: "¿Puedo deducir gastos de mi negocio en la Declaración de Renta?",
    respuesta: "Sí, puedes deducir todos los gastos necesarios para generar la renta, como arriendos, sueldos, servicios básicos, materiales, etc. Es importante mantener todos los respaldos y que los gastos estén debidamente documentados. Nosotros revisamos y optimizamos tus deducciones para que pagues menos impuestos.",
    etiquetas: ["deducciones", "gastos", "respaldos", "optimización tributaria"]
  },
  {
    id: 10,
    categoria: "Declaraciones Juradas",
    pregunta: "¿Qué son las Declaraciones Juradas y cuándo debo presentarlas?",
    respuesta: "Las Declaraciones Juradas son informes detallados que debes presentar al SII sobre operaciones específicas como compras, ventas, retenciones, etc. Se presentan anualmente y los plazos varían según el tipo. No presentarlas genera multas importantes. Nosotros identificamos cuáles debes presentar y las preparamos a tiempo.",
    etiquetas: ["declaraciones juradas", "informes", "compras", "ventas", "retenciones"]
  },
  {
    id: 11,
    categoria: "Régimen Tributario",
    pregunta: "¿Qué es el régimen Pro Pyme y me conviene?",
    respuesta: "El régimen Pro Pyme permite diferir el pago de impuestos hasta por 3 años, ideal para empresas pequeñas con flujo de caja limitado. Tienen derecho empresas con ingresos hasta 25.000 UF anuales. Evaluamos si cumples los requisitos y te ayudamos a aprovechar este beneficio tributario.",
    etiquetas: ["Pro Pyme", "diferimiento", "25000 UF", "flujo caja", "beneficio"]
  },
  {
    id: 12,
    categoria: "Facturación Electrónica",
    pregunta: "¿Es obligatorio usar facturación electrónica?",
    respuesta: "Sí, desde 2022 es obligatorio para todas las empresas que emiten documentos tributarios. Debes obtener certificados digitales y usar un sistema de facturación autorizado por el SII. Te ayudamos a implementar la facturación electrónica y capacitamos a tu equipo para usarla correctamente.",
    etiquetas: ["facturación electrónica", "obligatorio", "certificados", "SII", "capacitación"]
  },
  {
    id: 13,
    categoria: "Trabajadores",
    pregunta: "¿Debo hacer contratos de trabajo y declarar a mis empleados?",
    respuesta: "Sí, todo trabajador debe tener contrato escrito y estar declarado en Previred. Además, debes realizar las retenciones de impuestos y cotizaciones previsionales. No cumplir estas obligaciones genera multas de la Dirección del Trabajo e Inspección del Trabajo. Te asesoramos en toda la gestión laboral y previsional.",
    etiquetas: ["contratos trabajo", "Previred", "retenciones", "cotizaciones", "multas laborales"]
  },
  {
    id: 14,
    categoria: "Boletas de Honorarios",
    pregunta: "¿Cómo funciona la emisión de boletas de honorarios electrónicas?",
    respuesta: "Las boletas de honorarios electrónicas se emiten a través del sitio web del SII con tu Clave Tributaria. Automáticamente se realizan las retenciones del 10.75% (cuando corresponde) y se informa al SII. Te ayudamos a inscribirte para emitir boletas electrónicas y te capacitamos en su uso correcto.",
    etiquetas: ["boletas honorarios", "electrónicas", "retenciones", "10.75%", "Clave Tributaria"]
  },
  {
    id: 15,
    categoria: "Multas y Sanciones",
    pregunta: "¿Qué hago si tengo multas pendientes con el SII?",
    respuesta: "Las multas del SII pueden condonarse parcial o totalmente si cumples ciertos requisitos. Puedes solicitar condonación, convenio de pago o rebaja de multas. Es importante actuar rápido ya que las multas generan intereses. Analizamos tu situación y gestionamos la mejor solución para regularizar tu situación tributaria.",
    etiquetas: ["multas SII", "condonación", "convenio pago", "intereses", "regularización"]
  },
  {
    id: 16,
    categoria: "Planificación Tributaria",
    pregunta: "¿Cómo puedo pagar menos impuestos legalmente?",
    respuesta: "Existen diversas estrategias legales como aprovechar gastos deducibles, elegir el régimen tributario adecuado, usar beneficios como el Pro Pyme, optimizar el momento de las operaciones, etc. Realizamos un análisis integral de tu situación y diseñamos una estrategia personalizada para optimizar tu carga tributaria.",
    etiquetas: ["planificación tributaria", "menos impuestos", "estrategias legales", "optimización", "análisis"]
  },
  {
    id: 17,
    categoria: "Costos y Presupuestos",
    pregunta: "¿Cuánto cuesta mantener la contabilidad de mi empresa al día?",
    respuesta: "Los costos varían según el tamaño de tu empresa, cantidad de operaciones y servicios requeridos. Ofrecemos planes desde $29.990 para profesionales independientes hasta planes integrales para pymes. Todos nuestros servicios incluyen asesoría personalizada y cumplimiento de todas las obligaciones tributarias.",
    etiquetas: ["costos contabilidad", "planes", "pymes", "profesionales", "asesoría"]
  },
  {
    id: 18,
    categoria: "Tecnología y Sistemas",
    pregunta: "¿Qué sistema contable me recomiendan usar?",
    respuesta: "Recomendamos sistemas que se integren con la facturación electrónica y permitan conexión con bancos. Para empresas pequeñas, sistemas cloud como Nubox o Defontana. Para empresas más grandes, ERP más robustos. Evaluamos tu empresa y te recomendamos la mejor solución tecnológica para tu contabilidad.",
    etiquetas: ["sistema contable", "cloud", "Nubox", "Defontana", "ERP", "recomendaciones"]
  },
  {
    id: 19,
    categoria: "Auditorías y Fiscalizaciones",
    pregunta: "¿Qué hacer si el SII me fiscaliza?",
    respuesta: "Lo más importante es mantener la calma y responder en los plazos establecidos. Debes presentar todos los antecedentes solicitados de forma ordenada y clara. Es recomendable tener asesoría profesional durante todo el proceso. Te acompañamos en fiscalizaciones del SII, preparamos la documentación y defendemos tus intereses.",
    etiquetas: ["fiscalización SII", "auditoría", "documentación", "plazos", "asesoría", "defensa"]
  },
  {
    id: 20,
    categoria: "Cierre de Empresa",
    pregunta: "¿Cómo cierro mi empresa correctamente?",
    respuesta: "El cierre involucra varios pasos: término de giro en el SII, liquidación de trabajadores, cierre de cuentas bancarias, disolución legal en el Registro de Comercio, y presentación de declaraciones finales. Un cierre mal hecho puede generar problemas futuros. Te guiamos en todo el proceso de cierre para que quedes sin obligaciones pendientes.",
    etiquetas: ["cierre empresa", "término giro", "liquidación", "disolución", "declaraciones finales"]
  }
];