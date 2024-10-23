import { RxAvatar } from "react-icons/rx";

export default function Testimonials(Prop: { class: string }) {
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
    <section
      className={`${Prop.class} flex justify-center content-center p-[5%]`}
    >
      <div>
        <div className="text-center">
          <h1 className="text-xs mb-5">OUR TESTIMONIALS</h1>
          <h1 className="text-2xl sm:text-4xl text-red-700 font-extrabold">
            Bale Archterra Feedback from Our Clients
          </h1>
          <p className="mt-2 mb-10">
            We are proudly driven to help design a better world, We are trusted
            by our clients and experienced to plan better.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 lg:max-w-7xl">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className={` bg-[#063852] p-3 text-white sm:p-5 text-center hover:scale-[1.02] hover:bg-red-700 rounded-md flex flex-col justify-between`}
            >
              <div>
                <p className="text-[10px] md:text-xs lg:text-sm italic font-extralight mb-3">
                  "{item.testimony}"
                </p>
              </div>
              <div className="flex mt-5">
                <div className="text-4xl content-center text-yellow-500 font-extrabold">
                  <RxAvatar />
                </div>
                <div className="text-left ml-2">
                  <h1 className="font-bold mb-1 mt-3 text-xs lg:text-md">
                    {item.name}
                  </h1>
                  <p className="font-extralight text-[10px] sm:text-xs">
                    {item.job}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
