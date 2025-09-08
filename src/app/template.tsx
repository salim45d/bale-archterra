"use client";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import { ToastContainer } from "react-toastify";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import BannerContactUS from "@/components/footer/banner";
import "react-toastify/dist/ReactToastify.css";
import NavbarTop from "@/components/navbar/navbarTop";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Provider store={store}>
        <div className="flex justify-center bg-black px-[4%]">
          <NavbarTop />
        </div>
        <Navbar />
        {children}
        <ToastContainer />
        <BannerContactUS />
        <Footer />
      </Provider>
    </div>
  );
}
