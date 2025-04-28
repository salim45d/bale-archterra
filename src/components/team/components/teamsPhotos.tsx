"use server";
import { getTeam } from "@/api/api";
import { MotionDiv, variantOpacity } from "@/components/motion/motion";
import { ITeam } from "@/types/team.interface";

export default async function TeamPhotos() {
  const teams: ITeam[] = await getTeam();

  return (
    <div className={`flex flex-wrap content-center justify-around`}>
      {teams?.map((team, idx) => (
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
  );
}
