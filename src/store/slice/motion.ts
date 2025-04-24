import { createSlice } from "@reduxjs/toolkit";

export interface IMotion {
  motionUpslide: {
    initial: { y: string };
    animate: (custom: number) => {
      y: string;
      transition: {
        duration: number;
        delay: number;
        ease: number[];
      };
    };
  };
  motionOpacity: {
    initial: { opacity: number; y: string };
    animate: (custom: number) => {
      y: number;
      opacity: number;
      transition: {
        duration: number;
        ease: number[];
      };
    };
  };
  motionOpacityX: {
    initial: { opacity: number; y: string };
    animate: (custom: number) => {
      y: number;
      opacity: number;
      transition: {
        duration: number;
        ease: number[];
      };
    };
  };
}

const initialState = {
  motionUpslide: {
    initial: { y: "100%" },
    animate: (custom: number) => ({
      y: "0%",
      transition: {
        duration: 1.5,
        delay: 0.2 * custom,
        ease: [0.34, 1.56, 0.64, 1],
      },
    }),
  },
  motionOpacity: {
    initial: { opacity: 0, y: "10%" },
    animate: (custom: number) => ({
      y: 1,
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: [0.34, 1.56, 0.64, 1],
        delay: 0.2 * custom,
      },
    }),
  },
  motionOpacityX: {
    initial: { opacity: 0, x: "10%" },
    animate: (custom: number) => ({
      x: 1,
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: [0.34, 1.56, 0.64, 1],
        delay: 0.2 * custom,
      },
    }),
  },
};

export const counterSlice = createSlice({
  name: "motion",
  initialState,
  reducers: {},
});

export const {} = counterSlice.actions;
export default counterSlice.reducer;
