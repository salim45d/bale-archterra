"use client";
import { useState, useRef, useEffect } from "react";
import { Transition } from "@headlessui/react";
import { RxAvatar } from "react-icons/rx";
import { motion } from "motion/react";
import { MotionDiv, variantUpslide } from "../motion/motion";
import ITestimonials from "@/types/testimonials.interface";

export default function TestimonialsSlider(Prop: {
  classHome: string;
  classTeam: string;
  testimonials: ITestimonials[];
}) {
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<number>(0);
  const [autorotate, setAutorotate] = useState<boolean>(true);
  const autorotateTiming: number = 5000;

  useEffect(() => {
    if (!autorotate) return;
    const interval = setInterval(() => {
      setActive(
        active + 1 === Prop.testimonials.length ? 0 : (active) => active + 1
      );
    }, autorotateTiming);
    return () => clearInterval(interval);
  }, [active, autorotate]);

  // Untuk Mengatur Tinggi Container Secara Otomatis
  const heightFix = () => {
    if (testimonialsRef.current && testimonialsRef.current.parentElement)
      testimonialsRef.current.parentElement.style.height = `${testimonialsRef.current.clientHeight}px`;
  };

  useEffect(() => {
    heightFix();
  }, []);

  return (
    <section className={`flex justify-center content-center ${Prop.classHome}`}>
      <div className={`w-full max-w-7xl mx-auto text-center ${Prop.classTeam}`}>
        <MotionDiv initial="initial" whileInView="animate" className="mb-24">
          <motion.h1
            variants={variantUpslide}
            custom={3}
            className="text-xs mb-5"
          >
            OUR TESTIMONIALS
          </motion.h1>
          <motion.h1
            variants={variantUpslide}
            custom={4}
            className="text-2xl sm:text-4xl text-red-700 font-extrabold"
          >
            Bale Archterra Feedback from Our Clients
          </motion.h1>
          <motion.p variants={variantUpslide} custom={5} className="mt-2">
            We are proudly driven to help design a better world, We are trusted
            by our clients and experienced to plan better.{" "}
          </motion.p>
        </MotionDiv>
        {/* Testimonial image*/}
        <div className="relative h-32">
          <div className="absolute top-0  left-1/2 -translate-x-1/2 w-[480px] h-[480px] pointer-events-none before:absolute before:inset-0 before:bg-gradient-to-b before:from-red-800/25 before:via-red-800/5 before:via-25% before:to-red-800/0 before:to-75% before:rounded-full before:-z-10">
            <div className="h-32 text-[#063852]">
              {Prop.testimonials.map((testimonial, index) => (
                <Transition
                  as="div"
                  key={index}
                  show={active === index}
                  className="absolute inset-0 h-full -z-10"
                  enter="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700 order-first"
                  enterFrom="opacity-0 -rotate-[60deg]"
                  enterTo="opacity-100 rotate-0"
                  leave="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700"
                  leaveFrom="opacity-100 rotate-0"
                  leaveTo="opacity-0 rotate-[60deg]"
                  beforeEnter={() => heightFix()}
                >
                  <div className="relative top-4 left-1/2 -translate-x-1/2">
                    <div className="text-4xl justify-items-center font-extrabold ">
                      <RxAvatar />
                    </div>
                    <div className="ml-2">
                      <h1 className="font-bold text-md lg:text-lg">
                        {testimonial.name}
                      </h1>
                      <p className="font-semibold text-xs sm:text-sm">
                        {testimonial.job}
                      </p>
                    </div>
                  </div>
                </Transition>
              ))}
            </div>
          </div>
        </div>
        <div className="mb-9 transition-all duration-150 delay-300 ease-in-out justify-items-center">
          <div
            className="relative  flex flex-col max-w-2xl"
            ref={testimonialsRef}
          >
            {Prop.testimonials.map((testimonial, index) => (
              <Transition
                as="div"
                key={index}
                show={active === index}
                enter="transition ease-in-out duration-500 delay-200 order-first"
                enterFrom="opacity-0 -translate-x-4"
                enterTo="opacity-100 translate-x-0"
                leave="transition ease-out duration-300 delay-300 absolute"
                leaveFrom="opacity-100 translate-x-0"
                leaveTo="opacity-0 translate-x-4"
                beforeEnter={() => heightFix()}
              >
                <div>
                  <p className="text-sm sm:text-md lg:text-lg font-bold text-black italic mb-3">
                    "{testimonial.testimony}"
                  </p>
                </div>
              </Transition>
            ))}
          </div>
        </div>
        {/* Buttons */}
        <div className="flex flex-wrap justify-center -m-1.5">
          {Prop.testimonials.map((testimonial, index) => (
            <button
              key={index}
              className={`rounded-md px-3 py-2 text-xs sm:text-sm font-bold leading-6 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 mr-1 my-1 ${
                active === index
                  ? "bg-white text-red-700 hover:text-white  hover:bg-red-800 border border-red-800"
                  : "bg-red-700 hover:bg-red-800 text-white"
              }`}
              onClick={() => {
                setActive(index);
                setAutorotate(false);
              }}
            >
              <span>{testimonial.name}</span>{" "}
              <span
                className={`${
                  active === index ? "text-indigo-200" : "text-slate-300"
                }`}
              ></span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
