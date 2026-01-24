"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Keyboard, Pagination } from "swiper/modules";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getTeam } from "@/api/api";
import { ITeam } from "@/types/team.interface";
import { ITeams, storeTeams } from "@/store/slice/teams";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import PageNotFound from "@/components/not-found/pageNotFound";

export default function TeamsMemberCardSwiper() {
  const [teams, setTeams] = useState<ITeam[] | undefined>(undefined);
  const teamsDataStore: ITeam[] | undefined = useSelector(
    (state: { teams: ITeams }) => state.teams.teams,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (teamsDataStore === undefined) {
      const fetchData = async () => {
        const data = await getTeam();
        if (data === undefined) {
          return;
        }

        setTeams(data);
        dispatch(storeTeams(data));
      };

      fetchData();
    } else if (teamsDataStore.length > 0) {
      setTeams(teamsDataStore);
    }
  }, []);

  if (teams === undefined) {
    return <PageNotFound />;
  } else {
    return (
      <div className="flex justify-center px-[5%] py-[2%]">
        <div className=" min-w-52 max-w-7xl">
          <Swiper
            modules={[EffectCoverflow, Pagination, Keyboard]}
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            spaceBetween={20}
            slidesPerView={1}
            keyboard={{
              enabled: true,
            }}
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
            {teams?.map((team, idx) => (
              <SwiperSlide key={idx}>
                <div
                  className="bg-[#063852] rounded-md flex justify-between flex-col mb-12 text-white mySwiper-Slide"
                  data-aos={
                    idx === 0
                      ? "fade-up"
                      : idx === teams.length - 1
                        ? "fade-right"
                        : "fade-left"
                  }
                >
                  <div className="flex justify-center p-5">
                    <img
                      alt="Team-profile"
                      src={team.picture.large}
                      className="rounded-full w-28 h-28 ring-2 p-1 ring-gray-300 "
                    />
                  </div>
                  <div className="px-[5%] pb-[5%]">
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
}
