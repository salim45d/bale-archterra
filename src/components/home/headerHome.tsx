"use client";
import Image from "next/image";
import { motion } from "motion/react";
import { variantUpslide } from "../motion/motion";

export default function HeaderHome() {
  return (
    <header>
      <div className="relative bg-black pt-14 sm:pt-0">
        <div className="absolute gradient"></div>
        <Image
          className="w-full h-screen sm:h-[38rem] object-cover"
          src="/header-img.jpg"
          alt="Building Image"
          width={500}
          height={200}
          priority={true}
        />
        <motion.div
          initial="initial"
          whileInView="animate"
          className="absolute w-[100%] h-[100%] top-0 text-center content-center text-white font-extrabold p-[5%]"
        >
          <motion.h1
            variants={variantUpslide}
            custom={0}
            className=" text-4xl m-1"
          >
            We Are Certified Engineers
          </motion.h1>
          <motion.h1
            variants={variantUpslide}
            custom={1}
            className="text-3xl text-yellow-500 m-1"
          >
            CONSTRUCTION SERVICES
          </motion.h1>
          <motion.h1
            variants={variantUpslide}
            custom={2}
            className="text-3xl text-yellow-500 m-1"
          >
            CREATIVE AND PROFESSIONAL
          </motion.h1>
          <motion.p
            variants={variantUpslide}
            custom={3}
            className="sm:px-[10%]"
          >
            We successfully cope with tasks of varying complexity, provide
            long-term guarantees and regularly master new technologies. We build
            Properties for Your Statisfaction
          </motion.p>
        </motion.div>
      </div>
    </header>
  );
}
