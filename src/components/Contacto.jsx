import React from 'react'
import imgcontact from '../assets/img/img-contact.jpg'



const Contacto = () => {
  return (
    <section className='min-h-screen flex justify-center bg-cover bg-center'
    style={{backgroundImage:`url(${imgcontact})`}}>

        <div className=' flex-col md:flex-row w-full bg-black/80 border border-blue-400/30  backdrop-blur-sm min-h-screen h-auto flex justify-around'>
            <div className="flex justify-center p-6 min-w-[280px] md:max-w-sm w-full mb-8 md:mb-0">
                <ul className="list-none space-y-4">
                <li>
                    <h1 className="text-white text-2xl font-bold mb-2">¡Contáctanos!</h1>
                    <div className="border-t border-blue-400 my-2 w-full" />
                </li>
                <li className="text-white break-all">contacto@fiscalizate.cl</li>
                <div className="border-t border-blue-400 my-2 w-full" />
                <li className="text-white">+569 00000000</li>
                <div className="border-t border-blue-400 my-2 w-auto" />
                <li className="text-white">
                    Lunes a Viernes<br />
                    de 09:00 a 18:00 Horas.
                </li>
                <div className="border-t border-blue-400 my-2 w-auto" />
                </ul>
            </div>
                
            <div className=' p-5'>

                    <form
                    id="form"
                    method="POST"
                    className="mx-auto mt-5 p-5 rounded-lg shadow-sm bg-[rgba(8,21,56,0.7)] backdrop-blur-md max-w-md w-full"
                    >
                    <h1 className="text-center text-white text-2xl font-semibold mb-4">Contacto</h1>

                    <div className="mb-3">
                        <label htmlFor="name" className="block text-white mb-1">Nombre</label>
                        <input
                        name="name"
                        type="text"
                        id="name"
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
                        required
                        className="text-black block w-[95%] mx-auto px-3 py-2 rounded border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none bg-white/80"
                        />
                    </div>

                    <div className="mb-3 ">
                        <label htmlFor="Servicio" className="block text-white mb-1">Servicio</label>
                        <select
                        id="Servicio"
                        name="Servicio"
                        defaultValue=""
                        className=" text-black block w-[95%] mx-auto px-3 py-2 rounded border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none bg-white/80"
                        >
                        <option value="" disabled >Seleccione servicio</option>
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
                          defaultValue=""
                        className="text-black block w-[95%] mx-auto px-3 py-2 rounded border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none bg-white/80"
                        >
                        <option value="" disabled ></option>
                        </select>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="desc" className="block text-white mb-1">Descripcion</label>
                        <textarea
                        name="desc"
                        id="desc"
                        required
                        rows={4}
                        className="text-black block w-[95%] mx-auto px-3 py-2 rounded border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none bg-white/80 resize-none h-[100px]"
                        ></textarea>
                    </div>

                    <div className="flex justify-center mb-2">
                        <input
                        type="submit"
                        id="btn-enviar"
                        value="Enviar email"
                        className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 py-2 rounded cursor-pointer transition-colors duration-200"
                        />
                    </div>
                    <input type="hidden" name="_next" value="http://127.0.0.1:8000/" />
                    <input type="hidden" name="_captcha" value="false" />
                    </form>


                
            </div>
        </div>
        



    </section>
  )
}

export default Contacto