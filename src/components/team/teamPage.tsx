import TeamsMember from "./components/teamsMember";
import TeamsTittle from "./teamsTitle";

export default function TeamPages() {
  return (
    <>
      <section className={`bg-[whitesmoke] flex justify-center`}>
        <div className="flex justify-center content-center p-[5%] lg:max-w-7xl">
          <TeamsTittle display={"hidden"} />
        </div>
      </section>
      <TeamsMember />
    </>
  );
}
