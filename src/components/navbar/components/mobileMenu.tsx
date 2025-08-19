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
    <div
      className={`z-20 p-5 -top-2 -right-[5%] -left-[5%] rounded-lg h-screen w-auto bg-black/70 backdrop-blur-md text-white transition-transform duration-300 transform ${
        navbar.isOpen ? "translate-x-0 fixed" : "translate-x-full hidden"
      }`}
    >
      <div>
        <button
          className="absolute right-3 top-3 p-3"
          aria-label="Close Menu"
          onClick={() => dispatch(closeNav())}
        >
          <AiOutlineClose className="text-3xl" />
        </button>
        <Navlogo />
        <ul className="flex flex-col space-y-1 pt-10">
          {navbar.navItem.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              onClick={() => dispatch(closeNav())}
              className="text-lg font-semibold hover:bg-yellow-500/70 rounded-lg p-2 hover:text-black"
            >
              {item.navtext}
            </Link>
          ))}
        </ul>
      </div>
      <div className="absolute bottom-5">
        <p className="font-bold">Contact:</p>
        <NavContacticon
          class={"flex-col sm:flex-row text-xl font-extralight"}
          classText={"text-sm sm:text-xs"}
        />
        <div className="mt-5">
          <NavSocialIcon class={"justify-around text-3xl sm:text-xl "} />
        </div>
      </div>
    </div>
  );
}
