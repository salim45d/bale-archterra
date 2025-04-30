"use client";
import { getTeam } from "@/api/api";
import { MotionDiv, variantOpacity } from "@/components/motion/motion";
import PageNotFound from "@/components/not-found/pageNotFound";
import { notify } from "@/store/slice/notify";
import { ITeams, storeTeams } from "@/store/slice/teams";
import { ITeam } from "@/types/team.interface";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function TeamPhotos() {
  const [teams, setTeams] = useState<ITeam[] | undefined>(undefined);
  const teamsDataStore: ITeam[] | undefined = useSelector(
    (state: { teams: ITeams }) => state.teams.teams
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (teamsDataStore === undefined) {
      const fetchData = async () => {
        const data = await getTeam();
        if (data === undefined) {
          return;
        }

        setTeams(data);
        dispatch(storeTeams(data));
      };

      fetchData();
    } else if (teamsDataStore.length > 0) {
      setTeams(teamsDataStore);
    }
  }, []);

  if (teams === undefined) {
    return (
      <div className="-m-[5%]">
        <PageNotFound />;
      </div>
    );
  } else {
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
}
