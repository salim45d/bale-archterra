import { getServiceContentful } from "@/api/api";
import ITitle from "@/types/title.interface";
import TitleSlice from "../tittle/title";
import ServiceContentfulPage from "./components/serviceContentfulPage";

export default async function ServiceAllPage() {
  const services = await getServiceContentful();

  const title: ITitle = {
    subtitle: "OUR SERVICE",
    title: "Bale Archterra Provide Best Service",
    quote: `"Look for contruction services with a proven back record of success
              in plan and build better properties"`,
  };
  return (
    <div className="flex justify-center content-center px-[5%] pt-[5%]">
      <div className="max-w-7xl">
        <div className="text-center" data-aos="flip-right">
          <TitleSlice
            subtitle={title.subtitle}
            title={title.title}
            quote={title.quote}
          />
          <p className="text-justify lg:px-[10%]">
            Look for contruction services with a proven back record of success
            in plan and build better properties. Fuelled by unbound creativity
            and cutting-edge technology, our Architectural, Civil and Interior
            Design Services are spearheaded to exceed the expectations of all
            those in need of an innovation, reliability and experience of a
            lifetime. Time and again, we have proved our mettle as the finest
            construction service firm, by displaying an outstanding track-record
            of design-excellence, coupled with service efficiency,
            responsiveness and a strong commitment towards project deadlines as
            well as budgetary constraints. Look for contruction services with a
            proven back record of success in plan and build better properties.
            Fuelled by unbound creativity and cutting-edge technology, our
            Architectural, Civil and Interior Design Services are spearheaded to
            exceed the expectations of all those in need of an innovation,
            reliability and experience of a lifetime. Time and again, we have
            proved our mettle as the finest construction service firm, by
            displaying an outstanding track-record of design-excellence, coupled
            with service efficiency, responsiveness and a strong commitment
            towards project deadlines as well as budgetary constraints. Time and
            again, we have proved our mettle as the finest construction service
            firm, by displaying an outstanding track-record of
            design-excellence, coupled with service efficiency, responsiveness
            and a strong commitment towards project deadlines as well as
            budgetary constraints.
          </p>
        </div>
        <section className="mt-[5%]">
          <ServiceContentfulPage services={services} />
        </section>
      </div>
    </div>
  );
}
