import Header from "@/components/header/header";
import Headline from "@/components/headline/headline";
import History from "@/components/about/history";
import AboutHome from "@/components/about/aboutHome";
import TeamSection from "@/components/team/teamSection";
import Team from "@/components/about/team";
import Culture from "@/components/about/culture";
import Summary from "@/components/about/summary";

export default function AboutPage() {
  return (
    <div>
      <Header img={"/building.jpg"} tittle={"About us"} />
      <Headline />
      <AboutHome class={"bg-[whitesmoke]"} display={"hidden"} />
      <History />
      <Summary />
      <Team />
      <TeamSection />
      <Culture />
    </div>
  );
}
