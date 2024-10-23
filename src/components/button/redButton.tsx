import Link from "next/link";

export default function RedButton(Prop: IButton) {
  return (
    <div>
      <Link
        href={Prop.href}
        className="rounded-md bg-red-700 px-3 py-2 text-xs sm:text-sm font-bold leading-6 text-white shadow-sm hover:bg-red-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 hover:text-white hover:border hover:border-slate-100"
      >
        {Prop.tittle}
      </Link>
    </div>
  );
}
