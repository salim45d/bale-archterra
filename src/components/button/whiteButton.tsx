import Link from "next/link";

export default function WhiteButton(Prop: IButton) {
  return (
    <div>
      <Link
        href={Prop.href}
        className="rounded-md bg-white px-3 py-2 text-xs sm:text-sm font-bold leading-6 text-red-700 shadow-sm hover:bg-red-700 hover:text-white hover:border hover:border-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
      >
        {Prop.tittle}
      </Link>
    </div>
  );
}
