import Image from "next/image";
import RedButton from "../button/redButton";

export default function HeaderHome() {
  return (
    <header>
      <div className="relative bg-black pt-14 sm:pt-0">
        <div className="absolute gradient"></div>
        <Image
          className="w-full h-96 object-cover"
          src="/header-img.jpg"
          alt="Building Image"
          width={500}
          height={200}
          priority={true}
        />
        <div className="absolute w-[100%] h-[100%] top-0 text-center content-center text-white font-extrabold">
          <h2 className=" text-xl sm:text-3xl m-1">
            We Are Certified Engineers
          </h2>
          <h1 className="text-2xl sm:text-4xl text-yellow-500 m-1">
            CONSTRUCTION SERVICES
          </h1>
          <h1 className="text-2xl sm:text-4xl text-yellow-500 m-1">
            CREATIVE AND PROFESSIONAL
          </h1>
          <p className="italic text-md sm:text-lg">
            "Build Properties for Your Statisfaction"
          </p>
          <div className="mt-5">
            <RedButton href={"/#about-home"} tittle={"Find more"} />
          </div>
        </div>
      </div>
    </header>
  );
}
