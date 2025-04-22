import { configureStore } from "@reduxjs/toolkit";
import notify from "./slice/notify";
import modal from "./slice/modal";
import navbar from "./slice/navbar";

export const store = configureStore({
  reducer: {
    modal,
    navbar,
    notify,
  },
});
