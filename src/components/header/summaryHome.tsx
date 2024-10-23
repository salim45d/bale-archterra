"use client";
import { IReduxSlice, openModal } from "@/store/slice/slice";
import { useDispatch, useSelector } from "react-redux";
import { FaPlay } from "react-icons/fa";
import Image from "next/image";
import VideoModal from "./video";

export default function SummaryHome() {
  const modal = useSelector((state: { click: IReduxSlice }) => state.click);
  const dispatch = useDispatch();

  return (
    <section
      className="bg-[whitesmoke] p-[5%] flex justify-center"
      id="about-home"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-2 lg:max-w-7xl">
        <div className="order-last md:order-first relative mx-5">
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
        </div>
        <div className="font-extrabold text-[#063852]">
          <h1 className="text-3xl md:text-4xl">Welcome to Bale Archterra</h1>
          <h2 className=" mb-5 text-lg">
            Build Properties for Your Statisfaction
          </h2>
          <p className="font-bold text-sm mb-2 italic">
            "Our Company provides a full range of services for the contruction
            of private houses and cottages since 2000"
          </p>
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
        </div>
        {modal.isModal && <VideoModal />}
      </div>
    </section>
  );
}
