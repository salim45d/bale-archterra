import Link from "next/link";
import { MotionDiv, variantUpslide } from "../motion/motion";
import TitleSlice from "../tittle/title";
import ITitle from "@/types/title.interface";
import RedButton from "../button/redButton";

export default function BannerContactUS() {
  const title: ITitle = {
    subtitle: "OUR CONTACT",
    title: "Are you ready to be part of Bale Archterra?",
    quote:
      "We are always ready to discussing new projects, creative ideas or opportunities to be part of your visions.",
  };
  return (
    <section className="p-[5%] bg-red-100 flex justify-center">
      <MotionDiv
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={variantUpslide}
        custom={1}
        className="flex max-w-7xl"
      >
        <div className="text-left w-full sm:w-1/2">
          <TitleSlice
            subtitle={title.subtitle}
            title={title.title}
            quote={title.quote}
          />
          <div className="text-left mb-3">
            <RedButton href={"/contact"} tittle={"Let's Talk"} />
          </div>
        </div>
        <div className="w-1/2 sm:flex sm:justify-end">
          <img
            src="../question.svg"
            alt="Contact us"
            width={300}
            height={300}
            className=""
          />
        </div>
      </MotionDiv>
    </section>
  );
}
