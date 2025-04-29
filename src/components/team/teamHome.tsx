import { MotionDiv, variantOpacityX } from "../motion/motion";
import TeamPhotos from "./components/teamsPhotos";
import TeamsTittle from "./components/teamsTitle";

export default function TeamsHome() {
  return (
    <section className={`flex justify-center content-center p-[5%]`}>
      <MotionDiv
        variants={variantOpacityX}
        custom={0}
        initial="initial"
        whileInView="animate"
        className={`grid grid-cols-1 sm:grid-cols-2 p-[5%] gap-5 sm:gap-8 lg:gap-5 bg-[whitesmoke] lg:max-w-7xl overflow-hidden rounded-xl`}
      >
        <TeamPhotos />
        <TeamsTittle display={""} />
      </MotionDiv>
    </section>
  );
}
