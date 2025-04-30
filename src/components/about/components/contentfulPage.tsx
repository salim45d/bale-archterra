import { getAboutContentfulPage } from "@/api/api";
import { MotionDiv, variantXFast } from "@/components/motion/motion";
import PageNotFound from "@/components/not-found/pageNotFound";
import RichText from "@/components/richtext/richText";
import TitleSlice from "@/components/tittle/title";
import ITitle from "@/types/title.interface";

export default async function AboutContentfulPage(Prop: {
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

  if (about === undefined) {
    return <PageNotFound />;
  } else {
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
            viewport={{ once: true }}
            className={`grid grid-cols-1 sm:grid-cols-2 gap-2 max-w-7xl ${Prop.classTeam}`}
          >
            <div className="mb-3 col-span-2 sm:col-span-1">
              <TitleSlice
                subtitle={title.subtitle}
                title={title.title}
                quote={title.quote}
              />
            </div>
            <MotionDiv
              variants={variantXFast}
              custom={4}
              className="text-justify leading-relaxed"
            >
              <RichText document={about?.fields.opening} />
            </MotionDiv>
            <MotionDiv
              variants={variantXFast}
              custom={6}
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
}
