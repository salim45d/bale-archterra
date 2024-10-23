import { openNav } from "@/store/slice/slice";
import { SlMenu } from "react-icons/sl";
import { useDispatch } from "react-redux";

export default function MobileButton() {
  const dispatch = useDispatch();
  return (
    <button
      type="button"
      aria-label="Open Menu"
      className="absolute right-5"
      onClick={() => dispatch(openNav())}
    >
      <SlMenu className="text-2xl" />
    </button>
  );
}
