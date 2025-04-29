import TeamsTittle from "./components/teamsTitle";
import TeamsMemberCardSwiper from "./components/teamsCardWiper";

export default function TeamPages() {
  return (
    <>
      <section className={`bg-[whitesmoke] flex justify-center`}>
        <div className="flex justify-center content-center p-[5%] pb-24 lg:max-w-7xl">
          <TeamsTittle display={"hidden"} />
        </div>
      </section>
      <TeamsMemberCardSwiper />
    </>
  );
}
