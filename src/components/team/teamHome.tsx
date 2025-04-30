import { MotionDiv, variantOpacity } from "../motion/motion";
import TeamPhotos from "./components/teamsPhotos";
import TeamsTittle from "./components/teamsTitle";

export default function TeamsHome() {
  return (
    <section className={`flex justify-center content-center p-[5%]`}>
      <MotionDiv
        variants={variantOpacity}
        viewport={{ once: true }}
        custom={1}
        initial="initial"
        whileInView="animate"
        className={`grid grid-cols-1 md:grid-cols-2 p-[5%] gap-5 sm:gap-8 lg:gap-5 bg-[whitesmoke] max-w-7xl overflow-hidden rounded-xl`}
      >
        <TeamPhotos />
        <TeamsTittle display={""} />
      </MotionDiv>
    </section>
  );
}
