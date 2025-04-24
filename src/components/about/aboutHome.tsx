"use client";
import Image from "next/image";
import RedButton from "../button/redButton";
import { FaRocket } from "react-icons/fa";
import { GiCompass } from "react-icons/gi";
import { IMotion } from "@/store/slice/motion";
import { useSelector } from "react-redux";
import { motion } from "motion/react";

export default function AboutHome(Prop: { class: string; display: string }) {
  const frame = useSelector((state: { motion: IMotion }) => state.motion);
  const variant = frame.motionUpslide;
  const variantOpacityX = frame.motionOpacityX;
  const source = [
    { id: 1, class: "lg:ml-40", src: "/about-green.jpg", xy: 150 },
    { id: 2, class: "lg:-ml-10 lg:-mt-10", src: "/about-home.jpg", xy: 250 },
    { id: 3, class: "lg:-mt-24 lg:ml-28", src: "/about-work.jpg", xy: 200 },
  ];

  return (
    <section className={`${Prop.class}`}>
      <div className="flex justify-center content-center p-[5%]">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1.2fr_1fr] lg:max-w-7xl">
          <div className="flex justify-between flex-col bg-[whitesmoke] p-5 sm:p-10 lg:pr-5 rounded-l-xl">
            <div>
              <motion.h1
                variants={variant}
                custom={0}
                initial={"initial"}
                whileInView={"animate"}
                className="text-xs mb-5"
              >
                ABOUT US
              </motion.h1>
              <div className="text-2xl sm:text-4xl text-red-700 font-extrabold">
                <motion.h1
                  variants={variant}
                  custom={1}
                  initial={"initial"}
                  whileInView={"animate"}
                >
                  Bale Archterra.
                </motion.h1>
                <motion.h1
                  variants={variant}
                  custom={2}
                  initial={"initial"}
                  whileInView={"animate"}
                >
                  Build Properties for Your Statisfaction
                </motion.h1>
              </div>
            </div>
            <div>
              <motion.p
                variants={variantOpacityX}
                custom={3}
                initial={"initial"}
                whileInView={"animate"}
                className="mt-5 text-justify"
              >
                "With years of experience in the industry, we are commited to
                delivering exceptional result that exceed our clients
                expectations".
              </motion.p>
            </div>
          </div>
          {/* Mobile Image UI */}
          <div className=" lg:hidden flex justify-center bg-[whitesmoke] px-2 sm:px-10">
            <div className="grid grid-cols-3 gap-1">
              {source.map((item, idx) => (
                <motion.img
                  variants={variantOpacityX}
                  custom={idx + 4}
                  initial={"initial"}
                  whileInView={"animate"}
                  key={idx}
                  className="rounded-md"
                  src={item.src}
                  width={300}
                  height={300}
                  alt="Drafter"
                />
              ))}
            </div>
          </div>
          <div className="bg-[whitesmoke] p-5 sm:p-10 lg:pl-5 lg:pr-20 flex flex-col justify-between rounded-r-xl">
            <motion.div
              variants={variantOpacityX}
              custom={5}
              initial={"initial"}
              whileInView={"animate"}
            >
              <div className="text-red-700 font-bold flex mb-3">
                <GiCompass className="m-2 text-3xl" />
                <h1 className="content-center text-lg">Our Mission</h1>
              </div>
              <p className="mb-5 text-justify">
                Our mission is to become a leading architectural firm in
                creative design solutions that resolve our clients’ social,
                environmental & economic needs.
              </p>
            </motion.div>
            <motion.div
              variants={variantOpacityX}
              custom={6}
              initial={"initial"}
              whileInView={"animate"}
            >
              <div className="text-red-700 font-bold flex mb-3">
                <FaRocket className="m-2 text-3xl" />
                <h1 className="text-lg content-center">Our Vission</h1>
              </div>
              <p className="mb-5 text-justify">
                Our Vission is to create value through design, ensuring that
                each of our projects enhances and enriches lives within the
                environment.
              </p>
            </motion.div>
            <motion.div
              variants={variantOpacityX}
              custom={7}
              initial={"initial"}
              whileInView={"animate"}
              className={`${Prop.display} text-right`}
            >
              <RedButton href={"/about"} tittle={"Find more"} />
            </motion.div>
          </div>

          <div className=" hidden lg:block">
            {source.map((item, idx) => (
              <motion.img
                variants={variantOpacityX}
                custom={idx + 8}
                initial={"initial"}
                whileInView={"animate"}
                key={idx}
                className={`${item.class} rounded-tl-2xl rounded-br-2xl overflow-hidden`}
                src={item.src}
                width={item.xy}
                height={item.xy}
                alt="Drafter"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
