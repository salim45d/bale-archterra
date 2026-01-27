import { getAboutContentfulPage } from "@/api/api";
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
    return (
      <div className="pt-[5%]">
        <PageNotFound />
      </div>
    );
  } else {
    return (
      <div>
        <section
          className={`${Prop.class} flex justify-center ${
            about === undefined ? "hidden" : "block"
          }`}
          id={about?.fields.slug}
        >
          <div
            data-aos="zoom-in-up"
            className={`grid grid-cols-1 sm:grid-cols-[1.5fr_2fr] gap-2 max-w-7xl ${Prop.classTeam}`}
          >
            <div className="col-span-2 sm:col-span-1 flex rounded-xl bg-white/20 backdrop-blur-md p-5">
              <TitleSlice
                subtitle={title.subtitle}
                title={title.title}
                quote={title.quote}
              />
            </div>
            <div
              data-aos="fade-left"
              data-aos-delay="200"
              className="text-justify leading-relaxed lg:p-5"
            >
              <RichText document={about?.fields.opening} />
            </div>
            <div
              data-aos="fade-up"
              className="col-span-2 text-justify leading-relaxed"
            >
              <RichText document={about?.fields.body} />
            </div>
          </div>
        </section>
      </div>
    );
  }
}
