import { createSlice } from "@reduxjs/toolkit";

export interface IModal {
  isOpen: boolean;
}

const initialState = {
  isOpen: false,
};

export const counterSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    closeModal: (state: IModal) => {
      state.isOpen = false;
    },

    openModal: (state: IModal) => {
      state.isOpen = true;
    },
  },
});

export const { closeModal, openModal } = counterSlice.actions;
export default counterSlice.reducer;
