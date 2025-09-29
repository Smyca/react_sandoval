import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { servicios } from "../constants";

const Servicios = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },

      
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="w-3/4 m-auto min-h-screen mt-2"  >
      <div className=" " >
        <Slider {...settings} >
          {servicios.map((s) => (
            <div
              className="mt-5  text-center relative bg-white text-black rounded-xl min-w-0
                h-[550px] sm:h-[500px] xs:h-[350px] flex flex-col justify-between"
              key={s.nombre} 
            >
              <div > 
                <div className="h-52 w-full rounded-lg backdrop-blur bg-blue-900/70 flex justify-center items-center">
                  <img src={s.img} alt="" className="h-52 rounded-sm w-full max-h-52 xs:max-h-52" />
                </div>
                <div className="flex flex-col justify-center items-center gap-4 p-4">
                  <p className="text-xl font-semibold xs:text-lg">{s.nombre}</p>
                  <p className="text-base xs:text-sm">{s.descripcion}</p>
                </div>
              </div>
             
              <div  className="absolute sm:bottom-4 bottom-8 flex justify-center w-full">
                <button className="backdrop-blur bg-blue-900/70 text-white text-lg xs:text-base px-6 py-1 rounded-xl">
                  Ver mas
                </button>

              </div>
              
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Servicios;