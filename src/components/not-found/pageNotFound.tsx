"use client";
import { motion } from "motion/react";
import TitleSlice from "../tittle/title";
import { variantOpacityX } from "../motion/motion";
import RedButton from "../button/redButton";

export default function PageNotFound() {
  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      variants={variantOpacityX}
      custom={1}
      className="flex justify-center content-center p-[5%] bg-[whitesmoke]"
    >
      <div className="lg:max-w-7xl">
        <div className="text-center mx-[8%]">
          <TitleSlice
            subtitle="ERROR"
            title="Uh Sorry, We couldn't find this page"
            quote="Please check again your connection or
            path. We can't seem to find the page you're looking for. Try Going
            back to the previous page or get touch with the website owner."
          />
          <div className="inline-block content-center -mt-10 mb-4">
            <motion.img
              src="error.png"
              variants={variantOpacityX}
              custom={3}
              width={400}
              height={100}
              alt="Error Images"
            />
          </div>
          <RedButton href={"/"} tittle={"Back to Home"} />
        </div>
      </div>
    </motion.div>
  );
}
