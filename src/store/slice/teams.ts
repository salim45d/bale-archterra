import { ITeam } from "@/types/team.interface";
import { createSlice } from "@reduxjs/toolkit";

export interface ITeams {
  teams: ITeam[];
}

interface IMessage {
  payload: ITeam[];
}

const initialState = {
  teams: [],
};

export const counterSlice = createSlice({
  name: "teams",
  initialState,
  reducers: {
    storeTeams: (state: ITeams, action: IMessage) => {
      state.teams = action.payload;
    },
  },
});

export const { storeTeams } = counterSlice.actions;
export default counterSlice.reducer;
