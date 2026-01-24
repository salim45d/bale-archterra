import ITitle from "@/types/title.interface";

export default function TitleSlice(Prop: ITitle) {
  return (
    <div data-aos="zoom-in-up" className="mb-10">
      <h1 className="text-sm text-[#063852]  font-bold mb-3">
        {Prop.subtitle}
      </h1>
      <h1 className="text-2xl sm:text-4xl text-red-700 font-extrabold">
        {Prop.title}
      </h1>
      <p className="mt-1 text-[#063852] font-bold">{Prop.quote}</p>
    </div>
  );
}
