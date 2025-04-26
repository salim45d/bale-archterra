"use client";
import { useDispatch, useSelector } from "react-redux";
import { NavContacticon, NavSocialIcon } from "./components/navicon";
import { INavbar, scrollNav } from "@/store/slice/navbar";
import MobileButton from "./components/mobileButton";
import MobileMenu from "./components/mobileMenu";
import Navlink from "./components/navlink";
import Navlogo from "./components/navlogo";
import { useEffect } from "react";

export default function Navbar() {
  const navbar = useSelector((state: { navbar: INavbar }) => state.navbar);
  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener("scroll", () => dispatch(scrollNav()));
  }, [navbar]);

  return (
    <div>
      <div className="hidden relative sm:flex flex-col justify-center">
        <div className="text-white bg-black py-1 px-[2%] md:px-[4%] flex justify-between">
          <NavContacticon
            class={"flex-col sm:flex-row text-xl font-extralight"}
            classText={"text-sm sm:text-xs"}
          />
          <NavSocialIcon class={"justify-around text-3xl sm:text-xl "} />
        </div>
        <nav
          className={`transitions fixed py-2 z-10 w-screen ${
            navbar.isScroll ? "bg-black top-0" : "bg-transparent top-7"
          }`}
        >
          <div className="flex text-white px-[5%] justify-between">
            <Navlogo />
            <Navlink />
          </div>
        </nav>
      </div>
      {/* Mobile Navbar */}
      <nav
        className={`sm:hidden fixed top-0 z-10 w-screen bg-black pl-5 transitions
          ${navbar.isScroll ? "py-2" : "py-3"}`}
      >
        <div className="md:hidden relative flex flex-row items-center text-white">
          <Navlogo />
          <MobileButton />
          <MobileMenu />
        </div>
      </nav>
    </div>
  );
}
