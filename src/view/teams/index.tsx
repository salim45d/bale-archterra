import ContactSection from "@/components/team/contact-section";
import Header from "@/components/header/header";
import Headline from "@/components/headline/headline";
import Testimonials from "@/components/testimonials/testimonials";
import TeamPages from "@/components/team/teamPage";

export default function TeamsPage() {
  return (
    <div className="overflow-hidden">
      <Header img={"/team.jpg"} tittle={"Our Team"} />
      <Headline />
      <TeamPages />
      <Testimonials
        classHome={"px-[5%]"}
        classTeam={"bg-[whitesmoke] p-5 sm:p-[5%] rounded-md"}
      />
      <ContactSection />
    </div>
  );
}
