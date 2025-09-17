import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { servicios } from "../constants";

const Servicios = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
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
          slidesToScroll: 2,
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
    <div className="w-3/4 m-auto " id="servicios">
      <div className="mt-20  ">
        <Slider {...settings}>
          {servicios.map((s) => (
            <div
              className="bg-white text-black rounded-xl min-w-0
                h-[450px] sm:h-[500px] xs:h-[350px] flex flex-col justify-between"
              key={s.nombre}
            >
              <div>
                <div className="h-56 xs:h-40 rounded-t-xl bg-indigo-500 flex justify-center items-center">
                  <img src={s.img} alt="" className="m-5 h-auto w-70 rounded-2xl max-h-40 xs:max-h-28" />
                </div>
                <div className="flex flex-col justify-center items-center gap-4 p-4">
                  <p className="text-xl font-semibold xs:text-lg">{s.nombre}</p>
                  <p className="text-base xs:text-sm">{s.descripcion}</p>
                </div>
              </div>
              <div className="flex justify-center items-end pb-6">
                <button className="bg-indigo-500 text-white text-lg xs:text-base px-6 py-1 rounded-xl">
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