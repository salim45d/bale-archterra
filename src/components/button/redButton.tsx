import IButton from "@/types/button.interface";
import Link from "next/link";

export default function RedButton(Prop: IButton) {
  return (
    <div className="my-5">
      <Link
        href={Prop.href}
        className="rounded-md bg-red-700 py-4 px-16 font-bold leading-6 text-white shadow-sm hover:bg-red-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
      >
        {Prop.tittle}
      </Link>
    </div>
  );
}
