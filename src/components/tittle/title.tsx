import ITitle from "@/types/title.interface";
import { MotionDiv, MotionH1, MotionP, variantUpslide } from "../motion/motion";

export default function TitleSlice(Prop: ITitle) {
  return (
    <MotionDiv initial="initial" whileInView="animate" className="mb-16">
      <MotionH1 variants={variantUpslide} custom={1} className="text-xs mb-5">
        {Prop.subtitle}
      </MotionH1>
      <MotionH1
        variants={variantUpslide}
        custom={2}
        className="text-2xl sm:text-4xl text-red-700 font-extrabold"
      >
        {Prop.title}
      </MotionH1>
      <MotionP
        variants={variantUpslide}
        custom={3}
        className="mt-2 text-[#063852] font-extrabold"
      >
        {Prop.quote}
      </MotionP>
    </MotionDiv>
  );
}
