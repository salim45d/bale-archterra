import { configureStore } from "@reduxjs/toolkit";
import notify from "./slice/notify";
import modal from "./slice/modal";
import navbar from "./slice/navbar";
import teams from "./slice/teams";

export const store = configureStore({
  reducer: {
    modal,
    navbar,
    notify,
    teams,
  },
});
