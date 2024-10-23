import { getServiceContentful } from "@/api/api";
import RedButton from "@/components/button/redButton";
import RichText from "@/components/richtext/richText";
import { IAsset } from "@/contentful/types/service.type";
import { Asset, UnresolvedLink } from "contentful";

export default async function ServiceSectionAll() {
  const service = await getServiceContentful();
  return (
    <div className="flex justify-center content-center p-[5%] bg-[whitesmoke]">
      <div className="lg:max-w-7xl">
        <div className="text-center px-[5%]">
          <p className="text-xs mb-5">OUR SERVICE</p>
          <h1 className="text-2xl sm:text-4xl text-red-700 font-extrabold">
            Bale Archterra Provide Best Service
          </h1>
          <p className="mt-5 text-justify">
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
          </p>
        </div>
        {service &&
          service.map((item, idx) => (
            <section key={idx} className="p-[5%]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
                <div className="text-center col-span-1 md:col-span-2">
                  <h1 className="text-xs mb-5">OUR SERVICE</h1>
                  <h1 className="text-2xl sm:text-4xl text-red-700 font-extrabold">
                    {item?.fields.tittle}
                  </h1>
                  <p className="text-[#063852] font-extrabold mb-5">
                    {item?.fields.subtitle}
                  </p>
                </div>
                <div className="px-2 md:px-0 lg:px-5">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="inline-block content-end">
                      <img
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
                      <img
                        className={`rounded-md w-full object-cover h-auto`}
                        src={`https:${
                          (item?.fields.image2 as IAsset).fields.file.url
                        }`}
                        width={400}
                        height={200}
                        alt="service-image"
                      />{" "}
                    </div>
                    <img
                      className={`rounded-md w-full object-cover h-auto`}
                      src={`https:${
                        (item?.fields.image3 as IAsset).fields.file.url
                      }`}
                      width={400}
                      height={200}
                      alt="service-image"
                    />{" "}
                    <img
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
                  <div className="text-justify">
                    <RichText document={item?.fields.opening} />
                    <div className="m-1"></div>
                    <RichText document={item?.fields.body} />
                  </div>
                  <div className="flex flex-col sm:flex-row justify-between mt-3">
                    <p className="text-md lg:text-lg font-extrabold italic mb-5 sm:mb-0 content-center text-red-700">
                      Start from Rp{item?.fields.price}/m<sup>2</sup>
                    </p>
                    <RedButton
                      href={"/team#contact-form"}
                      tittle={"Contact us"}
                    />
                  </div>
                </div>
              </div>
            </section>
          ))}
      </div>
    </div>
  );
}
