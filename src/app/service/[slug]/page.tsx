import { getServiceContentfulbySlug } from "@/api/api";
import RedButton from "@/components/button/redButton";
import Header from "@/components/header/header";
import Headline from "@/components/headline/headline";
import RichText from "@/components/richtext/richText";
import ServiceHome from "@/components/service/serviceHome";
import { IAsset } from "@/types/contentful.type";
import {
  MotionDiv,
  MotionH1,
  MotionP,
  MotionImg,
  variantUpslide,
  variantOpacity,
  variantOpacityX,
} from "@/components/motion/motion";

export default async function ServiceSection({
  params,
}: {
  params: { slug: string };
}) {
  const service = await getServiceContentfulbySlug(params.slug);
  return (
    <div>
      <Header img={"/service.jpg"} tittle={`${service?.fields.tittle}`} />
      <Headline />
      <section className="flex justify-center bg-[whitesmoke] px-[5%] pt-[5%]">
        <MotionDiv
          initial="initial"
          whileInView="animate"
          className="lg:max-w-7xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
            <div className="text-center col-span-1 md:col-span-2">
              <MotionH1
                variants={variantUpslide}
                custom={1}
                className="text-xs mb-5"
              >
                OUR SERVICE
              </MotionH1>
              <MotionH1
                variants={variantUpslide}
                custom={2}
                className="text-2xl sm:text-4xl text-red-700 font-extrabold"
              >
                {service?.fields.tittle}
              </MotionH1>
              <MotionP
                variants={variantUpslide}
                custom={3}
                className="text-[#063852] font-extrabold mb-5"
              >
                {service?.fields.subtitle}
              </MotionP>
            </div>
            <div className="px-2 md:px-0 lg:px-5">
              <div className="grid grid-cols-2 gap-2">
                <div className="inline-block content-end">
                  <MotionImg
                    variants={variantOpacity}
                    custom={1}
                    className={`rounded-md w-full object-cover h-auto`}
                    src={`https:${
                      (service?.fields.image1 as IAsset).fields.file.url
                    }`}
                    width={500}
                    height={400}
                    alt="service-image"
                  />{" "}
                </div>
                <div className="inline-block content-end">
                  <MotionImg
                    variants={variantOpacity}
                    custom={2}
                    className={`rounded-md w-full object-cover h-auto`}
                    src={`https:${
                      (service?.fields.image2 as IAsset).fields.file.url
                    }`}
                    width={500}
                    height={400}
                    alt="service-image"
                  />{" "}
                </div>
                <MotionImg
                  variants={variantOpacity}
                  custom={3}
                  className={`rounded-md w-full object-cover h-auto`}
                  src={`https:${
                    (service?.fields.image3 as IAsset).fields.file.url
                  }`}
                  width={500}
                  height={400}
                  alt="service-image"
                />{" "}
                <MotionImg
                  variants={variantOpacity}
                  custom={4}
                  className={`rounded-md w-full object-cover h-auto`}
                  src={`https:${
                    (service?.fields.image4 as IAsset).fields.file.url
                  }`}
                  width={500}
                  height={400}
                  alt="service-image"
                />{" "}
              </div>
            </div>
            <div className="text-center flex flex-col justify-between">
              <MotionDiv
                variants={variantOpacityX}
                custom={5}
                className="text-justify"
              >
                <RichText document={service?.fields.opening} />
                <div className="m-1"></div>
                <RichText document={service?.fields.body} />
              </MotionDiv>
              <MotionDiv
                variants={variantOpacity}
                custom={6}
                className="flex flex-col sm:flex-row justify-between mt-3"
              >
                <p className="text-md lg:text-lg font-extrabold italic mb-5 sm:mb-0 content-center text-red-700">
                  Start from Rp{service?.fields.price}/m<sup>2</sup>
                </p>
                <RedButton href={"/team#contact-form"} tittle={"Contact us"} />
              </MotionDiv>
            </div>
          </div>
        </MotionDiv>
      </section>
      <ServiceHome />
    </div>
  );
}
