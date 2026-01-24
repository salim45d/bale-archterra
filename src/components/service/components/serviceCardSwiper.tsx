"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Navigation, Pagination } from "swiper/modules";
import { Entry } from "contentful";
import { IAsset, TypeServiceSkeleton } from "@/types/contentful.type";
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
        modules={[Pagination, Navigation, Keyboard]}
        spaceBetween={20}
        slidesPerView={1}
        keyboard={{
          enabled: true,
        }}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        loop={true}
        breakpoints={{
          550: {
            slidesPerView: 1.5,
          },
          750: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {Prop.service?.map((item, idx) => (
          <SwiperSlide key={idx}>
            <div
              data-aos={
                idx === 0 ? "fade-up" : idx === 1 ? "fade-left" : "fade-right"
              }
              data-aos-delay={idx * 100}
              className={`bg-yellow-500 text-center rounded-md mb-12 p-1 overflow-hidden mySwiper-Slide`}
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
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
