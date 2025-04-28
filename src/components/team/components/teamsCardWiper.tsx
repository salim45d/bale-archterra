"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { ITeam } from "@/types/team.interface";

export default function TeamsMemberCardSwiper(Prop: { teams: ITeam[] }) {
  return (
    <div className="flex justify-center px-[5%] pb-[5%] -mt-16">
      <div className=" min-w-52 max-w-7xl">
        <Swiper
          modules={[EffectCoverflow, Pagination, Navigation]}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          spaceBetween={20}
          slidesPerView={1}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          breakpoints={{
            300: {
              slidesPerView: 1.1,
              spaceBetween: 15,
            },
            400: {
              slidesPerView: 1.3,
              spaceBetween: 25,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 2.1,
              spaceBetween: 50,
            },
          }}
        >
          {Prop.teams.map((team, idx) => (
            <SwiperSlide key={idx}>
              <div className="bg-[#063852] rounded-md flex justify-between flex-col hover:bg-red-700 mb-10 text-white">
                <div className="flex justify-center p-5">
                  <img
                    alt="Team-profile"
                    src={team.picture.large}
                    className="rounded-full sm:w-28 w-20 h-20 sm:h-28 ring-2 p-1 ring-gray-300"
                  />
                </div>
                <div className="p-[5%]">
                  <h2 className="font-bold text-lg text-center">
                    {team.name.first} {team.name.last}
                  </h2>{" "}
                  <p className="text-center my-5">
                    "Hei everyone, My name is {team.name.first}. I have been
                    working with Bale Archterra for {team.registered.age}{" "}
                    years."
                  </p>
                  <p className="text-lg font-bold">Contact me:</p>
                  <p>{team.email}</p>
                  <p>{team.phone}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
