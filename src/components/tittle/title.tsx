import ITitle from "@/types/title.interface";
import { MotionDiv, variantUpslide } from "../motion/motion";

export default function TitleSlice(Prop: ITitle) {
  return (
    <MotionDiv
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={variantUpslide}
      custom={1}
      className="mb-10"
    >
      <h1 className="text-sm text-[#063852]  font-bold mb-3">
        {Prop.subtitle}
      </h1>
      <h1 className="text-2xl sm:text-4xl text-red-700 font-extrabold">
        {Prop.title}
      </h1>
      <p className="mt-1 text-[#063852] font-bold">{Prop.quote}</p>
    </MotionDiv>
  );
}
