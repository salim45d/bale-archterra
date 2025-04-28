import ContactSection from "@/components/team/contact-section";
import Testimonials from "@/components/testimonials/testimonials";
import TeamPages from "@/components/team/teamPage";
import HeaderImages from "@/components/home/headerImages";
import HeaderHeadline from "@/components/home/headerHeadline";

export default function TeamsPage() {
  return (
    <div className="overflow-hidden">
      <HeaderImages img={"/team.jpg"} tittle={"Our Team"} />
      <HeaderHeadline />
      <TeamPages />
      <Testimonials
        classHome={"px-[5%]"}
        classTeam={"bg-[whitesmoke] p-5 sm:p-[5%] rounded-xl"}
      />
      <ContactSection />
    </div>
  );
}
