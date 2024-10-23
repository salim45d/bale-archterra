import Image from "next/image";
import RedButton from "../button/redButton";
import { FaRocket } from "react-icons/fa";
import { GiCompass } from "react-icons/gi";

export default function AboutHome(Prop: { class: string; display: string }) {
  const source = [
    { id: 1, class: "lg:ml-40", src: "/about-green.jpg", xy: 150 },
    { id: 2, class: "lg:-ml-10 lg:-mt-10", src: "/about-home.jpg", xy: 250 },
    { id: 3, class: "lg:-mt-24 lg:ml-28", src: "/about-work.jpg", xy: 200 },
  ];

  return (
    <section className={`${Prop.class}`}>
      <div className="flex justify-center content-center p-[5%]">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1.2fr_1fr] lg:max-w-7xl">
          <div className="flex justify-between flex-col bg-[whitesmoke] p-5 sm:p-10 lg:pr-5 rounded-l-xl">
            <div>
              <h1 className="text-xs mb-5">ABOUT US</h1>
              <div className="text-2xl sm:text-4xl text-red-700 font-extrabold">
                <h1>Bale Archterra.</h1>
                <h1>Build Properties for Your Statisfaction</h1>
              </div>
            </div>
            <div>
              <p className="mt-5 text-justify">
                "With years of experience in the industry, we are commited to
                delivering exceptional result that exceed our clients
                expectations".
              </p>
            </div>
          </div>
          {/* Mobile Image UI */}
          <div className=" lg:hidden flex justify-center bg-[whitesmoke] px-2 sm:px-10">
            <div className="grid grid-cols-3 gap-1">
              {source.map((item) => (
                <Image
                  key={item.id}
                  className="rounded-md"
                  src={item.src}
                  width={300}
                  height={300}
                  alt="Drafter"
                />
              ))}
            </div>
          </div>
          <div className="bg-[whitesmoke] p-5 sm:p-10 lg:pl-5 lg:pr-20 flex flex-col justify-between rounded-r-xl">
            <div>
              <div className="text-red-700 font-bold flex mb-3">
                <GiCompass className="m-2 text-3xl" />
                <h1 className="content-center text-lg">Our Mission</h1>
              </div>
              <p className="mb-5 text-justify">
                Our mission is to become a leading architectural firm in
                creative design solutions that resolve our clients’ social,
                environmental & economic needs.
              </p>
            </div>
            <div>
              <div className="text-red-700 font-bold flex mb-3">
                <FaRocket className="m-2 text-3xl" />
                <h1 className="text-lg content-center">Our Vission</h1>
              </div>
              <p className="mb-5 text-justify">
                Our Vission is to create value through design, ensuring that
                each of our projects enhances and enriches lives within the
                environment.
              </p>
            </div>
            <div className={`${Prop.display} text-right`}>
              <RedButton href={"/about"} tittle={"Find more"} />
            </div>
          </div>

          <div className=" hidden lg:block">
            {source.map((item) => (
              <Image
                key={item.id}
                className={`${item.class} rounded-tl-2xl rounded-br-2xl`}
                src={item.src}
                width={item.xy}
                height={item.xy}
                alt="Drafter"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
