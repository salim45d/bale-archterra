import WhiteButton from "@/components/button/whiteButton";
import RedButton from "../button/redButton";
import { getServiceContentful } from "@/api/api";
import { IAsset } from "@/types/contentful.type";
import { MotionDiv, variantOpacityX } from "../motion/motion";
import TitleSlice from "../tittle/title";
import ITitle from "@/types/title.interface";
import ServiceCardSwiper from "./components/serviceCardSwiper";
import PageNotFound from "../not-found/pageNotFound";

export default async function ServiceCardHome() {
  const service = await getServiceContentful();
  const title: ITitle = {
    subtitle: "OUR SERVICE",
    title: "Bale Archterra Provide Best Service",
    quote: `"Look for contruction services with a proven back record of success
            in plan and build better properties"`,
  };

  if (service === undefined) {
    return <PageNotFound />;
  } else {
    return (
      <section className="flex justify-center content-center bg-[whitesmoke]">
        <MotionDiv
          className="flex flex-col p-[5%] text-center w-screen max-w-7xl"
          initial="initial"
          whileInView="animate"
        >
          {" "}
          <TitleSlice
            subtitle={title.subtitle}
            title={title.title}
            quote={title.quote}
          />
          <ServiceCardSwiper service={service} />
          <MotionDiv
            variants={variantOpacityX}
            custom={3}
            className="text-right"
          >
            <RedButton href={"/service"} tittle={"All Service"} />
          </MotionDiv>
        </MotionDiv>
      </section>
    );
  }
}
