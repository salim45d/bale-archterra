import { getAboutContentfulPage } from "@/api/api";
import {
  MotionDiv,
  variantOpacity,
  variantOpacityX,
} from "@/components/motion/motion";
import RichText from "@/components/richtext/richText";
import TitleSlice from "@/components/tittle/title";
import ITitle from "@/types/title.interface";

export default async function ContentfulPage(Prop: {
  entry: string;
  class: string;
  classTeam: string;
}) {
  const about = await getAboutContentfulPage(Prop.entry);

  const title: ITitle = {
    subtitle: "ABOUT US",
    title: about?.fields.title,
    quote: about?.fields.subtitle,
  };

  return (
    <div>
      <section
        className={`${Prop.class} flex justify-center ${
          about === undefined ? "hidden" : "block"
        }`}
        id={about?.fields.slug}
      >
        <MotionDiv
          initial="initial"
          whileInView="animate"
          className={`grid grid-cols-1 sm:grid-cols-2 gap-2 lg:max-w-7xl ${Prop.classTeam}`}
        >
          <div className="mb-3 col-span-2 sm:col-span-1">
            <TitleSlice
              subtitle={title.subtitle}
              title={title.title}
              quote={title.quote}
            />
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
            className="col-span-2 text-justify leading-relaxed"
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
