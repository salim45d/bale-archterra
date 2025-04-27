import HeaderImages from "@/components/home/headerImages";
import HeaderHeadline from "@/components/home/headerHeadline";
import ServiceAllPage from "@/components/service/servicePage";

export default function ServicesPage() {
  return (
    <div className="overflow-hidden">
      <HeaderImages img={"/service.jpg"} tittle={"Our Service"} />
      <HeaderHeadline />
      <ServiceAllPage />
    </div>
  );
}
