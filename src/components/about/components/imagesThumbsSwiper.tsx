"use client";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { useState } from "react";
import { Autoplay, FreeMode, Keyboard, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperTypes } from "swiper/types";

export default function ImagesThumbsSwiper() {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperTypes | null>(null);

  const images = [
    { id: 1, src: "/about-green.jpg" },
    { id: 2, src: "/about-home.jpg" },
    { id: 3, src: "/about-work.jpg" },
    { id: 4, src: "/about-building.jpg" },
    { id: 5, src: "/about-circle.jpg" },
    { id: 6, src: "/about-green-building.jpg" },
    { id: 7, src: "/about-green-tower.jpg" },
    { id: 8, src: "/about-white-house.jpg" },
    { id: 9, src: "/about-colorfull.jpg" },
    { id: 10, src: "/about-square.jpg" },
  ];

  const images2 = [
    { id: 1, src: "/about-green-large.png" },
    { id: 2, src: "/about-home-large.jpg" },
    { id: 3, src: "/about-work-large.jpg" },
    { id: 4, src: "/about-building-large.jpg" },
    { id: 5, src: "/about-circle-large.jpg" },
    { id: 6, src: "/about-green-building-large.jpg" },
    { id: 7, src: "/about-green-tower-large.jpg" },
    { id: 8, src: "/about-white-house-large.jpg" },
    { id: 9, src: "/about-colorfull-large.jpg" },
    { id: 10, src: "/about-square-large.jpg" },
  ];

  return (
    <div className="flex flex-col min-w-36 max-w-7xl">
      <div data-aos="fade-up">
        <Swiper
          loop={true}
          spaceBetween={20}
          keyboard={{
            enabled: true,
          }}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Thumbs, Autoplay, Keyboard]}
          centeredSlides={true}
        >
          {images2.map((item, idx) => (
            <SwiperSlide key={idx}>
              <img
                className="rounded-lg object-cover w-full h-[20rem] sm:h-[25rem] md:h-[28rem] lg:h-[35rem]"
                src={item.src}
                width={300}
                height={200}
                alt={`Images ${idx}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="mt-1.5">
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={5}
          slidesPerView={5}
          breakpoints={{
            1024: {
              spaceBetween: 5,
              slidesPerView: 7,
            },
          }}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Thumbs]}
        >
          {images.map((item, idx) => (
            <SwiperSlide key={idx} className="mySwiper2">
              <img
                data-aos="zoom-in-up"
                className="rounded-lg w-full object-cover"
                src={item.src}
                width={100}
                height={100}
                alt={`Images ${idx}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
