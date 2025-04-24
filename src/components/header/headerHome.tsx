"use client";
import Image from "next/image";
import RedButton from "../button/redButton";
import { motion } from "motion/react";
import { variantUpslide, variantOpacityX } from "../motion/motion";

export default function HeaderHome() {
  return (
    <header>
      <div className="relative bg-black pt-14 sm:pt-0">
        <div className="absolute gradient"></div>
        <Image
          className="w-full h-[30rem] object-cover"
          src="/header-img.jpg"
          alt="Building Image"
          width={500}
          height={200}
          priority={true}
        />
        <motion.div
          initial="initial"
          whileInView="animate"
          className="absolute w-[100%] h-[100%] top-0 text-center content-center text-white font-extrabold"
        >
          <motion.h1
            variants={variantUpslide}
            custom={0}
            className=" text-xl sm:text-3xl m-1 overflow-hidden"
          >
            We Are Certified Engineers
          </motion.h1>
          <motion.h1
            variants={variantUpslide}
            custom={1}
            className="text-2xl sm:text-4xl text-yellow-500 m-1 overflow-hidden"
          >
            CONSTRUCTION SERVICES
          </motion.h1>
          <motion.h1
            variants={variantUpslide}
            custom={2}
            className="text-2xl sm:text-4xl text-yellow-500 m-1 overflow-hidden"
          >
            CREATIVE AND PROFESSIONAL
          </motion.h1>
          <motion.p
            variants={variantUpslide}
            custom={3}
            className="italic text-md sm:text-lg overflow-hidden"
          >
            "Build Properties for Your Statisfaction"
          </motion.p>
          <motion.div variants={variantOpacityX} custom={5} className="mt-20">
            <RedButton href={"/#about-home"} tittle={"Find more"} />
          </motion.div>
        </motion.div>
      </div>
    </header>
  );
}
