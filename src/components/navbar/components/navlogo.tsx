import { IMotion } from "@/store/slice/motion";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";

export default function Navlogo() {
  const frame = useSelector((state: { motion: IMotion }) => state.motion);
  const variant = frame.motionUpslide;

  return (
    <motion.div
      variants={variant}
      custom={0}
      initial="initial"
      whileInView="animate"
      className="text-2xl font-bold text-yellow-500 flex"
    >
      <Image
        className="mr-2 mb-1.5"
        src={"/bale-archterra.png"}
        alt={"bale-archterra-icon"}
        width={30}
        height={30}
      />
      <Link
        className="content-end text-md sm:text-2xl overflow-hidden"
        href={"/"}
      >
        {" "}
        <h1>Bale Archterra</h1>
      </Link>
    </motion.div>
  );
}
