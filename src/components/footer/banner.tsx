import Link from "next/link";
import { MotionDiv, variantUpslide } from "../motion/motion";
import TitleSlice from "../tittle/title";
import ITitle from "@/types/title.interface";
import RedButton from "../button/redButton";
import ImagesSwiperGalery from "../about/imagesSwiperGalery";
import ImageSliderAbout from "../about/imagesSliderAbout";

export default function BannerContactUS() {
  const title: ITitle = {
    subtitle: "OUR CONTACT",
    title: "Are you ready to be part of Bale Archterra?",
    quote:
      "We are always ready to discussing new projects, creative ideas or opportunities to be part of your visions.",
  };
  return (
    <section className="px-[5%] pb-[5%] flex justify-center">
      <MotionDiv
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={variantUpslide}
        custom={1}
        className="lg:max-w-7xl w-full rounded-xl bg-red-100 backdrop-blur-2xl p-5 flex flex-col-reverse md:flex-row"
      >
        <div className="text-left bg-white/20 rounded-xl p-5 backdrop-blur-md w-full md:w-1/2">
          <TitleSlice
            subtitle={title.subtitle}
            title={title.title}
            quote={title.quote}
          />
          <div className="">
            <RedButton href={"/contact"} tittle={"Let's Talk"} />
          </div>
        </div>
        <div className="w-full md:w-1/2 md:pl-5">
          <ImageSliderAbout />
        </div>
      </MotionDiv>
    </section>
  );
}
