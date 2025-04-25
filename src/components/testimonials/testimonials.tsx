import { MotionDiv, variantUpslideX } from "../motion/motion";
import TestimonialsSlider from "./testimonialSliders";

export default function Testimonials(Prop: {
  classHome: string;
  classTeam: string;
}) {
  const testimonials = [
    {
      id: 1,
      image: "",
      name: "James Robert",
      job: "Singer",
      testimony:
        "Focusing on the way architecture directly relates to its human inhabitants. The firm has a diverse portfolio, with much of their work on the relationship of public spaces, private house, cottages and many more.",
    },
    {
      id: 2,
      image: "",
      name: "Elena Jones",
      job: "Doctor",
      testimony:
        "They are the most responsive dan most professional architecture and most professional architecture firm I have ever worked with. I am really recommend you guys with this firm. ",
    },
    {
      id: 3,
      image: "",
      name: "Max Tonus",
      job: "Gamer",
      testimony:
        "We have always been statisfed with their perfomance, service and result. Their team are truly very professionals and I would not hesitate to recommended the to others about this firm.",
    },
    {
      id: 4,
      image: "",
      name: "Jeremy North",
      job: "Businessman",
      testimony:
        "We have clearly captured the spirit of what the building is meant to be. I just wanted to let you guys know how much it means to me personally and how much I enjoyed working with you.",
    },
    {
      id: 5,
      image: "",
      name: "Bella Swan",
      job: "Actress",
      testimony:
        "I have been developing restaurants and retail projects for over forty years and, in that time, I have never enjoyed a better relationship with an architect than this one. This firm is very proffesionals.",
    },
    {
      id: 6,
      image: "",
      name: "George Lee",
      job: "Developer",
      testimony:
        "This firm is very proffesionals. They make their deadlines, they produce very professional documents and they help as needed even when it is not strictly in their area of accountability.",
    },
    {
      id: 7,
      image: "",
      name: "Angela White",
      job: "Teacher",
      testimony:
        "The building has exceeded our wildest dreams. It is just beautiful down to every detail. Everything about it is just perfect. It’s gorgeous and functional. The Board is thrilled.",
    },
    {
      id: 8,
      image: "",
      name: "Adam Rishe",
      job: "Banker",
      testimony:
        "Every time I walk in and through the shul, I marvel at how beautiful and awe-inspiring the building is. I think that your hard work and vision played a big part in that, and I am very appreciative.",
    },
  ];

  return (
    <MotionDiv
      initial="initial"
      whileInView="animate"
      variants={variantUpslideX}
      custom={2}
    >
      <TestimonialsSlider
        testimonials={testimonials}
        classHome={Prop.classHome}
        classTeam={Prop.classTeam}
      />
    </MotionDiv>
  );
}
