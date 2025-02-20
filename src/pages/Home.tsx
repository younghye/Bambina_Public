import { Navigation, Pagination, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import { images } from "../components/images";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Home() {
  return (
    <div className="relative font-serif mb-20">
      <div
        className="bg-cover bg-no-repeat bg-center h-[100vh]"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "/assets/images/home.jpg"
          })`,
        }}
      ></div>
      <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white top-[50vh]">
        <div className="text-5xl md:text-7xl lg:text-9xl">BAMBINA</div>
        <div className="text-2xl md:text-4xl lg:text-6xl">ponsonby</div>
      </div>

      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 m-12 w-4/6 text-center text-lg text-gray-500">
          <div>268 Ponsonby Road, Ponsonby</div>
          <div>
            Mon - Sat 6:30am - 3:00pm
            <span className="invisible md:visible"> / </span>
            <br className="md:hidden" />
            Sun 7:00am - 3:00pm
          </div>
        </div>
      </div>

      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={15}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        className="w-[80vw]"
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          480: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
      >
        {images.map((image) => (
          <SwiperSlide>
            <img src={image.src} alt={image.alt} />
          </SwiperSlide>
        ))}
        . .
      </Swiper>
    </div>
  );
}
