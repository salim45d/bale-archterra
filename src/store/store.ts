import { configureStore } from "@reduxjs/toolkit";
import notify from "./slice/notify";
import modal from "./slice/modal";
import navbar from "./slice/navbar";
import motion from "./slice/motion";

export const store = configureStore({
  reducer: {
    modal,
    navbar,
    notify,
    motion,
  },
});
