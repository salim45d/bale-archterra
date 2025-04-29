"use client";
import { motion } from "motion/react";
import ImagesThumbsSwiper from "./components/imagesThumbsSwiper";
import { variantOpacityX } from "../motion/motion";

export default function ImagesSwiperGalery() {
  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      variants={variantOpacityX}
      custom={1}
      className="bg-[whitesmoke] hidden lg:flex lg:justify-center"
    >
      <ImagesThumbsSwiper />
    </motion.div>
  );
}
