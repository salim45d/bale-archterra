import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export interface IReduxSlice {
  isClick: boolean;
  isScroll: boolean;
  isModal: boolean;
  navItem: { id: number; navtext: string; href: string }[];
}

const initialState = {
  isClick: false,
  isScroll: false,
  isModal: false,
  navItem: [
    { id: 1, navtext: "Home", href: "/" },
    { id: 2, navtext: "About", href: "/about" },
    { id: 3, navtext: "Service", href: "/service" },
    { id: 4, navtext: "Team", href: "/team" },
  ],
};

export const counterSlice = createSlice({
  name: "click",
  initialState,
  reducers: {
    closeNav: (state: IReduxSlice) => {
      state.isClick = false;
    },
    openNav: (state: IReduxSlice) => {
      state.isClick = true;
    },
    scrollNav: (state: IReduxSlice) => {
      if (window.scrollY > 0) {
        state.isScroll = true;
      } else {
        state.isScroll = false;
      }
    },
    closeModal: (state: IReduxSlice) => {
      state.isModal = false;
    },

    openModal: (state: IReduxSlice) => {
      state.isModal = true;
    },

    notifySend: () => {
      toast.info("Send Data!", {
        autoClose: 1000,
        theme: "colored",
        position: "bottom-left",
      });
    },
  },
});

export const {
  closeNav,
  openNav,
  scrollNav,
  notifySend,
  closeModal,
  openModal,
} = counterSlice.actions;
export default counterSlice.reducer;
