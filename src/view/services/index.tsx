import ServiceAllPage from "@/components/service/servicePage";
import HeaderPages from "@/components/home/headerPages";

export default async function ServicesPage() {
  return (
    <div className="overflow-hidden">
      <HeaderPages img={"/service.jpg"} />
      <ServiceAllPage />
    </div>
  );
}
