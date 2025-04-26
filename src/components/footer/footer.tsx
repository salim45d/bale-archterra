import Link from "next/link";
import Image from "next/image";
import { NavContacticon, NavSocialIcon } from "../navbar/components/navicon";
import { useSelector } from "react-redux";
import { INavbar } from "@/store/slice/navbar";

export default function Footer() {
  const navItem = useSelector(
    (state: { navbar: INavbar }) => state.navbar.navItem
  );

  return (
    <footer className="">
      <div className="bg-[#333333] py-[5%] pt-[7%] flex justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_4fr_1fr] gap-4 md:gap-3 text-white w-[90%] lg:max-w-7xl">
          <div className="col-span-3 lg:col-span-1 mb-5">
            <Image
              src={"/bale-archterra.png"}
              alt={"bale-archterra-logo"}
              height={80}
              width={80}
            />
            <h1 className="font-extrabold text-4xl text-yellow-500">
              Balle Archterra
            </h1>
            <p className="text-[10px] md:text-xs lg:text-md">
              Build Properties for Your Statisfaction
            </p>
          </div>
          <div className="flex flex-row justify-between sm:justify-start sm:gap-x-20 lg:gap-0 lg:justify-evenly">
            <div>
              <h2 className="text-lg lg:text-xl font-extrabold mb-2">
                Navigation
              </h2>
              <div className="font-semibold content-center">
                <div className="flex flex-col text-base lg:text-lg gap-3 lg:gap-2">
                  {navItem.map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.href}
                      className="hover:text-yellow-500 flex-col over:scale-150"
                    >
                      {item.navtext}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-lg lg:text-xl font-extrabold mb-2">About</h2>
              <div className="flex flex-col font-semibold text-base lg:text-lg gap-3 lg:gap-2">
                <Link
                  className="hover:text-yellow-500"
                  href="/about#bale-archterra-history"
                >
                  History
                </Link>
                <Link className="hover:text-yellow-500" href="/about#mission">
                  Mission
                </Link>
                <Link
                  className="hover:text-yellow-500"
                  href="/about#bale-archterra-team"
                >
                  Team
                </Link>
                <Link
                  className="hover:text-yellow-500"
                  href="/about#bale-archterra-culture"
                >
                  Culture
                </Link>
              </div>
            </div>
            <div>
              <h2 className="text-lg lg:text-xl font-extrabold mb-2">
                Service
              </h2>
              <div className="flex flex-col font-semibold text-base lg:text-lg gap-3 lg:gap-2">
                <Link
                  className="hover:text-yellow-500"
                  href="/service/urban-plan"
                >
                  Urban Plan
                </Link>
                <Link
                  className="hover:text-yellow-500"
                  href="/service/architecture"
                >
                  Architecture
                </Link>
                <Link
                  className="hover:text-yellow-500"
                  href="/service/interior-design"
                >
                  Interior
                </Link>
                <Link
                  className="hover:text-yellow-500"
                  href="/service/construction"
                >
                  Construction
                </Link>
              </div>
            </div>
          </div>
          <div className="col-span-3 lg:col-span-1 ">
            <h2 className="text-lg lg:text-xl font-extrabold mb-2 mt-5 lg:mt-0">
              Contact
            </h2>
            <NavContacticon
              class={"flex-col text-xl"}
              classText={"text-sm lg:text-base"}
            />
            <div className="w-[50%] md:w-[30%] lg:w-full mt-4">
              <NavSocialIcon class={"justify-between text-2xl"} />
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
