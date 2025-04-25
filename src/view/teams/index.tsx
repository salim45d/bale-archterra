import ContactSection from "@/components/team/contact-section";
import Header from "@/components/header/header";
import Headline from "@/components/headline/headline";
import TeamHome from "@/components/team/teamHome";
import TeamSection from "@/components/team/teamSection";
import Testimonials from "@/components/testimonials/testimonials";

export default function TeamsPage() {
  return (
    <div className="overflow-hidden">
      <Header img={"/team.jpg"} tittle={"Our Team"} />
      <Headline />
      <TeamHome class={"bg-[whitesmoke]"} display={"hidden"} grid={""} />
      <TeamSection />
      <Testimonials
        classHome={"px-[5%]"}
        classTeam={"bg-[whitesmoke] p-5 sm:p-[5%] rounded-md"}
      />
      <ContactSection />
    </div>
  );
}
