import RedButton from "@/components/button/redButton";
import PageNotFound from "@/components/not-found/pageNotFound";
import RichText from "@/components/richtext/richText";
import TitleSlice from "@/components/tittle/title";
import { IAsset, TypeServiceSkeleton } from "@/types/contentful.type";
import { Entry } from "contentful";

export default function ServiceContentfulPage(Prop: {
  services: Entry<TypeServiceSkeleton, undefined, string>[] | undefined;
}) {
  if (Prop.services === undefined) {
    return <PageNotFound />;
  } else {
    return (
      <>
        {Prop.services?.map((item, idx) => (
          <div
            key={idx}
            className={`grid grid-cols-1 md:grid-cols-2 gap-5 p-5 my-[5%] ${
              idx % 2 === 0 ? "bg-red-100 rounded-lg" : ""
            }`}
            data-aos="zoom-in-up"
          >
            <div className="text-center col-span-1 md:col-span-2">
              <TitleSlice
                subtitle={"OUR SERVICE"}
                title={item.fields.tittle}
                quote={item.fields.subtitle}
              />
            </div>
            <div
              data-aos="flip-right"
              className={`px-2 md:px-0 lg:px-5 ${
                idx % 2 === 1
                  ? "md:order-last"
                  : "bg-white/20 backdrop-blur-md rounded-lg p-5"
              }`}
            >
              <div className="grid grid-cols-2 gap-2">
                <div className="inline-block content-end">
                  <img
                    className={`rounded-md w-full object-cover h-auto`}
                    src={`https:${
                      (item.fields.image1 as IAsset).fields.file.url
                    }`}
                    width={500}
                    height={400}
                    alt="service-image"
                  />{" "}
                </div>
                <div className="inline-block content-end">
                  <img
                    className={`rounded-md w-full object-cover h-auto`}
                    src={`https:${
                      (item.fields.image2 as IAsset).fields.file.url
                    }`}
                    width={500}
                    height={400}
                    alt="service-image"
                  />{" "}
                </div>
                <img
                  className={`rounded-md w-full object-cover h-auto`}
                  src={`https:${
                    (item.fields.image3 as IAsset).fields.file.url
                  }`}
                  width={500}
                  height={400}
                  alt="service-image"
                />{" "}
                <img
                  className={`rounded-md w-full object-cover h-auto`}
                  src={`https:${
                    (item.fields.image4 as IAsset).fields.file.url
                  }`}
                  width={500}
                  height={400}
                  alt="service-image"
                />{" "}
              </div>
            </div>
            <div className={`${idx % 2 === 1 ? "text-end" : ""}`}>
              <div data-aos="fade-up" className="text-justify">
                <RichText document={item.fields.body} />
              </div>
              <p
                data-aos="zoom-in-up"
                className="text-md lg:text-lg font-extrabold italic content-center text-red-700 pb-5 pt-16"
              >
                Start from Rp{item.fields.price}/m<sup>2</sup>
              </p>
              <div>
                <RedButton href={"/contact"} tittle={"Contact us"} />
              </div>
            </div>
          </div>
        ))}
      </>
    );
  }
}
