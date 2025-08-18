import IButton from "@/types/button.interface";
import Link from "next/link";

export default function RedButton(Prop: IButton) {
  return (
    <div className="my-5">
      <button className="rounded-md bg-red-700 py-4 w-full md:w-72 font-bold leading-6 text-white shadow-sm hover:bg-red-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">
        <Link href={Prop.href}>{Prop.tittle}</Link>
      </button>
    </div>
  );
}
