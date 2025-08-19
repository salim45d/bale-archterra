import IButton from "@/types/button.interface";
import Link from "next/link";

export default function WhiteButton(Prop: IButton) {
  return (
    <div className="my-5">
      <Link href={Prop.href}>
        <button className="w-full rounded-md bg-white py-4 font-bold leading-6 text-red-700 shadow-sm hover:bg-red-800 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">
          {Prop.tittle}
        </button>
      </Link>
    </div>
  );
}
