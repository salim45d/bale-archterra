"use client";
import { useDispatch, useSelector } from "react-redux";
import { INavbar, scrollNav } from "@/store/slice/navbar";
import { useEffect } from "react";
import NavbarDesktop from "./navbarDesktop";
import NavbarMobile from "./navbarMobile";
import MobileMenu from "./components/mobileMenu";

export default function Navbar() {
  const navbar = useSelector((state: { navbar: INavbar }) => state.navbar);
  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener("scroll", () => dispatch(scrollNav()));
    return () => {
      window.removeEventListener("scroll", () => dispatch(scrollNav()));
    };
  }, [navbar]);

  return (
    <div
      className={`transtitions fixed z-10 px-[5%] w-full ${
        navbar.isScroll ? "top-1 rounded-lg" : "top-1 sm:top-7"
      }`}
    >
      <div
        className={`lg:max-w-7xl lg:mx-auto ${
          navbar.isScroll
            ? "py-3 px-3 md:px-5 bg-black/70 backdrop-blur-lg rounded-xl"
            : "bg-transparent py-4"
        } ${navbar.isOpen ? "-translate-y-20" : "translate-y-0"}`}
      >
        <NavbarDesktop />
        <NavbarMobile />
      </div>
      {navbar.isOpen && <MobileMenu />}
    </div>
  );
}
