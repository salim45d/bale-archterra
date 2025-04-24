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
  const entry = process.env.NEXT_PUBLIC_CONTENTFUL_ENTRY_ID_CULTURE || "";
  const about = await getAboutContentfulPage(entry);

  return (
    <div>
      <section
        className="bg-[whitesmoke] p-[5%] mt-1 flex justify-center"
        id={about?.fields.slug}
      >
        <MotionDiv
          initial="initial"
          whileInView="animate"
          className="grid grid-cols-1 sm:grid-cols-2 gap-2 lg:max-w-7xl"
        >
          <div className="mb-3 col-span-2 sm:col-span-1">
            <MotionH1
              variants={variantUpslide}
              custom={1}
              className="text-xs mb-5"
            >
              ABOUT US
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
            custom={5}
            className="text-justify leading-relaxed"
          >
            <RichText document={about?.fields.opening} />
          </MotionDiv>
          <MotionDiv
            variants={variantOpacity}
            custom={6}
            className="text-justify leading-relaxed col-span-2"
          >
            <RichText document={about?.fields.body} />
            <div className="mt-2">
              <RichText document={about?.fields.closing} />
            </div>
          </MotionDiv>
        </MotionDiv>
      </section>
    </div>
  );
}
