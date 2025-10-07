import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import imgcontact from '../assets/img/img-contact.jpg';

const Contacto = () => {
  // Estado para manejar los datos del formulario
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    desc: ''
  });

  // Estado para el botón de envío
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Estado para mostrar mensaje de éxito
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  // Manejar cambios en los inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Manejar envío del formulario con EmailJS
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Configuración de EmailJS - PARÁMETROS ACTUALIZADOS
    const serviceID = 'service_i23f6pu';
    const templateID = 'template_cx7tkoc';
    const publicKey = 'diVD480gsK4wCyPBO';

    // Inicializar EmailJS
    emailjs.init(publicKey);

    // Preparar datos para EmailJS
    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone || 'No proporcionado',
      desc: formData.desc,
      current_date: new Date().toLocaleString('es-CL', {
        timeZone: 'America/Santiago',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    };

    emailjs.send(serviceID, templateID, templateParams)
      .then(() => {
        setIsSubmitting(false);
        setShowSuccessMessage(true);
        
        // Limpiar formulario
        setFormData({
          name: '',
          email: '',
          phone: '',
          desc: ''
        });

        // Ocultar mensaje después de 5 segundos
        setTimeout(() => {
          setShowSuccessMessage(false);
        }, 5000);
      })
      .catch((error) => {
        setIsSubmitting(false);
        alert('Error al enviar mensaje. Por favor, intente nuevamente.');
        console.error('EmailJS error:', error);
      });
  };

  return (
    <section className='min-h-screen flex justify-center bg-cover bg-center'
    style={{backgroundImage:`url(${imgcontact})`}}>

        <div className='flex-col md:flex-row w-full bg-black/80 border border-blue-400/30 backdrop-blur-sm min-h-screen h-auto flex justify-around'>
            {/* Información de contacto */}
            <div className="flex justify-center md:mt-16 min-w-[280px] md:max-w-sm w-full mb-8 md:mb-0">
                <ul className="list-none space-y-5">
                    <li>
                        <h1 className="text-white text-4xl md:text-5xl font-bold mb-5 mt-10 md:-mt-2">¡Contáctanos!</h1>
                        <div className="border-t border-blue-400 my-2 w-full" />
                    </li>
                    <li className="text-2xl md:text-2xl text-white break-all text-center">contacto@fiscalizate.cl</li>
                    <div className="border-t border-blue-400 my-2 w-full" />
                    <li className="text-2xl md:text-2xl text-white text-center">+569 00000000</li>
                    <div className="border-t border-blue-400 my-2 w-auto" />
                    <li className="text-2xl md:text-2xl text-center text-white">
                        Lunes a Viernes<br />
                        de 09:00 a 18:00 Horas.
                    </li>
                </ul>
            </div>
                
            {/* Formulario simplificado */}
            <div className='p-5'>
                <form
                    id="form"
                    method="POST"
                    className="mx-auto mt-5 p-6 rounded-lg shadow-lg bg-[rgba(8,21,56,0.85)] backdrop-blur-md max-w-md w-full"
                    onSubmit={handleSubmit}
                >
                    <h1 className="text-center text-white text-2xl font-semibold mb-6">Contacto</h1>

                    {/* Mensaje de éxito */}
                    {showSuccessMessage && (
                        <div className="mb-6 p-4 bg-green-500/20 border border-green-400 rounded-lg backdrop-blur-sm">
                            <div className="flex items-center">
                                <div className="flex-shrink-0">
                                    <svg className="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div className="ml-3">
                                    <h3 className="text-sm font-medium text-green-300">
                                        ¡Mensaje enviado exitosamente!
                                    </h3>
                                    <p className="text-sm text-green-200 mt-1">
                                        Serás contactado a la brevedad. Nuestro equipo se comunicará contigo dentro de las próximas 24 horas.
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Nombre y Apellido */}
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-white mb-2 font-medium">
                            Nombre y Apellido:
                        </label>
                        <input
                            name="name"
                            type="text"
                            id="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            placeholder="Su Nombre*"
                            className="text-black block w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none bg-white/90 placeholder-gray-500"
                        />
                    </div>

                    {/* Correo de Contacto */}
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-white mb-2 font-medium">
                            Correo de Contacto:
                        </label>
                        <input
                            name="email"
                            type="email"
                            id="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            placeholder="Su Email*"
                            className="text-black block w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none bg-white/90 placeholder-gray-500"
                        />
                    </div>

                    {/* Teléfono */}
                    <div className="mb-4">
                        <label htmlFor="phone" className="block text-white mb-2 font-medium">
                            Teléfono:
                        </label>
                        <input
                            name="phone"
                            type="tel"
                            id="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="Su número de teléfono*"
                            className="text-black block w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none bg-white/90 placeholder-gray-500"
                        />
                    </div>

                    {/* Mensaje */}
                    <div className="mb-6">
                        <label htmlFor="desc" className="block text-white mb-2 font-medium">
                            Mensaje:
                        </label>
                        <textarea
                            name="desc"
                            id="desc"
                            value={formData.desc}
                            onChange={handleInputChange}
                            required
                            rows={5}
                            placeholder="Dudas o consultas..."
                            className="text-black block w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none bg-white/90 resize-none placeholder-gray-500"
                        />
                    </div>

                    {/* Botón de envío */}
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`w-full py-3 px-6 rounded-lg font-semibold text-white transition-all duration-200 ${
                                isSubmitting 
                                    ? 'bg-gray-600 cursor-not-allowed' 
                                    : 'bg-green-600 hover:bg-green-700 active:scale-95'
                            }`}
                        >
                            {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Contacto;