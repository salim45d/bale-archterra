import Link from "next/link";
import Navlink from "../navbar/components/navlink";
import { NavContacticon, NavSocialIcon } from "../navbar/components/navicon";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="">
      <div className="bg-[#333333] py-[5%] flex justify-center">
        <div className="grid grid-cols-3 sm:grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-4 sm:gap-3 text-white w-[90%] lg:max-w-7xl">
          <div className="col-span-3 sm:col-span-1">
            <Image
              src={"/bale-archterra.png"}
              alt={"bale-archterra-logo"}
              height={80}
              width={80}
            />
            <h1 className="font-extrabold text-2xl sm:text-lg md:text-xl lg:text-3xl text-yellow-500">
              Balle Archterra
            </h1>
            <p className="text-[10px] md:text-xs lg:text-md">
              Build Properties for Your Statisfaction
            </p>
          </div>
          <div>
            <h2 className="text-sm md:text-md lg:text-lg font-extrabold mb-2">
              Navigation
            </h2>
            <div>
              <Navlink
                class={"flex-col text-sm md:text-md lg:text-lg"}
                classLi={
                  "hover:text-yellow-500 m-1 flex-col text-sm md:text-md lg:text-base"
                }
              />
            </div>
          </div>
          <div>
            <h2 className="text-sm md:text-md lg:text-lg font-extrabold mb-2">
              Service
            </h2>
            <div className="flex flex-col font-semibold text-sm md:text-md lg:text-base">
              <Link
                className="hover:text-yellow-500 m-1"
                href="/service/urban-plan"
              >
                Urban Plan
              </Link>
              <Link
                className="hover:text-yellow-500 m-1"
                href="/service/architecture"
              >
                Architecture
              </Link>
              <Link
                className="hover:text-yellow-500 m-1"
                href="/service/interior-design"
              >
                Interior
              </Link>
              <Link
                className="hover:text-yellow-500 m-1"
                href="/service/construction"
              >
                Construction
              </Link>
            </div>
          </div>
          <div>
            <h2 className="text-sm md:text-md lg:text-lg font-extrabold mb-2">
              About
            </h2>
            <div className="flex flex-col font-semibold text-sm md:text-md lg:text-base">
              <Link
                className="hover:text-yellow-500 m-1"
                href="/about#bale-archterra-history"
              >
                History
              </Link>
              <Link className="hover:text-yellow-500 m-1" href="/about#mission">
                Mission
              </Link>
              <Link
                className="hover:text-yellow-500 m-1"
                href="/about#bale-archterra-team"
              >
                Team
              </Link>
              <Link
                className="hover:text-yellow-500 m-1"
                href="/about#bale-archterra-culture"
              >
                Culture
              </Link>
            </div>
          </div>
          <div className="col-span-3 sm:col-span-1">
            <h2 className="text-sm md:text-md lg:text-lg font-extrabold mb-2">
              Contact
            </h2>
            <NavContacticon
              class={"flex-col text-md md:text-lg lg:text-xl"}
              classText={"text-xs lg:text-sm"}
            />
            <div className="w-[50%] mt-2">
              <NavSocialIcon class={"justify-between text-xl lg:text-2xl"} />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black px-[5%] py-2 text-xs sm:text-sm text-center text-white">
        <p>
          {" "}
          Sliced by{" "}
          <a
            href="https://github.com/salim45d"
            target="_blank"
            aria-label="Github"
          >
            salim45d
          </a>{" "}
          October 2024. Build with Tailwind and Next.JS
        </p>
      </div>
    </footer>
  );
}
