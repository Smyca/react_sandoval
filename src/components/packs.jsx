import React from 'react'
import Slider from "react-slick";
import { packs } from '../constants';
import portadaPacks from "../assets/img/portada_packs.jpeg";

const Packs = () => {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,              
        autoplaySpeed: 5000,     
        cssEase: "ease-in-out",  
        pauseOnHover: true,      
        pauseOnFocus: true,      
        arrows: true,           
        fade: false,             
        waitForAnimate: true     
    };

    return (
        <section 
            className="min-h-screen flex justify-center items-center bg-cover bg-center"
            style={{
                backgroundImage: `url(${portadaPacks})`
            }}
        >
            <div className="bg-black/70 border border-blue-400/30 shadow-2xl backdrop-blur-sm min-h-screen h-auto flex items-center justify-center w-full">
                <div className="relative w-3/4 m-auto py-8">
                    <Slider {...settings}>
                        {packs.map((p) => (
                            <div
                                key={p.nombre}
                                className={`mt-5 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:[box-shadow:0_0_5px_1px_rgba(255,255,255,0.6)]
                                 text-center relative rounded-xl min-w-0 h-auto sm:h-[auto]
                                  xs:h-[350px] flex flex-col justify-between ${p.colorFondo}`}
                            >
                                <div>
                                    <div className="h-32 w-full rounded-xl flex flex-col items-center justify-center pt-4">
                                        <span className="text-5xl">{p.icono}</span>
                                    </div>
                                    <div className="flex flex-col justify-center items-center gap-2 p-4">
                                        <p className={`text-2xl font-bold xs:text-xl ${p.colorTexto}`}>{p.nombre}</p>
                                        <p className="text-base text-gray-700 xs:text-sm">{p.descripcion}</p>
                                    </div>
                                    <div className="flex justify-center text-gray-700 text-lg xs:text-sm font-semibold px-8 py-2">
                                        <span className="w-auto space-y-2 text-left">
                                            {p.beneficios.map((b, i) => (
                                                <p key={i}>
                                                    <span className="text-green-600">✔</span>
                                                    <span className="ml-2">{b}</span>
                                                </p>
                                            ))}
                                        </span>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center pb-6">
                                    <p className="text-xl font-semibold text-blue-900">{p.precio}</p>
                                    <button className="mt-3 backdrop-blur bg-blue-900/70 text-white text-lg xs:text-base px-6 py-1 rounded-xl">
                                        Ver más
                                    </button>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    )
}

export default Packs;