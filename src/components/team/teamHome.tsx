import { getTeam } from "@/api/api";
import RedButton from "@/components/button/redButton";
import { ITeam } from "@/types/team.interface";
import {
  MotionDiv,
  MotionH1,
  MotionP,
  variantOpacityX,
  variantUpslide,
  variantOpacity,
} from "../motion/motion";
import { animate } from "motion";

export default async function TeamHome(Prop: {
  class: string;
  display: string;
  grid: string;
}) {
  const teams: ITeam = await getTeam();

  return (
    <section className={`${Prop.class} flex justify-center`}>
      <div className="flex justify-center content-center p-[5%] lg:max-w-7xl">
        <div
          className={`grid ${Prop.grid} grid-cols-1 bg-[whitesmoke] p-5 sm:p-8 gap-5 sm:gap-8
        lg:gap-5`}
        >
          <div
            className={`flex flex-wrap content-center justify-around ${Prop.display}`}
          >
            {teams?.results.map((team, idx) => (
              <MotionDiv
                key={idx}
                variants={variantOpacity}
                custom={idx}
                initial="initial"
                whileInView="animate"
                className={`m-1 md:m-5`}
              >
                <img
                  alt="Team-profile"
                  src={team.picture.medium}
                  className="rounded-full w-16 sm:w-24 h-16 sm:h-24 hover:scale-110 ring-2 p-1 ring-gray-300"
                />
                <p className="text-red-700 text-sm font-bold mt-1 text-center">
                  {team.name.first}
                </p>
              </MotionDiv>
            ))}{" "}
          </div>
          <MotionDiv
            className="text-center"
            initial="initial"
            whileInView="animate"
          >
            <MotionH1
              variants={variantUpslide}
              custom={8}
              className="text-xs mb-5"
            >
              OUR TEAM
            </MotionH1>
            <MotionH1
              variants={variantUpslide}
              custom={9}
              className="text-2xl sm:text-4xl text-red-700 font-extrabold mb-10"
            >
              Bale Archterra Specialist Team
            </MotionH1>
            <MotionP
              variants={variantOpacityX}
              custom={10}
              className="text-justify"
            >
              Fuelled by unbound creativity and cutting-edge technology, our
              Architectural, Civil and Interior Design Services are spearheaded
              to exceed the expectations of all those in need of an innovation,
              reliability and experience of a lifetime. Time and again, we have
              proved our mettle as the finest team of architects, by displaying
              an outstanding track-record of design-excellence, coupled with
              service efficiency, responsiveness and a strong commitment towards
              project deadlines as well as budgetary constraints. We welcome you
              to the Bale Archterra.
            </MotionP>
            <MotionDiv
              variants={variantOpacityX}
              custom={11}
              className={`${Prop.display} text-right mt-10`}
            >
              <RedButton href={"/team"} tittle={"Find more"} />
            </MotionDiv>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
}
