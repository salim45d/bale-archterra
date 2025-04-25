import AboutHome from "@/components/about/aboutHome";
import HeaderHome from "@/components/header/headerHome";
import Headline from "@/components/headline/headline";
import ServiceHome from "@/components/service/serviceHome";
import SummaryHome from "@/components/header/summaryHome";
import TeamHome from "@/components/team/teamHome";
import Testimonials from "@/components/testimonials/testimonials";

export default function HomeView() {
  return (
    <div className="overflow-hidden">
      <HeaderHome />
      <Headline />
      <SummaryHome />
      <AboutHome class={""} display={""} />
      <ServiceHome />
      <TeamHome class={""} display={""} grid={"sm:grid-cols-2"} />
      <Testimonials classHome={"bg-[whitesmoke] p-[5%]"} classTeam={""} />
    </div>
  );
}
