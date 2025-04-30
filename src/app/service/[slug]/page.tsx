import { getServiceContentfulbySlug } from "@/api/api";
import { Entry } from "contentful";
import { TypeServiceSkeleton } from "@/types/contentful.type";
import HeaderHeadline from "@/components/home/headerHeadline";
import ServiceCardHome from "@/components/service/serviceCardHome";
import ServiceContentfulPage from "@/components/service/components/serviceContentfulPage";
import HeaderPages from "@/components/home/headerPages";
import PageNotFound from "@/components/not-found/pageNotFound";

export default async function ServiceSlugPage({
  params,
}: {
  params: { slug: string };
}) {
  const service = await getServiceContentfulbySlug(params.slug);

  if (service !== undefined) {
    const services: Entry<TypeServiceSkeleton, undefined, string>[] = [];
    services.push(service);

    return (
      <div>
        <HeaderPages
          img={"/service.jpg"}
          tittle={`${services[0]?.fields.tittle}`}
        />
        <HeaderHeadline />
        <section className="flex justify-center bg-[whitesmoke] px-[5%]">
          <div className="lg:max-w-7xl">
            <ServiceContentfulPage services={services} />
          </div>
        </section>
        <ServiceCardHome />
      </div>
    );
  } else {
    return (
      <div>
        <HeaderPages img={"/service.jpg"} tittle="Our Service" />
        <HeaderHeadline />
        <PageNotFound />
      </div>
    );
  }
}
