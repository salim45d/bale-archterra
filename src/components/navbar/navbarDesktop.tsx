import Navlink from "./components/navlink";
import Navlogo from "./components/navlogo";

export default function NavbarDesktop() {
  return (
    <nav className="hidden md:flex justify-between items-center space-x-5 text-white">
      <Navlogo />
      <Navlink />
    </nav>
  );
}
