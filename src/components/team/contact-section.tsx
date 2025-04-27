import ITitle from "@/types/title.interface";
import ContactForm from "../contact-form/contact-form";
import { MotionDiv, variantOpacity, variantOpacityX } from "../motion/motion";
import TitleSlice from "../tittle/title";

export default function ContactSection() {
  const title: ITitle = {
    subtitle: "OUR CONTACT",
    title: "Bale Archterra Get in Touch",
    quote: `Feel free to get in touch with us via contact form, email or
              phone.
              
              
              We are always open to discussing new projects, creative ideas or
              opportunities to be part of your visions.`,
  };

  return (
    <section
      className="bg-[whitesmoke] p-[5%] flex justify-center mt-[5%]"
      id="contact-form"
    >
      <MotionDiv
        initial="initial"
        whileInView="animate"
        className=" lg:max-w-7xl"
      >
        <div className="text-center mx-0 sm:mx-[10%]">
          <TitleSlice
            subtitle={title.subtitle}
            title={title.title}
            quote={title.quote}
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-5">
          <MotionDiv
            custom={4}
            variants={variantOpacity}
            className="pd-0 md:pd-5 lg:p-10 text-center"
          >
            <h2 className=" text-md md:text-xl font-bold leading-9 tracking-tight text-[#063852]">
              Our Address
            </h2>
            <p className="text-sm md:text-md mt-2 mb-14">
              Kotabaru, Kec. Gondokusuman, Kota Yogyakarta, Daerah Istimewa
              Yogyakarta 55224
            </p>
            <div>
              {" "}
              <iframe
                className="w-full h-96 rounded-m border-none"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15812.12757332543!2d110.35421102550616!3d-7.786443295031782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a582de97da68b%3A0x21505d2402d0c803!2sKotabaru%2C%20Kec.%20Gondokusuman%2C%20Kota%20Yogyakarta%2C%20Daerah%20Istimewa%20Yogyakarta!5e0!3m2!1sid!2sid!4v1729055652140!5m2!1sid!2sid"
                loading="lazy"
                title="Maps"
              ></iframe>
            </div>
          </MotionDiv>
          <MotionDiv custom={5} variants={variantOpacityX}>
            <ContactForm />
          </MotionDiv>
        </div>
      </MotionDiv>
    </section>
  );
}
