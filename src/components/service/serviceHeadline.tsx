"use client";

import { motion } from "motion/react";
import { variantOpacityX } from "../motion/motion";
import { IAsset, TypeServiceSkeleton } from "@/types/contentful.type";
import { Entry } from "contentful";
import { Autoplay, Keyboard, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";

export default function ServiceHeadline(Prop: {
  serviceHeadline: Entry<TypeServiceSkeleton, undefined, string>[] | undefined;
}) {
  return (
    <summary className="w-full flex justify-center">
      <Swiper
        className="-mt-32 w-[90%] lg:max-w-5xl z-0"
        modules={[Navigation, Autoplay, Keyboard]}
        spaceBetween={5}
        slidesPerView={1}
        keyboard={{
          enabled: true,
        }}
        loop={true}
        navigation={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          450: {
            slidesPerView: 2,
            spaceBetween: 5,
          },
          900: {
            slidesPerView: 4,
            spaceBetween: 5,
          },
        }}
      >
        {Prop.serviceHeadline?.map((item, idx) => (
          <SwiperSlide key={idx}>
            <motion.div
              initial="initial"
              whileInView="animate"
              key={idx}
              variants={variantOpacityX}
              custom={idx + 1}
              className={`bg-yellow-500 p-[5%] text-black text-center  rounded-md h-64 overflow-hidden`}
            >
              <Link
                className="flex flex-col space-y-1 sm:space-y-2 items-center"
                href={`/service/${item.fields.slug}`}
              >
                <img
                  alt="Team-profile"
                  src={`https:${
                    (item.fields.imageCard as IAsset).fields.file.url
                  }`}
                  className="rounded-full h-24 w-24 ring-2 p-1 ring-black"
                />
                <h1 className="text-lg font-bold">{item.fields.tittle}</h1>

                <p className="text-sm md:text-xs">{item.fields.cardText}</p>
              </Link>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </summary>
  );
}
