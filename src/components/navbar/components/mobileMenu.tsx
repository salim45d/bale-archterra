import { closeNav, INavbar } from "@/store/slice/navbar";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";
import { NavContacticon, NavSocialIcon } from "./navicon";
import Link from "next/link";
import Navlogo from "./navlogo";

export default function MobileMenu() {
  const navbar = useSelector((state: { navbar: INavbar }) => state.navbar);
  const dispatch = useDispatch();

  return (
    <div className="fixed md:hidden translate-x-0 z-20 top-0 left-0 w-full">
      <div
        className="absolute h-full w-full bg-black/50 z-5"
        onClick={() => dispatch(closeNav())}
      ></div>
      <div className="p-5 rounded-lg h-screen w-full sm:w-2/3 bg-black/70 backdrop-blur-lg text-white transition-transform duration-300 transform z-10">
        <button
          className="absolute right-5 top-5 p-2 bg-black/50 rounded-full"
          aria-label="Close Menu"
          onClick={() => dispatch(closeNav())}
        >
          <AiOutlineClose />
        </button>
        <Navlogo />
        <ul className="flex flex-col space-y-1 pt-5">
          {navbar.navItem.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              onClick={() => dispatch(closeNav())}
              className="font-semibold hover:bg-red-800 rounded-lg p-2 bg-red-700 text-center"
            >
              {item.navtext}
            </Link>
          ))}
        </ul>{" "}
        <div className="absolute bottom-5 w-2/3">
          <p className="font-bold">Contact:</p>
          <NavContacticon class={"flex-col text-2xl"} classText={"text-sm"} />
          <div className="mt-5 w-full">
            <NavSocialIcon class={"justify-around text-2xl "} />
          </div>
        </div>
      </div>
    </div>
  );
}
