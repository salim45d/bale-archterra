import { NavContacticon, NavSocialIcon } from "./components/navicon";

export default function NavbarTop() {
  return (
    <nav className="hidden sm:block w-full max-w-7xl">
      <div className="text-white bg-black py-1 flex justify-between">
        <NavContacticon
          class={"flex-col sm:flex-row text-xl font-extralight"}
          classText={"text-sm sm:text-xs"}
        />
        <NavSocialIcon class={"justify-around text-3xl sm:text-xl "} />
      </div>
    </nav>
  );
}
