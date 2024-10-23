import { getTeam } from "@/api/api";
import { ITeam } from "./team.interface";

export default async function TeamSection() {
  const teams: ITeam = await getTeam();

  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-2 lg:grid-cols-4 p-[4%] gap-1 sm:gap-2 lg:max-w-7xl">
        {teams?.results.map((team, idx) => (
          <div
            key={idx}
            className="bg-[whitesmoke] rounded-md p-2 flex justify-between flex-col hover:bg-[#063852] hover:text-white hover:scale-[1.02]"
          >
            <div className="flex justify-center p-5">
              <img
                alt="Team-profile"
                src={team.picture.large}
                className="rounded-full sm:w-28 w-20 h-20 sm:h-28 ring-2 p-1 ring-gray-300"
              />
            </div>
            <div>
              <h2 className="text-red-700 font-bold text-md sm:text-lg text-center">
                {team.name.first} {team.name.last}
              </h2>{" "}
              <p className="text-xs sm:text-sm md:text-md mb-2 text-center">
                "Hei everyone, My name is {team.name.first}. I have been working
                with Bale Archterra for {team.registered.age} years."
              </p>
              <div>
                <p className="text-xs sm:text-sm font-bold">Contact me:</p>
                <p className="text-[9px] sm:text-xs">{team.email}</p>
                <p className="text-[9px] sm:text-xs">{team.phone}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
