import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export interface INotify {
  message: string;
}

interface IMessage {
  payload: string;
}

const initialState = {
  message: "",
};

export const counterSlice = createSlice({
  name: "notify",
  initialState,
  reducers: {
    notify: (state: INotify, action: IMessage) => {
      state.message = action.payload;

      toast.error(`${state.message}`, {
        autoClose: false,
        position: "bottom-right",
        theme: "dark",
        closeOnClick: true,
        draggable: true,
        draggableDirection: "y",
      });
    },
  },
});

export const { notify } = counterSlice.actions;
export default counterSlice.reducer;
