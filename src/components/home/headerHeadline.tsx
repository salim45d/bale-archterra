"use client";
import Image from "next/image";
import WhiteButton from "../button/whiteButton";
import { motion } from "motion/react";
import { variantOpacityX } from "../motion/motion";

export default function HeaderHeadline() {
  const headLineItem = [
    {
      id: 1,
      class: "rounded-tl-2xl",
      image: "/architect.png",
      title: "Healty & Safety First",
      textBody:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint, odit?",
    },
    {
      id: 2,
      class: "",
      image: "/apartment.png",
      title: "Experienced Experts",
      textBody:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint, odit?",
    },
    {
      id: 3,
      class: "",
      image: "/gauge.png",
      title: "Innovative & Creative",
      textBody:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint, odit?",
    },
  ];
  return (
    <summary className="flex justify-center">
      <motion.div
        initial="initial"
        whileInView="animate"
        className="grid grid-cols-2 sm:grid-cols-4 -mt-16 w-[95%] lg:max-w-5xl z-0 gap-1"
      >
        {headLineItem.map((item, idx) => (
          <motion.div
            key={idx}
            variants={variantOpacityX}
            custom={idx + 1}
            className={`${item.class} bg-yellow-500 p-2 sm:p-5 text-center`}
          >
            <div className="flex justify-center">
              <Image
                src={item.image}
                width={40}
                height={40}
                alt="architect-icon"
              />
            </div>
            <div>
              <h1 className="font-bold mb-2 mt-5 text-xs md:text-sm lg:text-md">
                {item.title}
              </h1>
              <p className="text-[10px] md:text-xs lg:text-sm">
                {item.textBody}
              </p>
            </div>
          </motion.div>
        ))}
        <motion.div
          variants={variantOpacityX}
          custom={4}
          className="bg-red-700 text-white p-2 sm:p-5 text-center rounded-br-2xl overflow-hidden"
        >
          <div>
            <h1 className="font-bold mb-4 text-sm md:text-md lg:text-lg">
              Get Started
            </h1>
            <p className="text-xs md:text-sm lg:text-md mb-4">
              Let's talk about your next project with us
            </p>
            <WhiteButton href={"/contact"} tittle={"Contact us"} />
          </div>
        </motion.div>
      </motion.div>
    </summary>
  );
}
