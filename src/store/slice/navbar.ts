import { createSlice } from "@reduxjs/toolkit";

export interface INavbar {
  isOpen: boolean;
  isScroll: boolean;
  navItem: { id: number; navtext: string; href: string }[];
}

const initialState = {
  isOpen: false,
  isScroll: false,
  navItem: [
    { id: 1, navtext: "Home", href: "/" },
    { id: 2, navtext: "About", href: "/about" },
    { id: 3, navtext: "Service", href: "/service" },
    { id: 4, navtext: "Team", href: "/team" },
  ],
};

export const counterSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    closeNav: (state: INavbar) => {
      state.isOpen = false;
    },
    openNav: (state: INavbar) => {
      state.isOpen = true;
    },
    scrollNav: (state: INavbar) => {
      if (window.scrollY > 0) {
        state.isScroll = true;
      } else {
        state.isScroll = false;
      }
    },
  },
});

export const { closeNav, openNav, scrollNav } = counterSlice.actions;
export default counterSlice.reducer;
