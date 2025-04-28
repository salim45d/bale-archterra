import { getTeam } from "@/api/api";
import TeamsTittle from "./components/teamsTitle";
import TeamsMemberCardSwiper from "./components/teamsCardWiper";
import { teams } from "@/types/team.interface";

export default async function TeamPages() {
  // const teams = await getTeam();

  return (
    <>
      <section className={`bg-[whitesmoke] flex justify-center`}>
        <div className="flex justify-center content-center p-[5%] pb-24 lg:max-w-7xl">
          <TeamsTittle display={"hidden"} />
        </div>
      </section>
      <TeamsMemberCardSwiper teams={teams} />
    </>
  );
}
