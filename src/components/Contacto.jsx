import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import imgcontact from '../assets/img/img-contact.jpg';

const Contacto = () => {
  // Estado para manejar los datos del formulario
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    servicio: '',
    subServicio: '',
    desc: ''
  });

  // Estado para el botón de envío
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Definición de subservicios por cada servicio
  const subServicios = {
    "Creacion de empresa": ["CDE1", "CDE2", "CDE3"],
    "Inicio de Actividades": ["IDA1", "IDA2", "IDA3"],
    "Declaracion de formulario 29 (IVA)": ["DDF1", "DDF2", "DDF3"],
    "Declaraciones Juradas": ["DJ1", "DJ2", "DJ3"],
    "Declaración Renta Segunda Categoria": ["DRS1", "DRS2", "DRS3"],
    "Contabilidad bajo normas PCGA": ["CBN1", "CBN2", "CBN3"],
  };

  // Estado para los subservicios disponibles
  const [subServiciosDisponibles, setSubServiciosDisponibles] = useState([]);

  // Manejar cambios en los inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Si cambia el servicio, actualizar los subservicios disponibles
    if (name === 'servicio') {
      const subserviciosParaServicio = subServicios[value] || [];
      setSubServiciosDisponibles(subserviciosParaServicio);
      // Limpiar el subservicio seleccionado cuando cambia el servicio
      setFormData(prev => ({
        ...prev,
        subServicio: ''
      }));
    }
  };

  // Manejar envío del formulario con EmailJS
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Configuración de EmailJS
    const serviceID = 'default_service';
    const templateID = 'template_ltvn51p';
    const publicKey = 'diVD480gsK4wCyPBO';

    // Inicializar EmailJS
    emailjs.init(publicKey);

    // Enviar el formulario
    emailjs.sendForm(serviceID, templateID, e.target)
      .then(() => {
        setIsSubmitting(false);
        alert('¡Email enviado exitosamente!');
        // Limpiar formulario
        setFormData({
          name: '',
          email: '',
          servicio: '',
          subServicio: '',
          desc: ''
        });
        setSubServiciosDisponibles([]);
      })
      .catch((error) => {
        setIsSubmitting(false);
        alert('Error al enviar email: ' + JSON.stringify(error));
        console.error('EmailJS error:', error);
      });
  };

  return (
    <section className='min-h-screen flex justify-center bg-cover bg-center'
    style={{backgroundImage:`url(${imgcontact})`}}>

        <div className=' flex-col md:flex-row w-full bg-black/80 border border-blue-400/30  backdrop-blur-sm min-h-screen h-auto flex justify-around'>
            <div className="flex justify-center md:mt-16 min-w-[280px] md:max-w-sm w-full mb-8 md:mb-0">
                <ul className="list-none space-y-5">
                <li>
                    <h1 className="text-white text-4xl md:text-5xl font-bold mb-5 mt-10 md:-mt-2">¡Contáctanos!</h1>
                    <div className="border-t border-blue-400 my-2 w-full" />
                </li>
                <li className=" text-2xl md:text-2xl text-white break-all text-center">contacto@fiscalizate.cl</li>
                <div className="border-t border-blue-400 my-2 w-full" />
                <li className="text-2xl md:text-2xl text-white text-center">+569 00000000</li>
                <div className="border-t border-blue-400 my-2 w-auto" />
                <li className=" text-2xl md:text-2xl text-center text-white">
                    Lunes a Viernes<br />
                    de 09:00 a 18:00 Horas.
                </li>
                </ul>
            </div>
                
            <div className=' p-5'>
                <form
                id="form"
                method="POST"
                className="mx-auto mt-5 p-5 rounded-lg shadow-sm bg-[rgba(8,21,56,0.7)] backdrop-blur-md max-w-md w-full"
                onSubmit={handleSubmit}
                >
                <h1 className="text-center text-white text-2xl font-semibold mb-4">Contacto</h1>

                <div className="mb-3">
                    <label htmlFor="name" className="block text-white mb-1">Nombre</label>
                    <input
                    name="name"
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className=" text-black block w-[95%] mx-auto px-3 py-2 rounded border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none bg-white/80"
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="email" className="block text-white mb-1">Email</label>
                    <input
                    name="email"
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="text-black block w-[95%] mx-auto px-3 py-2 rounded border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none bg-white/80"
                    />
                </div>

                <div className="mb-3 ">
                    <label htmlFor="servicio" className="block text-white mb-1">Servicio</label>
                    <select
                    id="servicio"
                    name="servicio"
                    value={formData.servicio}
                    onChange={handleInputChange}
                    className=" text-black block w-[95%] mx-auto px-3 py-2 rounded border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none bg-white/80"
                    >
                    <option value="" disabled>Seleccione servicio</option>
                    <option value="Creacion de empresa">Creacion de empresa</option>
                    <option value="Inicio de Actividades">Inicio de Actividades</option>
                    <option value="Declaracion de formulario 29 (IVA)">Declaracion de formulario 29 (IVA)</option>
                    <option value="Declaraciones Juradas">Declaraciones Juradas</option>
                    <option value="Declaración Renta Segunda Categoria">Declaración Renta Segunda Categoría</option>
                    <option value="Contabilidad bajo normas PCGA">Contabilidad bajo normas PCGA</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label htmlFor="subServicio" className="block text-white mb-1">Subservicio</label>
                    <select
                    name="subServicio"
                    id="subServicio"
                    value={formData.subServicio}
                    onChange={handleInputChange}
                    className="text-black block w-[95%] mx-auto px-3 py-2 rounded border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none bg-white/80"
                    >
                    <option value="" disabled>
                        {formData.servicio ? 'Seleccione subservicio' : 'Primero seleccione un servicio'}
                    </option>
                    {subServiciosDisponibles.map((subServicio, index) => (
                        <option key={index} value={subServicio}>
                            {subServicio}
                        </option>
                    ))}
                    </select>
                </div>

                <div className="mb-3">
                    <label htmlFor="desc" className="block text-white mb-1">Descripcion</label>
                    <textarea
                    name="desc"
                    id="desc"
                    value={formData.desc}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="text-black block w-[95%] mx-auto px-3 py-2 rounded border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none bg-white/80 resize-none h-[100px]"
                    ></textarea>
                </div>

                <div className="flex justify-center mb-2">
                    <input
                    type="submit"
                    id="btn-enviar"
                    value={isSubmitting ? 'Enviando...' : 'Enviar email'}
                    disabled={isSubmitting}
                    className={`${
                      isSubmitting 
                        ? 'bg-gray-600 cursor-not-allowed' 
                        : 'bg-blue-700 hover:bg-blue-800'
                    } text-white font-semibold px-6 py-2 rounded cursor-pointer transition-colors duration-200`}
                    />
                </div>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Contacto;