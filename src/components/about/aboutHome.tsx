"use client";
import RedButton from "../button/redButton";
import { FaRocket } from "react-icons/fa";
import { GiCompass } from "react-icons/gi";
import { motion } from "motion/react";
import { variantUpslide, variantOpacityX } from "../motion/motion";
import ImagesThumbsSwiper from "./components/imagesThumbsSwiper";

export default function AboutHome(Prop: { display: string }) {
  const source = [
    { id: 1, class: "lg:ml-28", src: "/about-green.jpg", xy: 150 },
    { id: 2, class: "lg:-ml-7 lg:-mt-10", src: "/about-home.jpg", xy: 250 },
    { id: 3, class: "lg:-mt-20 lg:ml-16", src: "/about-work.jpg", xy: 200 },
  ];

  return (
    <section>
      <div className="flex justify-center content-center p-[5%] m-">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-[1.3fr_1.3fr_1fr] lg:max-w-7xl overflow-hidden"
        >
          <div className="bg-red-100 py-5 pl-5 pr-5 lg:pr-0 rounded-t-xl lg:rounded-l-xl lg:rounded-r-none">
            <div className="flex justify-between flex-col bg-white/20  backdrop-blur-md h-full rounded-xl p-5">
              <motion.div variants={variantUpslide} custom={1}>
                <h1 className="text-sm text-[#063852] font-bold mb-3">
                  ABOUT US
                </h1>
                <div className="text-2xl sm:text-4xl text-red-700 font-extrabold">
                  <h1>Bale Archterra.</h1>
                  <h1>Build Properties for Your Statisfaction</h1>
                </div>
              </motion.div>
              <div>
                <motion.p
                  variants={variantOpacityX}
                  custom={2}
                  className="mt-5 text-justify text-[#063852] font-bold"
                >
                  "With years of experience in the industry, we are commited to
                  delivering exceptional result that exceed our clients
                  expectations".
                </motion.p>
              </div>
            </div>
          </div>
          {/* Mobile Image UI */}
          <div className=" lg:hidden bg-red-100 px-5">
            <ImagesThumbsSwiper />
          </div>
          <div className="bg-red-100 p-5 lg:pr-12 flex flex-col justify-between rounded-b-xl lg:rounded-r-xl lg:rounded-l-none">
            <motion.div variants={variantOpacityX} custom={3}>
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
            <motion.div variants={variantOpacityX} custom={4}>
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
              custom={5}
              className={`${Prop.display} text-right`}
            >
              <RedButton href={"/about"} tittle={"Find more"} />
            </motion.div>
          </div>
          <div className=" hidden lg:block">
            {source.map((item, idx) => (
              <motion.img
                variants={variantOpacityX}
                custom={idx + 6}
                key={idx}
                className={`${item.class} rounded-tl-2xl rounded-br-2xl`}
                src={item.src}
                width={item.xy}
                height={item.xy}
                alt="Drafter"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
