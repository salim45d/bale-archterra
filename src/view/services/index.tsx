import Header from "@/components/header/header";
import Headline from "@/components/headline/headline";
import ServiceSectionAll from "@/components/service/serviceAll";

export default function ServicesPage() {
  return (
    <div>
      <Header img={"/service.jpg"} tittle={"Our Service"} />
      <Headline />
      <ServiceSectionAll />
    </div>
  );
}
