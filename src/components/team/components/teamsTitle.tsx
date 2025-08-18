import RedButton from "@/components/button/redButton";
import { MotionDiv, variantXFast } from "@/components/motion/motion";
import TitleSlice from "@/components/tittle/title";
import ITitle from "@/types/title.interface";

export default function TeamsTittle(Prop: { display: string }) {
  const title: ITitle = {
    subtitle: "OUR TEAM",
    title: "Bale Archterra Specialist Team",
    quote: `"A successful team is a group of many hands and one mind."`,
  };

  return (
    <MotionDiv
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={variantXFast}
      custom={0}
      className="text-center"
    >
      <TitleSlice
        subtitle={title.subtitle}
        title={title.title}
        quote={title.quote}
      />
      <p className="text-justify lg:px-[10%]">
        Fuelled by unbound creativity and cutting-edge technology, our
        Architectural, Civil and Interior Design Services are spearheaded to
        exceed the expectations of all those in need of an innovation,
        reliability and experience of a lifetime. Time and again, we have proved
        our mettle as the finest team of architects, by displaying an
        outstanding track-record of design-excellence, coupled with service
        efficiency, responsiveness and a strong commitment towards project
        deadlines as well as budgetary constraints. Our team takes over
        everything, from an idea and concept development to realization. We
        believe in traditions and incorporate them within our innovations. All
        our projects incorporate a unique artistic image and functional
        solutions. Client is the soul of the project. Our main goal is to
        illustrate his/hers values and individuality through design. We welcome
        you to the Bale Archterra. Fuelled by unbound creativity and
        cutting-edge technology, our Architectural, Civil and Interior Design
        Services are spearheaded to exceed the expectations of all those in need
        of an innovation, reliability and experience of a lifetime. Time and
        again, we have proved our mettle as the finest team of architects, by
        displaying an outstanding track-record of design-excellence, coupled
        with service efficiency, responsiveness and a strong commitment towards
        project deadlines as well as budgetary constraints.
      </p>
      <div className={`${Prop.display} text-right mt-10`}>
        <RedButton href={"/team"} tittle={"Find more"} />
      </div>
    </MotionDiv>
  );
}
