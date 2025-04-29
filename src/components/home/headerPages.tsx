"use client";
import { motion } from "motion/react";
import Image from "next/image";
import { variantUpslide } from "../motion/motion";

interface IHeader {
  img: string;
  tittle: string;
}

export default function HeaderPages(prop: IHeader) {
  return (
    <header>
      <div className="relative bg-black pt-14 sm:pt-0">
        <div className="absolute gradient"></div>
        <Image
          className="w-full h-96 object-cover"
          src={prop.img}
          alt="Header Page Image"
          width={500}
          height={200}
          priority={true}
        />
        <div className="absolute w-[100%] h-[100%] top-10 sm:top-0 content-center text-center p-[5%]">
          <motion.h1
            variants={variantUpslide}
            custom={0}
            initial="initial"
            whileInView="animate"
            className="text-3xl sm:text-4xl font-extrabold text-yellow-500 mb-20"
          >
            {prop.tittle}
          </motion.h1>
        </div>
      </div>
    </header>
  );
}
