import ContactSection from "@/components/team/contact-section";
import Testimonials from "@/components/testimonials/testimonials";
import TeamPages from "@/components/team/teamPage";
import HeaderHeadline from "@/components/home/headerHeadline";
import HeaderPages from "@/components/home/headerPages";

export default function TeamsPage() {
  return (
    <div className="overflow-hidden">
      <HeaderPages img={"/team.jpg"} tittle={"Our Team"} />
      <HeaderHeadline />
      <TeamPages />
      <Testimonials
        classHome={""}
        classTeam={"bg-[whitesmoke] p-[5%] rounded-xl"}
      />
      <ContactSection />
    </div>
  );
}
