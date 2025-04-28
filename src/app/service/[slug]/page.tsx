import { getServiceContentfulbySlug } from "@/api/api";
import { Entry } from "contentful";
import { TypeServiceSkeleton } from "@/types/contentful.type";
import HeaderImages from "@/components/home/headerImages";
import HeaderHeadline from "@/components/home/headerHeadline";
import ServiceCardHome from "@/components/service/serviceCardHome";
import ServiceContentfulPage from "@/components/service/components/serviceContentfulPage";

export default async function ServiceSlugPage({
  params,
}: {
  params: { slug: string };
}) {
  const service = await getServiceContentfulbySlug(params.slug);

  const services: Entry<TypeServiceSkeleton, undefined, string>[] = [];

  if (service !== undefined) {
    services.push(service);
  }

  return (
    <div>
      <HeaderImages
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
}
