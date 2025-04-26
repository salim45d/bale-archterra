import WhiteButton from "@/components/button/whiteButton";
import RedButton from "../button/redButton";
import { getServiceContentful } from "@/api/api";
import { IAsset } from "@/types/contentful.type";
import { MotionDiv, variantOpacityX } from "../motion/motion";
import TitleSlice from "../tittle/title";
import ITitle from "@/types/title.interface";

export default async function ServiceHome() {
  const service = await getServiceContentful();
  const title: ITitle = {
    subtitle: "OUR SERVICE",
    title: "Bale Archterra Provide Best Service",
    quote: `"Look for contruction services with a proven back record of success
            in plan and build better properties"`,
  };

  return (
    <section className="flex justify-center content-center p-[5%] bg-[whitesmoke]">
      <MotionDiv
        className="text-center"
        initial="initial"
        whileInView="animate"
      >
        {" "}
        <TitleSlice
          subtitle={title.subtitle}
          title={title.title}
          quote={title.quote}
        />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 max-w-7xl">
          {service &&
            service.map((item, idx) => (
              <MotionDiv
                key={idx}
                variants={variantOpacityX}
                custom={idx + 3}
                className={` bg-yellow-500 p-1 sm:p-2 text-center hover:scale-[1.02] hover:bg-red-700 hover:text-white rounded-md`}
              >
                <img
                  className={`rounded-md`}
                  src={`https:${
                    (item.fields.imageCard as IAsset).fields.file.url
                  }`}
                  width={500}
                  height={250}
                  alt="service-image"
                />
                <div className="flex flex-col justify-between">
                  <div>
                    <h1 className="font-extrabold mb-1 mt-3 text-base sm:text-lg lg:text-xl">
                      {item.fields.tittle}
                    </h1>
                    <p className="text-xs md:text-sm lg:text-md">
                      {item.fields.cardText}
                    </p>
                  </div>
                  <div className="flex flex-col lg:flex-row justify-between mt-10 mb-2">
                    <p className="text-xs lg:text-sm font-extrabold italic mb-5 lg:mb-0 content-center">
                      from Rp{item.fields.price}/m<sup>2</sup>
                    </p>
                    <WhiteButton
                      href={`/service/${item.fields.slug}`}
                      tittle={"Find more"}
                    />
                  </div>
                </div>
              </MotionDiv>
            ))}
        </div>
        <MotionDiv
          variants={variantOpacityX}
          custom={7}
          className=" mt-5 sm:mt-10 text-right"
        >
          <RedButton href={"/service"} tittle={"All Service"} />
        </MotionDiv>
      </MotionDiv>
    </section>
  );
}
