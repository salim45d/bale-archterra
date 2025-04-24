import { getAboutContentfulPage } from "@/api/api";
import RichText from "@/components/richtext/richText";
import {
  MotionDiv,
  MotionH1,
  MotionP,
  variantUpslide,
  variantOpacityX,
  variantOpacity,
} from "@/components/motion/motion";

export default async function Team() {
  const entry = process.env.NEXT_PUBLIC_CONTENTFUL_ENTRY_ID_TEAM || "";
  const about = await getAboutContentfulPage(entry);

  return (
    <section
      className="p-[5%] flex justify-center overflow-hidden"
      id={about?.fields.slug}
    >
      <MotionDiv
        initial="initial"
        whileInView="animate"
        variants={variantUpslide}
        custom={0}
        className="grid grid-cols-1 sm:grid-cols-2 gap-2 lg:max-w-7xl bg-[whitesmoke] p-5 sm:p-[5%] rounded-md"
      >
        <div className={`mb-3`}>
          <MotionH1
            variants={variantUpslide}
            custom={1}
            className="text-xs mb-5"
          >
            ABOUT US{" "}
          </MotionH1>
          <MotionH1
            variants={variantUpslide}
            custom={2}
            className="text-2xl sm:text-4xl text-red-700 font-extrabold mb-3"
          >
            {about?.fields.title}
          </MotionH1>
          <MotionP
            variants={variantUpslide}
            custom={3}
            className="text-[#063852] font-extrabold"
          >
            {about?.fields.subtitle}
          </MotionP>
        </div>
        <MotionDiv
          variants={variantOpacityX}
          custom={4}
          className="text-justify leading-relaxed"
        >
          <RichText document={about?.fields.opening} />
        </MotionDiv>
        <MotionDiv
          variants={variantOpacity}
          custom={5}
          className="sm:col-span-2 leading-relaxed text-justify"
        >
          <RichText document={about?.fields.body} />
          <div className="mt-2">
            <RichText document={about?.fields.closing} />
          </div>
        </MotionDiv>
      </MotionDiv>
    </section>
  );
}
