import Image from "next/image";
import Link from "next/link";

export default function Navlogo() {
  return (
    <div className="text-2xl font-bold text-yellow-500 flex">
      <Image
        className="mr-2 mb-1.5"
        src={"/bale-archterra.png"}
        alt={"bale-archterra-icon"}
        width={30}
        height={30}
      />
      <Link className="content-end text-md sm:text-2xl" href={"/"}>
        {" "}
        <h1>Bale Archterra</h1>
      </Link>
    </div>
  );
}
