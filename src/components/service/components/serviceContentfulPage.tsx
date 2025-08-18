import RedButton from "@/components/button/redButton";
import {
  MotionDiv,
  MotionImg,
  MotionP,
  variantUpslide,
  variantXFast,
} from "@/components/motion/motion";
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
          <MotionDiv
            key={idx}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-5 my-[5%]"
          >
            <div className="text-center col-span-1 md:col-span-2">
              <TitleSlice
                subtitle={"OUR SERVICE"}
                title={item.fields.tittle}
                quote={item.fields.subtitle}
              />
            </div>
            <div
              className={`px-2 md:px-0 lg:px-5 ${
                idx % 2 === 1 ? "order-last" : ""
              }`}
            >
              <div className="grid grid-cols-2 gap-2">
                <div className="inline-block content-end">
                  <MotionImg
                    variants={variantXFast}
                    custom={idx + 1}
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
                  <MotionImg
                    variants={variantXFast}
                    custom={idx + 2}
                    className={`rounded-md w-full object-cover h-auto`}
                    src={`https:${
                      (item.fields.image2 as IAsset).fields.file.url
                    }`}
                    width={500}
                    height={400}
                    alt="service-image"
                  />{" "}
                </div>
                <MotionImg
                  variants={variantXFast}
                  custom={idx + 3}
                  className={`rounded-md w-full object-cover h-auto`}
                  src={`https:${
                    (item.fields.image3 as IAsset).fields.file.url
                  }`}
                  width={500}
                  height={400}
                  alt="service-image"
                />{" "}
                <MotionImg
                  variants={variantXFast}
                  custom={idx + 4}
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
              <MotionDiv
                variants={variantXFast}
                custom={idx + 5}
                className="text-justify"
              >
                <RichText document={item.fields.body} />
              </MotionDiv>

              <MotionP
                variants={variantXFast}
                custom={idx + 6}
                className="text-md lg:text-lg font-extrabold italic content-center text-red-700 pb-5 pt-16"
              >
                Start from Rp{item.fields.price}/m<sup>2</sup>
              </MotionP>
              <MotionDiv
                variants={variantUpslide}
                custom={idx + 7}
                className="pb-16"
              >
                <RedButton href={"/contact"} tittle={"Contact us"} />
              </MotionDiv>
            </div>
          </MotionDiv>
        ))}
      </>
    );
  }
}
