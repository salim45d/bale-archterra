import { openNav } from "@/store/slice/navbar";
import { SlMenu } from "react-icons/sl";
import { useDispatch } from "react-redux";

export default function MobileButton() {
  const dispatch = useDispatch();
  return (
    <button
      type="button"
      aria-label="Open Menu"
      onClick={() => dispatch(openNav())}
      className="text-lg p-2 bg-black/50 rounded-md"
    >
      <SlMenu />
    </button>
  );
}
