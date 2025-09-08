import MobileButton from "./components/mobileButton";
import Navlogo from "./components/navlogo";

export default function NavbarMobile() {
  return (
    <nav className="flex md:hidden justify justify-between items-center flex-wrap text-white">
      <Navlogo />
      <MobileButton />
    </nav>
  );
}
