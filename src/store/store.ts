import { configureStore } from "@reduxjs/toolkit";
import click from "./slice/slice";

export const store = configureStore({
  reducer: {
    click,
  },
});
