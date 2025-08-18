import Testimonials from "@/components/testimonials/testimonials";
import TeamPages from "@/components/team/teamPage";
import HeaderPages from "@/components/home/headerPages";

export default function TeamsPage() {
  return (
    <div className="overflow-hidden">
      <HeaderPages img={"/team.jpg"} />
      <TeamPages />
      <Testimonials
        classHome={""}
        classTeam={"bg-[whitesmoke] p-[5%] rounded-xl"}
      />
    </div>
  );
}
