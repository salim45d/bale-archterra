import Link from "next/link";
import RedButton from "../button/redButton";
import { MotionDiv, variantUpslide } from "../motion/motion";

export default function BannerContactUS() {
  return (
    <section className="p-[5%] bg-red-50 flex justify-center ">
      <MotionDiv
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={variantUpslide}
        custom={1}
        className="flex max-w-7xl"
      >
        <div className="text-left w-full sm:w-1/2">
          <h1 className="text-sm text-[#063852] font-semibold mb-3">
            CONTACT US
          </h1>
          <h1 className="text-2xl sm:text-4xl text-red-700 font-extrabold">
            Are you ready to be part of Bale Archterra?
          </h1>
          <p className="mt-1 text-[#063852] font-semibold mb-14">
            We are always ready to discussing new projects, creative ideas or
            opportunities to be part of your visions.
          </p>

          <div className="text-left mb-3">
            <Link
              href={"/team#contact-form"}
              className="rounded-md bg-red-700 px-6 py-3 font-bold leading-6 text-white shadow-sm hover:bg-red-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 hover:text-white hover:border hover:border-slate-100 text-base sm:text-lg"
            >
              Let's Talk
            </Link>
          </div>
        </div>
        <div className="w-1/2 justify-items-end">
          <img
            src="./question.svg"
            alt="Contact us"
            width={300}
            height={300}
            className=""
          />
        </div>
      </MotionDiv>
    </section>
  );
}
