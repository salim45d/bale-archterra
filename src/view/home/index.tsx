import AboutHome from "@/components/about/aboutHome";
import HeaderHome from "@/components/header/headerHome";
import Headline from "@/components/headline/headline";
import ServiceHome from "@/components/service/serviceHome";
import SummaryHome from "@/components/header/summaryHome";
import Testimonials from "@/components/testimonials/testimonials";
import TeamHome from "@/components/team/components/teamHome";

export default function HomeView() {
  return (
    <div className="overflow-hidden">
      <HeaderHome />
      <Headline />
      <SummaryHome />
      <AboutHome class={""} display={""} />
      <ServiceHome />
      <TeamHome
        class={""}
        display={""}
        grid={"sm:grid-cols-2 p-5 sm:p-8 gap-5 sm:gap-8 lg:gap-5"}
      />
      <Testimonials
        classHome={"bg-[whitesmoke] p-[5%]"}
        classTeam={"p-5 sm:p-[3%]"}
      />
    </div>
  );
}
