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
          className={
            navbar.isScroll
              ? "bg-black transitions fixed py-1 top-0 z-10 w-screen"
              : "bg-transparent  transitions fixed top-7 py-2 z-10 w-screen"
          }
        >
          <div className="flex text-white px-[5%] justify-between">
            <Navlogo />
            <Navlink
              class={"justify-between  w-80"}
              classLi={"hover:scale-110 overflow-hidden"}
            />
          </div>
        </nav>
      </div>
      {/* Mobile Navbar */}
      <nav
        className={
          navbar.isScroll
            ? "sm:hidden fixed top-0 py-1 z-10 w-screen bg-black pl-5 transitions"
            : "sm:hidden fixed top-0 py-3 z-10 w-screen bg-black pl-5 transitions"
        }
      >
        <div className="sm:hidden relative flex flex-row items-center text-white">
          <Navlogo />
          <MobileButton />
          <MobileMenu />
        </div>
      </nav>
    </div>
  );
}
