import AboutHome from "@/components/about/aboutHome";
import HeaderHome from "@/components/home/headerHome";
import Testimonials from "@/components/testimonials/testimonials";
import TeamsHome from "@/components/team/teamHome";
import HeaderHeadline from "@/components/home/headerHeadline";
import ServiceCardHome from "@/components/service/serviceCardHome";
import WelcomeToHome from "@/components/home/welcomeToHome";

export default function HomeView() {
  return (
    <div className="overflow-hidden">
      <HeaderHome />
      <HeaderHeadline />
      <WelcomeToHome />
      <AboutHome display={""} />
      <ServiceCardHome />
      <TeamsHome />
      <Testimonials classHome={"bg-[whitesmoke]"} classTeam={"p-0 sm:p-[3%]"} />
    </div>
  );
}
