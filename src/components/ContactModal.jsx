import React, { useState, useEffect } from 'react';
import { X, Plus, Minus, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { servicios, packs } from '../constants';

const ContactModal = ({ isOpen, onClose, serviceName = '', packName = '' }) => {
    const navigate = useNavigate();
    
    const initialFormData = {
        name: '',
        email: '',
        phone: '',
        serviciosSeleccionados: [],
        packsSeleccionados: [],
        desc: ''
    };

    const [formData, setFormData] = useState(initialFormData);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    // Crear el mapeo de subservicios desde las constantes
    const subServicios = {};
    servicios.forEach(servicio => {
        subServicios[servicio.nombre] = servicio.subservicios;
    });

    // Función para generar descripción automática
    const generateDescription = () => {
        // Si no hay nada seleccionado, retornar descripción básica
        if (formData.packsSeleccionados.length === 0 && formData.serviciosSeleccionados.length === 0) {
            return 'Estoy interesado en obtener más información sobre sus servicios. Por favor, envíenme una cotización personalizada.';
        }

        let desc = 'Estoy interesado en los siguientes servicios:\n\n';
        
        // Agregar packs seleccionados
        if (formData.packsSeleccionados.length > 0) {
            desc += '📦 PACKS SELECCIONADOS:\n';
            formData.packsSeleccionados.forEach(packName => {
                const pack = packs.find(p => p.nombre === packName);
                desc += `• ${packName}\n`;
                if (pack) {
                    desc += `  Incluye: ${pack.beneficios.slice(0, 2).join(', ')}...\n`;
                }
            });
            desc += '\n';
        }

        // Agregar servicios individuales
        if (formData.serviciosSeleccionados.length > 0) {
            desc += '🔧 SERVICIOS INDIVIDUALES:\n';
            formData.serviciosSeleccionados.forEach(item => {
                desc += `• ${item.servicio}\n`;
                if (item.subservicios.length > 0) {
                    desc += `  Específicamente: ${item.subservicios.join(', ')}\n`;
                }
            });
            desc += '\n';
        }
        
        desc += 'Por favor, envíenme más información y una cotización personalizada.';
        return desc;
    };

    // Resetear formulario cuando se abre/cierra el modal
    useEffect(() => {
        if (isOpen) {
            // Al abrir: resetear y configurar con datos preseleccionados
            setFormData(initialFormData);
            setShowSuccessModal(false);
            
            // Preseleccionar servicio o pack si viene como parámetro
            setTimeout(() => {
                if (serviceName && !packName) {
                    handleServicioSelection(serviceName, true);
                }
                if (packName && !serviceName) {
                    handlePackSelection(packName, true);
                }
            }, 100);
        } else {
            // Al cerrar: resetear completamente
            setFormData(initialFormData);
            setIsSubmitting(false);
            setShowSuccessModal(false);
        }
    }, [isOpen, serviceName, packName]);

    // Manejar selección de packs
    const handlePackSelection = (packName, isSelected) => {
        setFormData(prev => ({
            ...prev,
            packsSeleccionados: isSelected 
                ? [...prev.packsSeleccionados, packName]
                : prev.packsSeleccionados.filter(p => p !== packName)
        }));
    };

    // Manejar selección de servicios
    const handleServicioSelection = (servicioName, isSelected) => {
        setFormData(prev => {
            const serviciosActualizados = isSelected
                ? [...prev.serviciosSeleccionados, { servicio: servicioName, subservicios: [] }]
                : prev.serviciosSeleccionados.filter(s => s.servicio !== servicioName);
            
            return {
                ...prev,
                serviciosSeleccionados: serviciosActualizados
            };
        });
    };

    // Manejar selección de subservicios
    const handleSubservicioSelection = (servicioName, subservicioName, isSelected) => {
        setFormData(prev => ({
            ...prev,
            serviciosSeleccionados: prev.serviciosSeleccionados.map(item => {
                if (item.servicio === servicioName) {
                    return {
                        ...item,
                        subservicios: isSelected
                            ? [...item.subservicios, subservicioName]
                            : item.subservicios.filter(sub => sub !== subservicioName)
                    };
                }
                return item;
            })
        }));
    };

    // Actualizar descripción cuando cambian las selecciones
    useEffect(() => {
        const nuevaDesc = generateDescription();
        setFormData(prev => ({ ...prev, desc: nuevaDesc }));
    }, [formData.serviciosSeleccionados, formData.packsSeleccionados]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Configuración de EmailJS
        const serviceID = 'default_service';
        const templateID = 'template_ltvn51p';
        const publicKey = 'diVD480gsK4wCyPBO';

        emailjs.init(publicKey);

        // Preparar datos para EmailJS
        const templateParams = {
            name: formData.name,
            email: formData.email,
            phone: formData.phone || 'No proporcionado',
            packsSeleccionados: formData.packsSeleccionados.join(', ') || 'Ninguno',
            serviciosSeleccionados: formData.serviciosSeleccionados.map(s => 
                `${s.servicio}${s.subservicios.length ? ' (Subservicios: ' + s.subservicios.join(', ') + ')' : ''}`
            ).join('; ') || 'Ninguno',
            desc: formData.desc
        };

        emailjs.send(serviceID, templateID, templateParams)
            .then(() => {
                setIsSubmitting(false);
                
                // Resetear formulario
                setFormData(initialFormData);
                
                // Cerrar modal
                onClose();
                
                // Redirigir a la página de confirmación
                navigate('/seras-contactado');
            })
            .catch((error) => {
                setIsSubmitting(false);
                alert('Error al enviar email: ' + JSON.stringify(error));
                console.error('EmailJS error:', error);
            });
    };

    // Función para cerrar modal y resetear
    const handleClose = () => {
        setFormData(initialFormData);
        setIsSubmitting(false);
        setShowSuccessModal(false);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
            <div className="bg-[rgba(8,21,56,0.9)] backdrop-blur-md rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-blue-400/30">
                {/* Header */}
                <div className="flex justify-between items-center p-6 border-b border-blue-400/30">
                    <h2 className="text-2xl font-bold text-white">Solicitar Cotización Personalizada</h2>
                    <button onClick={handleClose} className="text-gray-300 hover:text-white transition-colors">
                        <X size={24} />
                    </button>
                </div>
                
                {/* Form */}
                <form onSubmit={handleSubmit} className="p-6 space-y-6">
                    {/* Datos personales */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                            <label htmlFor="name" className="block text-white mb-1 font-medium">Nombre *</label>
                            <input 
                                type="text" 
                                id="name" 
                                value={formData.name}
                                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                                required
                                className="text-black block w-full px-3 py-2 rounded border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none bg-white/90"
                                placeholder="Tu nombre completo"
                            />
                        </div>
                        
                        <div>
                            <label htmlFor="email" className="block text-white mb-1 font-medium">Email *</label>
                            <input 
                                type="email" 
                                id="email"
                                value={formData.email}
                                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                                required
                                className="text-black block w-full px-3 py-2 rounded border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none bg-white/90"
                                placeholder="tu@email.com"
                            />
                        </div>

                        <div>
                            <label htmlFor="phone" className="block text-white mb-1 font-medium">Teléfono</label>
                            <input 
                                type="tel" 
                                id="phone"
                                value={formData.phone}
                                onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                                className="text-black block w-full px-3 py-2 rounded border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none bg-white/90"
                                placeholder="+56 9 1234 5678"
                            />
                        </div>
                    </div>

                    {/* Packs disponibles */}
                    <div>
                        <h3 className="text-white text-lg font-semibold mb-3">📦 Packs Promocionales</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {packs.map((pack) => (
                                <div key={pack.nombre} className={`p-3 rounded-lg border transition-all ${
                                    formData.packsSeleccionados.includes(pack.nombre)
                                        ? 'bg-blue-500/20 border-blue-400'
                                        : 'bg-white/10 border-blue-400/30'
                                }`}>
                                    <label className="flex items-start space-x-3 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            checked={formData.packsSeleccionados.includes(pack.nombre)}
                                            onChange={(e) => handlePackSelection(pack.nombre, e.target.checked)}
                                            className="mt-1"
                                        />
                                        <div>
                                            <span className="text-white font-medium">{pack.nombre}</span>
                                            <p className="text-gray-300 text-sm">{pack.descripcion}</p>
                                            <p className="text-blue-200 text-sm font-semibold">{pack.precio}</p>
                                        </div>
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Servicios individuales */}
                    <div>
                        <h3 className="text-white text-lg font-semibold mb-3">🔧 Servicios Individuales</h3>
                        <div className="space-y-3">
                            {servicios.map((servicio) => {
                                const isSelected = formData.serviciosSeleccionados.some(s => s.servicio === servicio.nombre);
                                const selectedService = formData.serviciosSeleccionados.find(s => s.servicio === servicio.nombre);
                                
                                return (
                                    <div key={servicio.nombre} className={`p-4 rounded-lg border transition-all ${
                                        isSelected
                                            ? 'bg-blue-500/20 border-blue-400'
                                            : 'bg-white/10 border-blue-400/30'
                                    }`}>
                                        <label className="flex items-start space-x-3 cursor-pointer">
                                            <input
                                                type="checkbox"
                                                checked={isSelected}
                                                onChange={(e) => handleServicioSelection(servicio.nombre, e.target.checked)}
                                                className="mt-1"
                                            />
                                            <div className="flex-1">
                                                <span className="text-white font-medium">{servicio.nombre}</span>
                                                <p className="text-gray-300 text-sm">{servicio.descripcion}</p>
                                            </div>
                                        </label>
                                        
                                        {/* Subservicios */}
                                        {isSelected && (
                                            <div className="mt-3 ml-6 space-y-2">
                                                <p className="text-blue-200 text-sm font-medium">Selecciona aspectos específicos:</p>
                                                {servicio.subservicios.map((subservicio) => (
                                                    <label key={subservicio} className="flex items-center space-x-2 cursor-pointer">
                                                        <input
                                                            type="checkbox"
                                                            checked={selectedService?.subservicios.includes(subservicio) || false}
                                                            onChange={(e) => handleSubservicioSelection(servicio.nombre, subservicio, e.target.checked)}
                                                            className="text-blue-600"
                                                        />
                                                        <span className="text-gray-300 text-sm">{subservicio}</span>
                                                    </label>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Descripción generada */}
                    <div>
                        <label htmlFor="desc" className="block text-white mb-1 font-medium">
                            Resumen de tu solicitud *
                        </label>
                        <textarea 
                            id="desc"
                            value={formData.desc}
                            onChange={(e) => setFormData(prev => ({ ...prev, desc: e.target.value }))}
                            required 
                            rows={8}
                            className="text-black block w-full px-3 py-2 rounded border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none bg-white/90 resize-none"
                            placeholder="Esta descripción se genera automáticamente según tus selecciones..."
                        />
                        <p className="text-blue-200 text-xs mt-1">
                            * Se actualiza automáticamente, pero puedes editarla si necesitas agregar detalles específicos
                        </p>
                    </div>
                    
                    {/* Botones */}
                    <div className="flex gap-3 pt-4">
                        <button 
                            type="button" 
                            onClick={handleClose}
                            className="flex-1 px-4 py-2 border border-gray-400 text-gray-300 rounded-lg hover:bg-gray-700/50 transition-colors"
                        >
                            Cancelar
                        </button>
                        <button 
                            type="submit" 
                            disabled={isSubmitting}
                            className={`flex-1 px-4 py-2 rounded-lg font-semibold transition-colors ${
                                isSubmitting 
                                    ? 'bg-gray-600 cursor-not-allowed text-gray-300' 
                                    : 'bg-blue-700 hover:bg-blue-800 text-white'
                            }`}
                        >
                            {isSubmitting ? 'Enviando...' : 'Enviar cotización personalizada'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactModal;