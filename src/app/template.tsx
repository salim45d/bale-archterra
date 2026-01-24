"use client";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import BannerContactUS from "@/components/footer/banner";
import NavbarTop from "@/components/navbar/navbarTop";
import AOS from "aos";
import "react-toastify/dist/ReactToastify.css";
import "aos/dist/aos.css";

export default function Template({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <div className="overflow-hidden">
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
