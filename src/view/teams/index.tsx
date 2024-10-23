import ContactSection from "@/components/team/contact-section";
import Header from "@/components/header/header";
import Headline from "@/components/headline/headline";
import TeamHome from "@/components/team/teamHome";
import Testimonials from "@/components/testimonials/testimonials";
import TeamSection from "@/components/team/teamSection";

export default function TeamsPage() {
  return (
    <div>
      <Header img={"/team.jpg"} tittle={"Our Team"} />
      <Headline />
      <TeamHome class={"bg-[whitesmoke]"} display={"hidden"} grid={""} />
      <TeamSection />
      <Testimonials class={"bg-white"} />
      <ContactSection />
    </div>
  );
}
