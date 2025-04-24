"use client";
import { IModal, openModal } from "@/store/slice/modal";
import { useDispatch, useSelector } from "react-redux";
import { FaPlay } from "react-icons/fa";
import Image from "next/image";
import VideoModal from "./video";
import {
  variantUpslide,
  variantOpacity,
  variantOpacityX,
} from "../motion/motion";
import { motion } from "motion/react";

export default function SummaryHome() {
  const modal = useSelector((state: { modal: IModal }) => state.modal);
  const dispatch = useDispatch();

  return (
    <section
      className="bg-[whitesmoke] p-[5%] flex justify-center"
      id="about-home"
    >
      <motion.div
        initial="initial"
        whileInView="animate"
        className="grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-2 lg:max-w-7xl"
      >
        <motion.div
          variants={variantOpacity}
          custom={5}
          className="order-last md:order-first relative mx-5"
        >
          <Image
            className="rounded-md object-cover w-full h-96"
            src={"/header-summary.jpg"}
            height={400}
            width={600}
            alt="summary-video"
            priority={true}
          />
          <div className="absolute bg-black bg-opacity-30 hover:opacity-80 h-96 w-full top-0 rounded-md">
            <div className="absolute bottom-0">
              <h2 className=" text-lg sm:text-2xl font-extrabold text-white p-5">
                Bale Archterra Video Project
              </h2>
            </div>
            <div className="absolute top-48 left-[50%]">
              <button
                aria-label="Play"
                type="button"
                className="text-white text-2xl p-3 rounded-full border border-white hover:text-red-700 hover:border-red-700"
                onClick={() => {
                  dispatch(openModal());
                }}
              >
                <FaPlay />
              </button>
            </div>
          </div>
        </motion.div>
        <div className="font-extrabold text-[#063852]">
          <motion.h1
            variants={variantUpslide}
            custom={0}
            className="text-3xl md:text-4xl"
          >
            Welcome to Bale Archterra
          </motion.h1>
          <motion.h2
            variants={variantUpslide}
            custom={1}
            className=" mb-5 text-lg"
          >
            Build Properties for Your Statisfaction
          </motion.h2>
          <motion.p
            variants={variantUpslide}
            custom={2}
            className="font-bold text-sm mb-2 italic"
          >
            "Our Company provides a full range of services for the contruction
            of private houses and cottages since 2000"
          </motion.p>
          <motion.div variants={variantOpacity} custom={3}>
            <p className="text-sm font-light mb-5 text-justify">
              We successfully cope with tasks of varying complexity, provide
              long-term guarantees and regularly master new technologies. Our
              portfolio includes dozens of successfully completed projects of
              houses of different storeys, with high–quality finishes and good
              repairs. Building houses is our vocation!
            </p>
            <h2 className="text-sm mb-12">
              Let's work together to create sustainable and innovative
              construction solutions.
            </h2>
            <p className="font-light text-right mt-10">Best Regards</p>
          </motion.div>
        </div>
        {modal.isOpen && <VideoModal />}
      </motion.div>
    </section>
  );
}
