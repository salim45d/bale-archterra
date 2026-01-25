import { getServiceContentful, getServiceContentfulbySlug } from "@/api/api";
import { Entry } from "contentful";
import { TypeServiceSkeleton } from "@/types/contentful.type";
import ServiceContentfulPage from "@/components/service/components/serviceContentfulPage";
import HeaderPages from "@/components/home/headerPages";
import PageNotFound from "@/components/not-found/pageNotFound";
import ServiceHeadline from "@/components/service/serviceHeadline";

export default async function ServiceSlugPage({
  params,
}: {
  params: { slug: string };
}) {
  const service = await getServiceContentfulbySlug(params.slug);
  const serviceHeadline = await getServiceContentful();

  if (service !== undefined) {
    const services: Entry<TypeServiceSkeleton, undefined, string>[] = [];
    services.push(service);

    return (
      <div>
        <HeaderPages img={"/about-building-large.jpg"} />
        <ServiceHeadline serviceHeadline={serviceHeadline} />
        <section className="flex justify-center bg-[whitesmoke] px-[5%]">
          <div className="lg:max-w-7xl">
            <ServiceContentfulPage services={services} />
          </div>
        </section>
      </div>
    );
  } else {
    return (
      <div>
        <HeaderPages img={"/about-building-large.jpg"} />
        <ServiceHeadline serviceHeadline={serviceHeadline} />
        <div className="pt-[5%]">
          <PageNotFound />
        </div>
      </div>
    );
  }
}
