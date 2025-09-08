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
      className="text-2xl font-bold text-yellow-500 flex items-center"
    >
      <Image
        className="mr-2"
        src={"/bale-archterra.svg"}
        alt={"bale-archterra-icon"}
        width={25}
        height={25}
      />
      <Link className="text-md sm:text-2xl overflow-hidden" href={"/"}>
        {" "}
        <h1>Bale Archterra</h1>
      </Link>
    </motion.div>
  );
}
