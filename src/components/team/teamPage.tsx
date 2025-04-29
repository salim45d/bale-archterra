import TeamsTittle from "./components/teamsTitle";
import TeamsMemberCardSwiper from "./components/teamsCardWiper";

export default function TeamPages() {
  return (
    <>
      <section className={`bg-[whitesmoke] flex justify-center p-[5%]`}>
        <div className="flex justify-center content-center max-w-7xl">
          <TeamsTittle display={"hidden"} />
        </div>
      </section>
      <TeamsMemberCardSwiper />
    </>
  );
}
