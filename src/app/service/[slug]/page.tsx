import { getServiceContentfulbySlug } from "@/api/api";
import RedButton from "@/components/button/redButton";
import Header from "@/components/header/header";
import Headline from "@/components/headline/headline";
import RichText from "@/components/richtext/richText";
import ServiceHome from "@/components/service/serviceHome";
import { IAsset } from "@/contentful/types/service.type";

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
        <div className="lg:max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
            <div className="text-center col-span-1 md:col-span-2">
              <h1 className="text-xs mb-5">OUR SERVICE</h1>
              <h1 className="text-2xl sm:text-4xl text-red-700 font-extrabold">
                {service?.fields.tittle}
              </h1>
              <p className="text-[#063852] font-extrabold mb-5">
                {service?.fields.subtitle}
              </p>
            </div>
            <div className="px-2 md:px-0 lg:px-5">
              <div className="grid grid-cols-2 gap-2">
                <div className="inline-block content-end">
                  <img
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
                  <img
                    className={`rounded-md w-full object-cover h-auto`}
                    src={`https:${
                      (service?.fields.image2 as IAsset).fields.file.url
                    }`}
                    width={500}
                    height={400}
                    alt="service-image"
                  />{" "}
                </div>
                <img
                  className={`rounded-md w-full object-cover h-auto`}
                  src={`https:${
                    (service?.fields.image3 as IAsset).fields.file.url
                  }`}
                  width={500}
                  height={400}
                  alt="service-image"
                />{" "}
                <img
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
              <div className="text-justify">
                <RichText document={service?.fields.opening} />
                <div className="m-1"></div>
                <RichText document={service?.fields.body} />
              </div>
              <div className="flex flex-col sm:flex-row justify-between mt-3">
                <p className="text-md lg:text-lg font-extrabold italic mb-5 sm:mb-0 content-center text-red-700">
                  Start from Rp{service?.fields.price}/m<sup>2</sup>
                </p>
                <RedButton href={"/team#contact-form"} tittle={"Contact us"} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <ServiceHome />
    </div>
  );
}
