import AboutHome from "@/components/about/aboutHome";
import HeaderHome from "@/components/home/headerHome";
import Testimonials from "@/components/testimonials/testimonials";
import TeamsHome from "@/components/team/teamHome";
import HeaderHeadline from "@/components/home/headerHeadline";
import VideoModalHome from "@/components/home/videoHome";
import ServiceCardHome from "@/components/service/serviceCardHome";

export default function HomeView() {
  return (
    <div className="overflow-hidden">
      <HeaderHome />
      <HeaderHeadline />
      <VideoModalHome />
      <AboutHome class={""} display={""} />
      <ServiceCardHome />
      <TeamsHome />
      <Testimonials
        classHome={"bg-[whitesmoke] p-[5%]"}
        classTeam={"p-5 sm:p-[3%]"}
      />
    </div>
  );
}
