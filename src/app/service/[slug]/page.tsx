import {
  MotionDiv,
  MotionP,
  MotionImg,
  variantUpslide,
  variantOpacity,
  variantOpacityX,
} from "@/components/motion/motion";
import { getServiceContentfulbySlug } from "@/api/api";
import { IAsset } from "@/types/contentful.type";
import TitleSlice from "@/components/tittle/title";
import RedButton from "@/components/button/redButton";
import RichText from "@/components/richtext/richText";
import HeaderImages from "@/components/home/headerImages";
import HeaderHeadline from "@/components/home/headerHeadline";
import ServiceCardHome from "@/components/service/serviceCardHome";

export default async function ServiceSlugPage({
  params,
}: {
  params: { slug: string };
}) {
  const service = await getServiceContentfulbySlug(params.slug);
  return (
    <div>
      <HeaderImages img={"/service.jpg"} tittle={`${service?.fields.tittle}`} />
      <HeaderHeadline />
      <section className="flex justify-center bg-[whitesmoke] px-[5%] pt-[5%]">
        <MotionDiv
          initial="initial"
          whileInView="animate"
          className="lg:max-w-7xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
            <div className="text-center col-span-1 md:col-span-2">
              <TitleSlice
                subtitle={"ABOUT US"}
                title={service?.fields.tittle}
                quote={service?.fields.subtitle}
              />
            </div>
            <div className="px-2 md:px-0 lg:px-5">
              <div className="grid grid-cols-2 gap-2">
                <div className="inline-block content-end">
                  <MotionImg
                    variants={variantUpslide}
                    custom={2}
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
                    variants={variantUpslide}
                    custom={3}
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
                  custom={4}
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
                  custom={5}
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
            <div>
              <MotionDiv
                variants={variantOpacityX}
                custom={4}
                className="text-justify"
              >
                <RichText document={service?.fields.opening} />
                <div className="m-1"></div>
                <RichText document={service?.fields.body} />
              </MotionDiv>

              <MotionP
                variants={variantOpacityX}
                custom={4}
                className="text-md lg:text-lg font-extrabold italic content-center text-red-700 pb-5 pt-16"
              >
                Start from Rp{service?.fields.price}/m<sup>2</sup>
              </MotionP>
              <MotionDiv variants={variantUpslide} custom={4} className="pb-16">
                <RedButton href={"/team#contact-form"} tittle={"Contact us"} />
              </MotionDiv>
            </div>
          </div>
        </MotionDiv>
      </section>
      <ServiceCardHome />
    </div>
  );
}
