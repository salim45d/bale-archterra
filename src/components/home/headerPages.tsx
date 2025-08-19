"use client";
import { motion } from "motion/react";
import Image from "next/image";
import { variantUpslide } from "../motion/motion";

interface IHeader {
  img: string;
}

export default function HeaderPages(prop: IHeader) {
  return (
    <header>
      <div className="relative bg-black">
        <div className="absolute gradient"></div>
        <Image
          className="w-full h-72 object-cover"
          src={prop.img}
          alt="Header Page Image"
          width={500}
          height={200}
          priority={true}
        />
      </div>
    </header>
  );
}
