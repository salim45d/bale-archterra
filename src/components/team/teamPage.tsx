import TeamHome from "./components/teamHome";
import TeamSection from "./components/teamSection";

export default function TeamPages() {
  return (
    <>
      <TeamHome class={"bg-[whitesmoke]"} display={"hidden"} grid={""} />
      <TeamSection />
    </>
  );
}
