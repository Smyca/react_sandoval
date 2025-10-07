import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import NavBar from '../components/Navbar';
import ContactModal from '../components/ContactModal';
import { packs } from '../constants';

const ServiciosPage = () => {
    const [searchParams] = useSearchParams();
    const section = searchParams.get('section');
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedService, setSelectedService] = useState('');
    const [selectedPack, setSelectedPack] = useState('');

    useEffect(() => {
        if (section) {
            setTimeout(() => {
                const element = document.getElementById(section);
                if (element) {
                    const html = document.documentElement;
                    const originalBehavior = html.style.scrollBehavior;
                    html.style.scrollBehavior = 'auto';
                    
                    const offsetTop = element.offsetTop - 76;
                    window.scrollTo(0, offsetTop);
                    
                    setTimeout(() => {
                        html.style.scrollBehavior = originalBehavior;
                    }, 100);
                }
            }, 50);
        }
    }, [section]);

    const handleSolicitarCotizacion = (itemName) => {
        // Verificar si es un pack o un servicio
        const isPack = packs.some(pack => pack.nombre === itemName);
        
        if (isPack) {
            setSelectedPack(itemName);
            setSelectedService('');
        } else {
            setSelectedService(itemName);
            setSelectedPack('');
        }
        
        setModalOpen(true);
    };

    // Función para cerrar modal y limpiar selecciones
    const handleCloseModal = () => {
        setModalOpen(false);
        setSelectedService('');
        setSelectedPack('');
    };

    // Función para generar el ID de la sección
    const generateSectionId = (nombre) => {
        return nombre.toLowerCase()
            .replace(/á/g, 'a')
            .replace(/é/g, 'e')
            .replace(/í/g, 'i')
            .replace(/ó/g, 'o')
            .replace(/ú/g, 'u')
            .replace(/ñ/g, 'n')
            .replace(/\s+/g, '-')
            .replace(/[^\w-]/g, '');
    };

    return (
        <>
            <NavBar />
            
            <div className="min-h-screen bg-gray-50 pt-20">
                <div className="container mx-auto px-4 py-8">
                    <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">Nuestros Servicios y Packs</h1>
                    
                    {/* Sección de Packs */}
                    <div className="mb-20">
                        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">📦 Packs Promocionales</h2>
                        <p className="text-lg text-gray-600 text-center mb-12 max-w-4xl mx-auto">
                            Descubre nuestros packs diseñados especialmente para diferentes tipos de clientes. 
                            Cada pack incluye múltiples servicios integrados a un precio especial.
                        </p>

                        {/* Pack Emprendedor */}
                        <section id="pack-emprendedor" className="mb-16 p-8 bg-white rounded-lg shadow-lg border-l-4 border-orange-500">
                            <div className="flex items-center mb-6">
                                <span className="text-4xl mr-4">🚀</span>
                                <h3 className="text-3xl font-bold text-orange-800">Pack Emprendedor</h3>
                            </div>
                            <p className="text-lg text-gray-700 mb-6">
                                Ideal para iniciar tu negocio de forma rápida y correcta. Todo lo que necesitas para formalizar tu empresa desde cero.
                            </p>
                            <div className="grid lg:grid-cols-3 gap-6">
                                <div className="lg:col-span-2">
                                    <h4 className="text-xl font-semibold mb-4 text-gray-800">Servicios incluidos:</h4>
                                    <div className="space-y-4">
                                        <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                                            <div className="flex items-start">
                                                <span className="text-orange-600 mr-3 mt-1">🏢</span>
                                                <div>
                                                    <h5 className="font-semibold text-orange-800">Constitución de empresa en "Tu Empresa en un Día"</h5>
                                                    <p className="text-gray-700 text-sm mt-1">
                                                        Proceso completo de constitución legal utilizando el sistema express del gobierno, 
                                                        incluyendo escritura pública, inscripción en el CBR y publicación en el Diario Oficial.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                                            <div className="flex items-start">
                                                <span className="text-orange-600 mr-3 mt-1">📋</span>
                                                <div>
                                                    <h5 className="font-semibold text-orange-800">Redacción de estatutos y asesoría en régimen tributario</h5>
                                                    <p className="text-gray-700 text-sm mt-1">
                                                        Elaboración personalizada de estatutos sociales y consultoría especializada para elegir 
                                                        el régimen tributario más conveniente según tu actividad empresarial.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                                            <div className="flex items-start">
                                                <span className="text-orange-600 mr-3 mt-1">🆔</span>
                                                <div>
                                                    <h5 className="font-semibold text-orange-800">Inicio de actividades ante el SII y obtención de RUT</h5>
                                                    <p className="text-gray-700 text-sm mt-1">
                                                        Gestión completa de los trámites ante el SII: obtención del RUT empresarial, 
                                                        declaración de inicio de actividades y configuración de códigos de actividad económica.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                                            <div className="flex items-start">
                                                <span className="text-orange-600 mr-3 mt-1">🎁</span>
                                                <div>
                                                    <h5 className="font-semibold text-orange-800">Primer mes de contabilidad mensual gratis</h5>
                                                    <p className="text-gray-700 text-sm mt-1">
                                                        Incluye registro contable completo del primer mes, elaboración de estados financieros básicos 
                                                        y declaración del primer Formulario 29 sin costo adicional.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                                            <div className="flex items-start">
                                                <span className="text-orange-600 mr-3 mt-1">📊</span>
                                                <div>
                                                    <h5 className="font-semibold text-orange-800">Asesoría en facturación electrónica y documentos tributarios</h5>
                                                    <p className="text-gray-700 text-sm mt-1">
                                                        Configuración e implementación del sistema de facturación electrónica, 
                                                        capacitación en emisión de documentos tributarios y cumplimiento normativo digital.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
                                    <h4 className="text-xl font-semibold mb-3 text-orange-800">¿Por qué elegir este pack?</h4>
                                    <p className="text-gray-700 mb-4">
                                        Perfecto para emprendedores que quieren formalizar su negocio de manera integral y profesional.
                                    </p>
                                    <div className="mb-4">
                                        <p className="text-lg font-bold text-orange-600 mb-2">CLP $79.990 (promocional)</p>
                                        <p className="text-sm text-orange-700 font-medium">Ahorro: Más de $150.000 vs servicios individuales</p>
                                        <p className="text-sm text-orange-700">Tiempo total: 7-10 días hábiles</p>
                                    </div>
                                    <button 
                                        onClick={() => handleSolicitarCotizacion('Pack Emprendedor')}
                                        className="w-full bg-orange-600 hover:bg-orange-700 text-white py-2 px-4 rounded-lg transition-colors"
                                    >
                                        Solicitar Pack Emprendedor
                                    </button>
                                </div>
                            </div>
                        </section>

                        {/* Pack Pyme Tranquila */}
                        <section id="pack-pyme-tranquila" className="mb-16 p-8 bg-white rounded-lg shadow-lg border-l-4 border-blue-500">
                            <div className="flex items-center mb-6">
                                <span className="text-4xl mr-4">🏢</span>
                                <h3 className="text-3xl font-bold text-blue-800">Pack Pyme Tranquila</h3>
                            </div>
                            <p className="text-lg text-gray-700 mb-6">
                                Para pequeñas empresas que quieren cumplir sin preocupaciones. Gestión contable y tributaria integral por 3 meses.
                            </p>
                            <div className="grid lg:grid-cols-3 gap-6">
                                <div className="lg:col-span-2">
                                    <h4 className="text-xl font-semibold mb-4 text-gray-800">Servicios incluidos:</h4>
                                    <div className="space-y-4">
                                        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                                            <div className="flex items-start">
                                                <span className="text-blue-600 mr-3 mt-1">📚</span>
                                                <div>
                                                    <h5 className="font-semibold text-blue-800">Contabilidad mensual por 3 meses</h5>
                                                    <p className="text-gray-700 text-sm mt-1">
                                                        Registro completo de todas las operaciones comerciales, mantenimiento de libros contables 
                                                        actualizados y cumplimiento de normativas contables por trimestre completo.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                                            <div className="flex items-start">
                                                <span className="text-blue-600 mr-3 mt-1">📊</span>
                                                <div>
                                                    <h5 className="font-semibold text-blue-800">Declaración de IVA (F29) incluida por 3 meses</h5>
                                                    <p className="text-gray-700 text-sm mt-1">
                                                        Cálculo y presentación mensual del Formulario 29, gestión de pagos de IVA, 
                                                        retenciones y PPM durante todo el trimestre sin costos adicionales.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                                            <div className="flex items-start">
                                                <span className="text-blue-600 mr-3 mt-1">📈</span>
                                                <div>
                                                    <h5 className="font-semibold text-blue-800">Elaboración de estados financieros básicos</h5>
                                                    <p className="text-gray-700 text-sm mt-1">
                                                        Balance General y Estado de Resultados mensuales, análisis de indicadores financieros 
                                                        y reportes ejecutivos para la toma de decisiones empresariales.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                                            <div className="flex items-start">
                                                <span className="text-blue-600 mr-3 mt-1">💡</span>
                                                <div>
                                                    <h5 className="font-semibold text-blue-800">Asesoría tributaria inicial para optimización de impuestos</h5>
                                                    <p className="text-gray-700 text-sm mt-1">
                                                        Análisis de la situación tributaria actual, identificación de oportunidades de ahorro fiscal 
                                                        y estrategias de planificación tributaria personalizada.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                                            <div className="flex items-start">
                                                <span className="text-blue-600 mr-3 mt-1">🎯</span>
                                                <div>
                                                    <h5 className="font-semibold text-blue-800">20% de descuento en Declaración de Renta Anual</h5>
                                                    <p className="text-gray-700 text-sm mt-1">
                                                        Beneficio exclusivo para clientes del pack: descuento significativo en la elaboración 
                                                        y presentación de la declaración de renta del ejercicio comercial.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                                            <div className="flex items-start">
                                                <span className="text-blue-600 mr-3 mt-1">💬</span>
                                                <div>
                                                    <h5 className="font-semibold text-blue-800">Reunión virtual para aclarar dudas</h5>
                                                    <p className="text-gray-700 text-sm mt-1">
                                                        Sesión de consultoría personalizada vía videollamada para resolver dudas contables, 
                                                        tributarias y de gestión empresarial con nuestros especialistas.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                                    <h4 className="text-xl font-semibold mb-3 text-blue-800">¿Por qué elegir este pack?</h4>
                                    <p className="text-gray-700 mb-4">
                                        Ideal para empresas consolidadas que buscan mantener sus obligaciones al día con tranquilidad.
                                    </p>
                                    <div className="mb-4">
                                        <p className="text-lg font-bold text-blue-600 mb-2">CLP $99.990 (promocional)</p>
                                        <p className="text-sm text-blue-700 font-medium">Ahorro: Más de $80.000 vs servicios individuales</p>
                                        <p className="text-sm text-blue-700">Cobertura: 3 meses completos</p>
                                    </div>
                                    <button 
                                        onClick={() => handleSolicitarCotizacion('Pack Pyme Tranquila')}
                                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors"
                                    >
                                        Solicitar Pack Pyme Tranquila
                                    </button>
                                </div>
                            </div>
                        </section>

                        {/* Pack Profesional */}
                        <section id="pack-profesional" className="mb-16 p-8 bg-white rounded-lg shadow-lg border-l-4 border-green-500">
                            <div className="flex items-center mb-6">
                                <span className="text-4xl mr-4">👨‍⚕️</span>
                                <h3 className="text-3xl font-bold text-green-800">Pack Profesional</h3>
                            </div>
                            <p className="text-lg text-gray-700 mb-6">
                                Pensado para profesionales independientes. Todo lo necesario para formalizar tu actividad profesional.
                            </p>
                            <div className="grid lg:grid-cols-3 gap-6">
                                <div className="lg:col-span-2">
                                    <h4 className="text-xl font-semibold mb-4 text-gray-800">Servicios incluidos:</h4>
                                    <div className="space-y-4">
                                        <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                                            <div className="flex items-start">
                                                <span className="text-green-600 mr-3 mt-1">🆔</span>
                                                <div>
                                                    <h5 className="font-semibold text-green-800">Inicio de actividades como persona natural (segunda categoría)</h5>
                                                    <p className="text-gray-700 text-sm mt-1">
                                                        Tramitación completa ante el SII para profesionales independientes, configuración del régimen 
                                                        de segunda categoría y definición de códigos de actividad profesional.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                                            <div className="flex items-start">
                                                <span className="text-green-600 mr-3 mt-1">🔑</span>
                                                <div>
                                                    <h5 className="font-semibold text-green-800">Obtención de RUT y Clave Tributaria</h5>
                                                    <p className="text-gray-700 text-sm mt-1">
                                                        Gestión del RUT profesional y obtención de la clave tributaria personal para acceso 
                                                        a servicios online del SII y operaciones tributarias digitales.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                                            <div className="flex items-start">
                                                <span className="text-green-600 mr-3 mt-1">📄</span>
                                                <div>
                                                    <h5 className="font-semibold text-green-800">Inscripción para emisión de boletas de honorarios electrónicas</h5>
                                                    <p className="text-gray-700 text-sm mt-1">
                                                        Configuración completa del sistema de boletas electrónicas, capacitación en su uso 
                                                        y asistencia en la emisión de los primeros documentos.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                                            <div className="flex items-start">
                                                <span className="text-green-600 mr-3 mt-1">🎓</span>
                                                <div>
                                                    <h5 className="font-semibold text-green-800">Capacitación virtual sobre retenciones y pagos provisionales</h5>
                                                    <p className="text-gray-700 text-sm mt-1">
                                                        Sesión educativa online sobre obligaciones tributarias de profesionales independientes, 
                                                        cálculo de retenciones y programación de pagos provisionales mensuales.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                                            <div className="flex items-start">
                                                <span className="text-green-600 mr-3 mt-1">🎯</span>
                                                <div>
                                                    <h5 className="font-semibold text-green-800">20% de descuento en Declaración de Renta Anual</h5>
                                                    <p className="text-gray-700 text-sm mt-1">
                                                        Beneficio especial para profesionales: descuento en la elaboración de la declaración 
                                                        de renta de segunda categoría con optimización de deducciones.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                                    <h4 className="text-xl font-semibold mb-3 text-green-800">¿Por qué elegir este pack?</h4>
                                    <p className="text-gray-700 mb-4">
                                        Perfecto para médicos, abogados, ingenieros y otros profesionales que inician su práctica independiente.
                                    </p>
                                    <div className="mb-4">
                                        <p className="text-lg font-bold text-green-600 mb-2">CLP $29.990 (promocional)</p>
                                        <p className="text-sm text-green-700 font-medium">Ahorro: Más de $50.000 vs servicios individuales</p>
                                        <p className="text-sm text-green-700">Tiempo: 3-5 días hábiles</p>
                                    </div>
                                    <button 
                                        onClick={() => handleSolicitarCotizacion('Pack Profesional')}
                                        className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition-colors"
                                    >
                                        Solicitar Pack Profesional
                                    </button>
                                </div>
                            </div>
                        </section>

                        {/* Pack Renta y Cumplimiento Fiscal */}
                        <section id="pack-renta-y-cumplimiento-fiscal" className="mb-16 p-8 bg-white rounded-lg shadow-lg border-l-4 border-purple-500">
                            <div className="flex items-center mb-6">
                                <span className="text-4xl mr-4">🏦</span>
                                <h3 className="text-3xl font-bold text-purple-800">Pack Renta y Cumplimiento Fiscal</h3>
                            </div>
                            <p className="text-lg text-gray-700 mb-6">
                                Para quienes necesitan cumplir sus obligaciones tributarias sin errores. Servicio integral para el período de renta.
                            </p>
                            <div className="grid lg:grid-cols-3 gap-6">
                                <div className="lg:col-span-2">
                                    <h4 className="text-xl font-semibold mb-4 text-gray-800">Servicios incluidos:</h4>
                                    <div className="space-y-4">
                                        <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                                            <div className="flex items-start">
                                                <span className="text-purple-600 mr-3 mt-1">📋</span>
                                                <div>
                                                    <h5 className="font-semibold text-purple-800">Declaración de Renta (Formulario 22) para primera categoría</h5>
                                                    <p className="text-gray-700 text-sm mt-1">
                                                        Elaboración completa de la declaración anual de impuestos empresariales, cálculo de impuesto 
                                                        de primera categoría y optimización de la carga tributaria corporativa.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                                            <div className="flex items-start">
                                                <span className="text-purple-600 mr-3 mt-1">📊</span>
                                                <div>
                                                    <h5 className="font-semibold text-purple-800">Presentación de Declaraciones Juradas (según corresponda)</h5>
                                                    <p className="text-gray-700 text-sm mt-1">
                                                        Elaboración y presentación de todas las declaraciones juradas obligatorias: F1887, F1888, 
                                                        informes de retenciones y otras declaraciones informativas requeridas por el SII.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                                            <div className="flex items-start">
                                                <span className="text-purple-600 mr-3 mt-1">🔍</span>
                                                <div>
                                                    <h5 className="font-semibold text-purple-800">Análisis y optimización de impuestos</h5>
                                                    <p className="text-gray-700 text-sm mt-1">
                                                        Revisión exhaustiva de la situación tributaria, identificación de deducciones aplicables, 
                                                        aprovechamiento de beneficios fiscales y estrategias de optimización tributaria.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                                            <div className="flex items-start">
                                                <span className="text-purple-600 mr-3 mt-1">⚠️</span>
                                                <div>
                                                    <h5 className="font-semibold text-purple-800">Regularización de observaciones con el SII</h5>
                                                    <p className="text-gray-700 text-sm mt-1">
                                                        Gestión y resolución de observaciones, requerimientos o inconsistencias detectadas por el SII, 
                                                        incluyendo respuestas a cartas y normalización de situaciones pendientes.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                                            <div className="flex items-start">
                                                <span className="text-purple-600 mr-3 mt-1">📈</span>
                                                <div>
                                                    <h5 className="font-semibold text-purple-800">Asesoría personalizada en planificación tributaria</h5>
                                                    <p className="text-gray-700 text-sm mt-1">
                                                        Consultoría especializada para el próximo período tributario, estrategias de planificación fiscal 
                                                        y recomendaciones para optimizar la carga tributaria futura.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                                    <h4 className="text-xl font-semibold mb-3 text-purple-800">¿Por qué elegir este pack?</h4>
                                    <p className="text-gray-700 mb-4">
                                        Esencial para empresas que buscan cumplimiento total y optimización tributaria en período de renta.
                                    </p>
                                    <div className="mb-4">
                                        <p className="text-lg font-bold text-purple-600 mb-2">CLP $49.990 - $74.990</p>
                                        <p className="text-sm text-purple-700 font-medium">Según situación tributaria</p>
                                        <p className="text-sm text-purple-700">Período: Abril - Junio</p>
                                    </div>
                                    <button 
                                        onClick={() => handleSolicitarCotizacion('Pack Renta y Cumplimiento Fiscal')}
                                        className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg transition-colors"
                                    >
                                        Solicitar Pack Renta
                                    </button>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Servicios Individuales */}
                    <div className="mb-20">
                        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">🔧 Servicios Individuales</h2>
                        <p className="text-lg text-gray-600 text-center mb-12 max-w-4xl mx-auto">
                            ¿Necesitas un servicio específico? Explora nuestros servicios individuales diseñados 
                            para satisfacer necesidades particulares de tu empresa.
                        </p>

                        {/* Creación de empresa */}
                        <section id="creacion-de-empresa" className="mb-16 p-8 bg-white rounded-lg shadow-lg">
                            <h3 className="text-3xl font-bold text-blue-800 mb-6">🏢 Creación de empresa</h3>
                            <p className="text-lg text-gray-700 mb-6">
                                Formaliza tu empresa con la redacción de estatutos y la inscripción legal necesaria para operar en Chile.
                            </p>
                            <div className="grid lg:grid-cols-3 gap-6">
                                <div className="lg:col-span-2">
                                    <h4 className="text-xl font-semibold mb-4 text-gray-800">Servicios incluidos:</h4>
                                    <div className="space-y-4">
                                        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                                            <div className="flex items-start">
                                                <span className="text-blue-600 mr-3 mt-1">📝</span>
                                                <div>
                                                    <h5 className="font-semibold text-blue-800">Redacción de estatutos</h5>
                                                    <p className="text-gray-700 text-sm mt-1">
                                                        Elaboramos los estatutos sociales que definirán el funcionamiento de tu empresa, 
                                                        incluyendo objeto social, capital, administración y representación legal.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                                            <div className="flex items-start">
                                                <span className="text-blue-600 mr-3 mt-1">⚖️</span>
                                                <div>
                                                    <h5 className="font-semibold text-blue-800">Constitución legal</h5>
                                                    <p className="text-gray-700 text-sm mt-1">
                                                        Gestión completa ante notaría para la escritura pública de constitución, 
                                                        incluyendo la inscripción en el Registro de Comercio del Conservador de Bienes Raíces.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                                            <div className="flex items-start">
                                                <span className="text-blue-600 mr-3 mt-1">📰</span>
                                                <div>
                                                    <h5 className="font-semibold text-blue-800">Publicaciones y protocolización</h5>
                                                    <p className="text-gray-700 text-sm mt-1">
                                                        Realizamos la publicación en el Diario Oficial y gestionamos la protocolización 
                                                        de documentos necesarios para que tu empresa tenga existencia legal plena.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                                    <h4 className="text-xl font-semibold mb-3 text-blue-800">¿Por qué elegir este servicio?</h4>
                                    <p className="text-gray-700 mb-4">
                                        Te acompañamos en todo el proceso de constitución legal de tu empresa, 
                                        asegurando el cumplimiento de todas las normativas vigentes.
                                    </p>
                                    <div className="mb-4">
                                        <p className="text-sm text-blue-700 font-medium">Tiempo estimado: 5-7 días hábiles</p>
                                        <p className="text-sm text-blue-700">Incluye asesoría personalizada</p>
                                    </div>
                                    <button 
                                        onClick={() => handleSolicitarCotizacion('Creación de empresa')}
                                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors"
                                    >
                                        Solicitar cotización
                                    </button>
                                </div>
                            </div>
                        </section>

                        {/* Inicio de Actividades */}
                        <section id="inicio-de-actividades" className="mb-16 p-8 bg-white rounded-lg shadow-lg">
                            <h3 className="text-3xl font-bold text-green-800 mb-6">🚀 Inicio de Actividades</h3>
                            <p className="text-lg text-gray-700 mb-6">
                                Gestiona los trámites iniciales para operar legalmente ante el Servicio de Impuestos Internos.
                            </p>
                            <div className="grid lg:grid-cols-3 gap-6">
                                <div className="lg:col-span-2">
                                    <h4 className="text-xl font-semibold mb-4 text-gray-800">Servicios incluidos:</h4>
                                    <div className="space-y-4">
                                        <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                                            <div className="flex items-start">
                                                <span className="text-green-600 mr-3 mt-1">🆔</span>
                                                <div>
                                                    <h5 className="font-semibold text-green-800">Obtención de RUT</h5>
                                                    <p className="text-gray-700 text-sm mt-1">
                                                        Tramitación del Rol Único Tributario (RUT) empresarial ante el SII, 
                                                        documento fundamental para todas las operaciones comerciales y tributarias de tu empresa.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                                            <div className="flex items-start">
                                                <span className="text-green-600 mr-3 mt-1">🏪</span>
                                                <div>
                                                    <h5 className="font-semibold text-green-800">Inicio de actividades comerciales</h5>
                                                    <p className="text-gray-700 text-sm mt-1">
                                                        Declaración formal ante el SII del inicio de actividades económicas, 
                                                        definiendo códigos de actividad, ubicación de la empresa y modalidad de operación.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                                            <div className="flex items-start">
                                                <span className="text-green-600 mr-3 mt-1">📊</span>
                                                <div>
                                                    <h5 className="font-semibold text-green-800">Definición de régimen tributario</h5>
                                                    <p className="text-gray-700 text-sm mt-1">
                                                        Asesoría para elegir el régimen tributario más conveniente (ProPyme, 14 A, 14 B, etc.), 
                                                        considerando el giro y proyecciones de ingresos de tu empresa.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                                    <h4 className="text-xl font-semibold mb-3 text-green-800">¿Por qué elegir este servicio?</h4>
                                    <p className="text-gray-700 mb-4">
                                        Facilitamos todos los trámites ante el SII para que puedas comenzar 
                                        a operar sin complicaciones desde el primer día.
                                    </p>
                                    <div className="mb-4">
                                        <p className="text-sm text-green-700 font-medium">Tiempo estimado: 2-3 días hábiles</p>
                                        <p className="text-sm text-green-700">Incluye clave tributaria</p>
                                    </div>
                                    <button 
                                        onClick={() => handleSolicitarCotizacion('Inicio de Actividades')}
                                        className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition-colors"
                                    >
                                        Solicitar cotización
                                    </button>
                                </div>
                            </div>
                        </section>

                        {/* Declaración de Formulario 29 (IVA) */}
                        <section id="declaracion-de-formulario-29-iva" className="mb-16 p-8 bg-white rounded-lg shadow-lg">
                            <h3 className="text-3xl font-bold text-orange-800 mb-6">📊 Declaración de Formulario 29 (IVA)</h3>
                            <p className="text-lg text-gray-700 mb-6">
                                Cumple mensualmente con todas las obligaciones tributarias ante el SII de forma precisa y oportuna.
                            </p>
                            <div className="grid lg:grid-cols-3 gap-6">
                                <div className="lg:col-span-2">
                                    <h4 className="text-xl font-semibold mb-4 text-gray-800">Servicios incluidos:</h4>
                                    <div className="space-y-4">
                                        <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                                            <div className="flex items-start">
                                                <span className="text-orange-600 mr-3 mt-1">🧮</span>
                                                <div>
                                                    <h5 className="font-semibold text-orange-800">Cálculo y declaración del IVA</h5>
                                                    <p className="text-gray-700 text-sm mt-1">
                                                        Determinación del IVA débito fiscal (ventas) e IVA crédito fiscal (compras), 
                                                        cálculo del impuesto a pagar o saldo a favor, y presentación oportuna del F29.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                                            <div className="flex items-start">
                                                <span className="text-orange-600 mr-3 mt-1">💰</span>
                                                <div>
                                                    <h5 className="font-semibold text-orange-800">Retenciones de impuestos</h5>
                                                    <p className="text-gray-700 text-sm mt-1">
                                                        Cálculo y declaración de retenciones efectuadas por honorarios, arrendamientos, 
                                                        servicios, y otras operaciones sujetas a retención según la normativa vigente.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                                            <div className="flex items-start">
                                                <span className="text-orange-600 mr-3 mt-1">📅</span>
                                                <div>
                                                    <h5 className="font-semibold text-orange-800">Pago de impuestos mensuales</h5>
                                                    <p className="text-gray-700 text-sm mt-1">
                                                        Gestión de pagos provisionales mensuales (PPM), impuesto único de segunda categoría, 
                                                        y otros tributos mensuales dentro de los plazos legales establecidos.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
                                    <h4 className="text-xl font-semibold mb-3 text-orange-800">¿Por qué elegir este servicio?</h4>
                                    <p className="text-gray-700 mb-4">
                                        Mantenemos tu empresa al día con todas las obligaciones tributarias mensuales, 
                                        evitando multas y sanciones.
                                    </p>
                                    <div className="mb-4">
                                        <p className="text-sm text-orange-700 font-medium">Servicio mensual recurrente</p>
                                        <p className="text-sm text-orange-700">Evita multas por atraso</p>
                                    </div>
                                    <button 
                                        onClick={() => handleSolicitarCotizacion('Declaración de Formulario 29 (IVA)')}
                                        className="w-full bg-orange-600 hover:bg-orange-700 text-white py-2 px-4 rounded-lg transition-colors"
                                    >
                                        Solicitar cotización
                                    </button>
                                </div>
                            </div>
                        </section>

                        {/* Declaraciones Juradas */}
                        <section id="declaraciones-juradas" className="mb-16 p-8 bg-white rounded-lg shadow-lg">
                            <h3 className="text-3xl font-bold text-purple-800 mb-6">📋 Declaraciones Juradas</h3>
                            <p className="text-lg text-gray-700 mb-6">
                                Cumple con todas las declaraciones informativas exigidas por el SII según tu actividad empresarial.
                            </p>
                            <div className="grid lg:grid-cols-3 gap-6">
                                <div className="lg:col-span-2">
                                    <h4 className="text-xl font-semibold mb-4 text-gray-800">Servicios incluidos:</h4>
                                    <div className="space-y-4">
                                        <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                                            <div className="flex items-start">
                                                <span className="text-purple-600 mr-3 mt-1">📈</span>
                                                <div>
                                                    <h5 className="font-semibold text-purple-800">Declaración de ingresos y retenciones</h5>
                                                    <p className="text-gray-700 text-sm mt-1">
                                                        Declaración Jurada de ingresos brutos anuales, retenciones efectuadas a terceros, 
                                                        y operaciones con entidades relacionadas según los formularios 1887, 1888 y similares.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                                            <div className="flex items-start">
                                                <span className="text-purple-600 mr-3 mt-1">🛒</span>
                                                <div>
                                                    <h5 className="font-semibold text-purple-800">Declaración de compras y ventas</h5>
                                                    <p className="text-gray-700 text-sm mt-1">
                                                        Informes detallados de operaciones de compra y venta según exigencias del SII, 
                                                        incluyendo libro de compras y ventas digitales con documentos electrónicos.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                                            <div className="flex items-start">
                                                <span className="text-purple-600 mr-3 mt-1">💼</span>
                                                <div>
                                                    <h5 className="font-semibold text-purple-800">Informes de inversión y movimientos financieros</h5>
                                                    <p className="text-gray-700 text-sm mt-1">
                                                        Declaraciones de inversiones en el extranjero, operaciones de capitales extranjeros, 
                                                        y otros informes financieros requeridos según la actividad y volumen de operaciones.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                                    <h4 className="text-xl font-semibold mb-3 text-purple-800">¿Por qué elegir este servicio?</h4>
                                    <p className="text-gray-700 mb-4">
                                        Aseguramos el cumplimiento de todas las declaraciones obligatorias 
                                        con precisión y dentro de los plazos establecidos.
                                    </p>
                                    <div className="mb-4">
                                        <p className="text-sm text-purple-700 font-medium">Según calendario SII</p>
                                        <p className="text-sm text-purple-700">Evita sanciones por incumplimiento</p>
                                    </div>
                                    <button 
                                        onClick={() => handleSolicitarCotizacion('Declaraciones Juradas')}
                                        className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg transition-colors"
                                    >
                                        Solicitar cotización
                                    </button>
                                </div>
                            </div>
                        </section>

                        {/* Declaración Renta Segunda Categoría */}
                        <section id="declaracion-renta-segunda-categoria" className="mb-16 p-8 bg-white rounded-lg shadow-lg">
                            <h3 className="text-3xl font-bold text-indigo-800 mb-6">💼 Declaración Renta Segunda Categoría</h3>
                            <p className="text-lg text-gray-700 mb-6">
                                Optimiza tu declaración anual de renta personal maximizando deducciones y beneficios tributarios.
                            </p>
                            <div className="grid lg:grid-cols-3 gap-6">
                                <div className="lg:col-span-2">
                                    <h4 className="text-xl font-semibold mb-4 text-gray-800">Servicios incluidos:</h4>
                                    <div className="space-y-4">
                                        <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-500">
                                            <div className="flex items-start">
                                                <span className="text-indigo-600 mr-3 mt-1">📊</span>
                                                <div>
                                                    <h5 className="font-semibold text-indigo-800">Determinación de rentas imponibles</h5>
                                                    <p className="text-gray-700 text-sm mt-1">
                                                        Cálculo preciso de todas las rentas de segunda categoría: sueldos, honorarios, 
                                                        pensiones, y otros ingresos gravados, aplicando las exenciones correspondientes.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-500">
                                            <div className="flex items-start">
                                                <span className="text-indigo-600 mr-3 mt-1">🎯</span>
                                                <div>
                                                    <h5 className="font-semibold text-indigo-800">Aplicación de beneficios y exenciones</h5>
                                                    <p className="text-gray-700 text-sm mt-1">
                                                        Aprovechamiento máximo de deducciones legales: créditos por gastos en educación, 
                                                        salud, donaciones, dividendos, y todos los beneficios tributarios disponibles.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-500">
                                            <div className="flex items-start">
                                                <span className="text-indigo-600 mr-3 mt-1">📄</span>
                                                <div>
                                                    <h5 className="font-semibold text-indigo-800">Presentación de declaración anual</h5>
                                                    <p className="text-gray-700 text-sm mt-1">
                                                        Elaboración y presentación de la declaración anual de renta (formulario 22), 
                                                        incluyendo gestión de devoluciones o pago de diferencias dentro de plazo.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-200">
                                    <h4 className="text-xl font-semibold mb-3 text-indigo-800">¿Por qué elegir este servicio?</h4>
                                    <p className="text-gray-700 mb-4">
                                        Optimizamos tu declaración de renta aprovechando todas las 
                                        deducciones y beneficios fiscales disponibles.
                                    </p>
                                    <div className="mb-4">
                                        <p className="text-sm text-indigo-700 font-medium">Periodo: Abril - Junio</p>
                                        <p className="text-sm text-indigo-700">Maximiza tu devolución</p>
                                    </div>
                                    <button 
                                        onClick={() => handleSolicitarCotizacion('Declaración Renta Segunda Categoría')}
                                        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg transition-colors"
                                    >
                                        Solicitar cotización
                                    </button>
                                </div>
                            </div>
                        </section>

                        {/* Contabilidad bajo normas PCGA */}
                        <section id="contabilidad-bajo-normas-pcga" className="mb-16 p-8 bg-white rounded-lg shadow-lg">
                            <h3 className="text-3xl font-bold text-teal-800 mb-6">📚 Contabilidad bajo normas PCGA</h3>
                            <p className="text-lg text-gray-700 mb-6">
                                Mantén registros contables completos y actualizados conforme a Principios de Contabilidad Generalmente Aceptados.
                            </p>
                            <div className="grid lg:grid-cols-3 gap-6">
                                <div className="lg:col-span-2">
                                    <h4 className="text-xl font-semibold mb-4 text-gray-800">Servicios incluidos:</h4>
                                    <div className="space-y-4">
                                        <div className="bg-teal-50 p-4 rounded-lg border-l-4 border-teal-500">
                                            <div className="flex items-start">
                                                <span className="text-teal-600 mr-3 mt-1">📝</span>
                                                <div>
                                                    <h5 className="font-semibold text-teal-800">Registro y control de operaciones</h5>
                                                    <p className="text-gray-700 text-sm mt-1">
                                                        Registro diario de todas las transacciones comerciales en libros contables: 
                                                        libro diario, mayor, inventarios y balances, manteniendo la documentación respaldatoria.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="bg-teal-50 p-4 rounded-lg border-l-4 border-teal-500">
                                            <div className="flex items-start">
                                                <span className="text-teal-600 mr-3 mt-1">📊</span>
                                                <div>
                                                    <h5 className="font-semibold text-teal-800">Elaboración de estados financieros</h5>
                                                    <p className="text-gray-700 text-sm mt-1">
                                                        Preparación mensual y anual de estados financieros: Balance General, 
                                                        Estado de Resultados, Estado de Flujo de Efectivo y notas explicativas.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="bg-teal-50 p-4 rounded-lg border-l-4 border-teal-500">
                                            <div className="flex items-start">
                                                <span className="text-teal-600 mr-3 mt-1">✅</span>
                                                <div>
                                                    <h5 className="font-semibold text-teal-800">Cumplimiento normativo y auditoría</h5>
                                                    <p className="text-gray-700 text-sm mt-1">
                                                        Aseguramos el cumplimiento de normas contables y tributarias, 
                                                        preparación para auditorías externas y apoyo en fiscalizaciones del SII.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-teal-50 p-6 rounded-lg border border-teal-200">
                                    <h4 className="text-xl font-semibold mb-3 text-teal-800">¿Por qué elegir este servicio?</h4>
                                    <p className="text-gray-700 mb-4">
                                        Mantenemos registros contables precisos y actualizados conforme 
                                        a las normativas vigentes para una gestión financiera eficiente.
                                    </p>
                                    <div className="mb-4">
                                        <p className="text-sm text-teal-700 font-medium">Servicio integral mensual</p>
                                        <p className="text-sm text-teal-700">Informes ejecutivos incluidos</p>
                                    </div>
                                    <button 
                                        onClick={() => handleSolicitarCotizacion('Contabilidad bajo normas PCGA')}
                                        className="w-full bg-teal-600 hover:bg-teal-700 text-white py-2 px-4 rounded-lg transition-colors"
                                    >
                                        Solicitar cotización
                                    </button>
                                </div>
                            </div>
                        </section>

                    </div>

                    {/* Sección de contacto */}
                    <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg shadow-lg text-center">
                        <h2 className="text-3xl font-bold mb-4">¿Necesitas más información?</h2>
                        <p className="text-lg mb-6">
                            Contáctanos para recibir una asesoría personalizada y una cotización ajustada a tus necesidades.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button 
                                onClick={() => setModalOpen(true)}
                                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                            >
                                📞 Solicitar asesoría
                            </button>
                            <button 
                                onClick={() => setModalOpen(true)}
                                className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                            >
                                ✉️ Enviar consulta
                            </button>
                        </div>
                    </section>
                </div>
            </div>

            {/* Modal de contacto - ACTUALIZAR ESTAS PROPS */}
            <ContactModal 
                isOpen={modalOpen}
                onClose={handleCloseModal}
                serviceName={selectedService}
                packName={selectedPack}
            />
        </>
    );
};

export default ServiciosPage;



