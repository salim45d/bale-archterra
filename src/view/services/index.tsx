import HeaderHeadline from "@/components/home/headerHeadline";
import ServiceAllPage from "@/components/service/servicePage";
import HeaderPages from "@/components/home/headerPages";

export default function ServicesPage() {
  return (
    <div className="overflow-hidden">
      <HeaderPages img={"/service.jpg"} tittle={"Our Service"} />
      <HeaderHeadline />
      <ServiceAllPage />
    </div>
  );
}
