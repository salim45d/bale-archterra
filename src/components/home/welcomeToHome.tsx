"use client";
import { IModal, openModal } from "@/store/slice/modal";
import { useDispatch, useSelector } from "react-redux";
import { FaPlay } from "react-icons/fa";
import Image from "next/image";
import VideoModalHome from "./videoHome";
import { variantUpslide, variantXFast } from "../motion/motion";
import { motion } from "motion/react";

export default function WelcomeToHome() {
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
        viewport={{ once: true }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-7 lg:gap-2 max-w-7xl"
      >
        <motion.div
          variants={variantXFast}
          custom={1}
          className="order-last lg:order-first relative lg:mx-5"
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
        <div className=" text-[#063852]">
          <motion.div variants={variantXFast} custom={3}>
            <h1 className="text-3xl md:text-4xl font-extrabold">
              Welcome to Bale Archterra
            </h1>
            <h2 className=" mb-5 text-lg font-extrabold">
              Build Properties for Your Statisfaction
            </h2>
            <p className="font-bold mb-2 italic">
              "Our Company provides a full range of services for the contruction
              of private houses and cottages since 2000"
            </p>

            <p className="mb-5 text-justify">
              We successfully cope with tasks of varying complexity, provide
              long-term guarantees and regularly master new technologies. Our
              portfolio includes dozens of successfully completed projects of
              houses of different storeys, with high–quality finishes and good
              repairs. Building houses is our vocation!
            </p>
            <h2 className="mb-12">
              Let's work together to create sustainable and innovative
              construction solutions.
            </h2>
            <p className="text-right mt-10">Best Regards</p>
          </motion.div>
        </div>
        {modal.isOpen && <VideoModalHome />}
      </motion.div>
    </section>
  );
}
