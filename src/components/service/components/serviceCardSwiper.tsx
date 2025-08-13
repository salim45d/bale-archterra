"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Keyboard, Navigation, Pagination } from "swiper/modules";
import { Entry } from "contentful";
import { IAsset, TypeServiceSkeleton } from "@/types/contentful.type";
import { MotionDiv, variantOpacityX } from "@/components/motion/motion";
import WhiteButton from "@/components/button/whiteButton";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ServiceCardSwiper(Prop: {
  service: Entry<TypeServiceSkeleton, undefined, string>[] | undefined;
}) {
  return (
    <div className="w-full">
      <Swiper
        modules={[Pagination, Navigation, Autoplay, Keyboard]}
        spaceBetween={15}
        slidesPerView={1}
        keyboard={{
          enabled: true,
        }}
        centeredSlides={true}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          450: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          900: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
      >
        {Prop.service?.map((item, idx) => (
          <SwiperSlide key={idx}>
            <MotionDiv
              initial="initial"
              whileInView="animate"
              variants={variantOpacityX}
              viewport={{ once: true }}
              custom={idx}
              className={`bg-yellow-500 text-center hover:bg-[#063852] hover:text-white rounded-md mb-12 p-1 overflow-hidden mySwiper-Slide`}
            >
              <img
                className={`rounded-md rounded-b-none`}
                src={`https:${
                  (item.fields.imageCard as IAsset).fields.file.url
                }`}
                width={500}
                height={250}
                alt="service-image"
              />
              <div className="flex flex-col justify-between p-5">
                <div>
                  <h1 className="font-extrabold mb-2 text-lg lg:text-xl">
                    {item.fields.tittle}
                  </h1>
                  <p>{item.fields.cardText}</p>
                </div>
                <div>
                  <p className="font-bold italic mb-5 mt-10">
                    Start from Rp{item.fields.price}/m<sup>2</sup>
                  </p>
                  <WhiteButton
                    href={`/service/${item.fields.slug}`}
                    tittle={"Find more"}
                  />
                </div>
              </div>
            </MotionDiv>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
