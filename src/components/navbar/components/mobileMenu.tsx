import { closeNav, IReduxSlice } from "@/store/slice/slice";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";
import { NavContacticon, NavSocialIcon } from "./navicon";
import Link from "next/link";
import Navlogo from "./navlogo";

export default function MobileMenu() {
  const isCLick = useSelector((state: { click: IReduxSlice }) => state.click);
  const dispatch = useDispatch();

  return (
    <div
      className={`fixed flex flex-col justify-between p-5 z-10 top-0 right-0 h-screen w-screen bg-black text-white transition-transform duration-300 transform ${
        isCLick.isClick ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div>
        <button
          className="absolute right-7 top-4 p-3"
          aria-label="Close Menu"
          onClick={() => dispatch(closeNav())}
        >
          <AiOutlineClose className="text-3xl" />
        </button>
        <Navlogo />
        <ul className="flex flex-col space-y-1 pt-10">
          {isCLick.navItem.map((item) => (
            <li
              key={item.id}
              className="text-lg font-semibold hover:bg-yellow-500 rounded-lg p-2 hover:text-black"
            >
              <Link href={item.href} onClick={() => dispatch(closeNav())}>
                {item.navtext}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
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
