import { variantUpslide } from "@/components/motion/motion";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

export default function Navlogo() {
  return (
    <motion.div
      variants={variantUpslide}
      custom={0}
      initial="initial"
      whileInView="animate"
      className="flex items-center space-x-1"
    >
      <Image
        src={"/bale-archterra.svg"}
        alt={"bale-archterra-icon"}
        width={25}
        height={25}
      />
      <Link
        className="text-xl sm:text-2xl overflow-hidden text-yellow-500 font-bold"
        href={"/"}
      >
        {" "}
        <h1>Bale Archterra</h1>
      </Link>
    </motion.div>
  );
}
