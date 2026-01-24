"use client";
import Image from "next/image";
import WhiteButton from "../button/whiteButton";

export default function HeaderHeadline() {
  const headLineItem = [
    {
      id: 1,
      image: "/architect.png",
      title: "Healty & Safety First",
      textBody:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint, odit?",
    },
    {
      id: 2,
      image: "/apartment.png",
      title: "Experienced Experts",
      textBody:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint, odit?",
    },
    {
      id: 3,
      image: "/gauge.png",
      title: "Innovative & Creative",
      textBody:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint, odit?",
    },
  ];
  return (
    <summary className="flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-3 sm:-mt-28 w-[90%] pb-[5%] lg:max-w-5xl z-0 gap-3 lg:gap-1">
        {headLineItem.map((item, idx) => (
          <div
            data-aos={idx === 0 ? "fade-right" : "fade-up"}
            key={idx}
            className={`rounded-md bg-yellow-500 p-5 text-center`}
          >
            <div className="flex justify-center">
              <Image
                src={item.image}
                width={50}
                height={50}
                alt="architect-icon"
              />
            </div>
            <div>
              <h1 className="font-bold mb-2 mt-5 text-lg">{item.title}</h1>
              <p>{item.textBody}</p>
            </div>
          </div>
        ))}

        <div
          data-aos="fade-left"
          className="bg-red-700 text-white p-5 text-center rounded-md overflow-hidden"
        >
          <div>
            <h1 className="font-bold mb-5 text-lg">Get Started</h1>
            <p className="mb-10">Let's talk about your next project with us</p>
            <WhiteButton href={"/contact"} tittle={"Let's Talk"} />
          </div>
        </div>
      </div>
    </summary>
  );
}
