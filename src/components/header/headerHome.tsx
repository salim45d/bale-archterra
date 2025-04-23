"use client";
import Image from "next/image";
import RedButton from "../button/redButton";
import { motion } from "motion/react";
import { useDispatch, useSelector } from "react-redux";
import { IMotion } from "@/store/slice/motion";

export default function HeaderHome() {
  const frame = useSelector((state: { motion: IMotion }) => state.motion);
  const variant = frame.motionTitle;
  const motionDiv = frame.motionDiv;

  return (
    <header>
      <div className="relative bg-black pt-14 sm:pt-0">
        <div className="absolute gradient"></div>
        <Image
          className="w-full h-[32rem] object-cover"
          src="/header-img.jpg"
          alt="Building Image"
          width={500}
          height={200}
          priority={true}
        />
        <div className="absolute w-[100%] h-[100%] top-0 text-center content-center text-white font-extrabold">
          <motion.h2
            variants={variant}
            custom={0}
            initial={"initial"}
            animate={"animate"}
            className=" text-xl sm:text-3xl m-1 overflow-hidden"
          >
            We Are Certified Engineers
          </motion.h2>
          <motion.h1
            variants={variant}
            custom={1}
            initial={"initial"}
            animate={"animate"}
            className="text-2xl sm:text-4xl text-yellow-500 m-1 overflow-hidden"
          >
            CONSTRUCTION SERVICES
          </motion.h1>
          <motion.h1
            variants={variant}
            custom={2}
            initial={"initial"}
            animate={"animate"}
            className="text-2xl sm:text-4xl text-yellow-500 m-1 overflow-hidden"
          >
            CREATIVE AND PROFESSIONAL
          </motion.h1>
          <motion.p
            variants={variant}
            custom={3}
            initial={"initial"}
            animate={"animate"}
            className="italic text-md sm:text-lg overflow-hidden"
          >
            "Build Properties for Your Statisfaction"
          </motion.p>
          <motion.div
            variants={motionDiv}
            custom={5}
            initial={"initial"}
            animate={"animate"}
            className="mt-20"
          >
            <RedButton href={"/#about-home"} tittle={"Find more"} />
          </motion.div>
        </div>
      </div>
    </header>
  );
}
