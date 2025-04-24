import { getServiceContentful } from "@/api/api";
import RedButton from "@/components/button/redButton";
import RichText from "@/components/richtext/richText";
import { IAsset } from "@/types/contentful.type";
import {
  MotionDiv,
  MotionH1,
  MotionP,
  MotionImg,
  variantUpslide,
  variantOpacity,
  variantOpacityX,
} from "../motion/motion";

export default async function ServiceSectionAll() {
  const service = await getServiceContentful();
  return (
    <MotionDiv
      initial="initial"
      whileInView="animate"
      className="flex justify-center content-center p-[5%] bg-[whitesmoke]"
    >
      <div className="lg:max-w-7xl">
        <div className="text-center px-[5%]">
          <MotionH1
            variants={variantUpslide}
            custom={0}
            className="text-xs mb-5"
          >
            OUR SERVICE
          </MotionH1>
          <MotionH1
            variants={variantUpslide}
            custom={1}
            className="text-2xl sm:text-4xl text-red-700 font-extrabold"
          >
            Bale Archterra Provide Best Service
          </MotionH1>
          <MotionP
            variants={variantOpacityX}
            custom={2}
            className="mt-5 text-justify"
          >
            Look for contruction services with a proven back record of success
            in plan and build better properties. Fuelled by unbound creativity
            and cutting-edge technology, our Architectural, Civil and Interior
            Design Services are spearheaded to exceed the expectations of all
            those in need of an innovation, reliability and experience of a
            lifetime. Time and again, we have proved our mettle as the finest
            construction service firm, by displaying an outstanding track-record
            of design-excellence, coupled with service efficiency,
            responsiveness and a strong commitment towards project deadlines as
            well as budgetary constraints.
          </MotionP>
        </div>
        {service &&
          service.map((item, idx) => (
            <section key={idx} className="p-[5%]">
              <MotionDiv
                initial="initial"
                whileInView="animate"
                className="grid grid-cols-1 md:grid-cols-2 gap-5 "
              >
                <div className="text-center col-span-1 md:col-span-2 mb-14">
                  <MotionH1
                    variants={variantUpslide}
                    custom={3}
                    className="text-xs mb-5"
                  >
                    OUR SERVICE
                  </MotionH1>
                  <MotionH1
                    variants={variantUpslide}
                    custom={4}
                    className="text-2xl sm:text-4xl text-red-700 font-extrabold mb-2 overflow-hidden"
                  >
                    {item?.fields.tittle}
                  </MotionH1>
                  <MotionP
                    variants={variantUpslide}
                    custom={4}
                    className="text-[#063852] font-extrabold overflow-hidden"
                  >
                    {item?.fields.subtitle}
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
                          (item?.fields.image1 as IAsset).fields.file.url
                        }`}
                        width={400}
                        height={200}
                        alt="service-image"
                      />{" "}
                    </div>
                    <div className="inline-block content-end">
                      <MotionImg
                        variants={variantOpacity}
                        custom={2}
                        className={`rounded-md w-full object-cover h-auto`}
                        src={`https:${
                          (item?.fields.image2 as IAsset).fields.file.url
                        }`}
                        width={400}
                        height={200}
                        alt="service-image"
                      />{" "}
                    </div>
                    <MotionImg
                      variants={variantOpacity}
                      custom={3}
                      className={`rounded-md w-full object-cover h-auto`}
                      src={`https:${
                        (item?.fields.image3 as IAsset).fields.file.url
                      }`}
                      width={400}
                      height={200}
                      alt="service-image"
                    />{" "}
                    <MotionImg
                      variants={variantOpacity}
                      custom={4}
                      className={`rounded-md w-full object-cover h-auto`}
                      src={`https:${
                        (item?.fields.image4 as IAsset).fields.file.url
                      }`}
                      width={400}
                      height={200}
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
                    <RichText document={item?.fields.opening} />
                    <div className="m-1"></div>
                    <RichText document={item?.fields.body} />
                  </MotionDiv>
                  <MotionDiv
                    variants={variantOpacity}
                    custom={6}
                    className="flex flex-col sm:flex-row justify-between mt-3"
                  >
                    <p className="text-md lg:text-lg font-extrabold italic mb-5 sm:mb-0 content-center text-red-700">
                      Start from Rp{item?.fields.price}/m<sup>2</sup>
                    </p>
                    <RedButton
                      href={"/team#contact-form"}
                      tittle={"Contact us"}
                    />
                  </MotionDiv>
                </div>
              </MotionDiv>
            </section>
          ))}
      </div>
    </MotionDiv>
  );
}
