"use client";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import { ToastContainer } from "react-toastify";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";

import "react-toastify/dist/ReactToastify.css";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Provider store={store}>
        <Navbar />
        {children}
        <ToastContainer />
        <Footer />
      </Provider>
    </div>
  );
}
