import TeamPhotos from "./components/teamsPhotos";
import TeamsTittle from "./components/teamsTitle";

export default function TeamsHome() {
  return (
    <section className="flex justify-center content-center p-[5%]">
      <div
        data-aos="flip-right"
        className={`grid grid-cols-1 md:grid-cols-2 p-5 gap-5 sm:gap-8 lg:gap-5 max-w-7xl overflow-hidden bg-red-100 rounded-xl`}
      >
        <TeamPhotos />
        <TeamsTittle display={""} />
      </div>
    </section>
  );
}
