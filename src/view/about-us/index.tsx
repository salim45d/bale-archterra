import Header from "@/components/header/header";
import Headline from "@/components/headline/headline";
import History from "@/components/about/history";
import AboutHome from "@/components/about/aboutHome";
import Team from "@/components/about/team";
import Culture from "@/components/about/culture";
import ImageSlider from "@/components/about/images";

export default function AboutPage() {
  return (
    <div className="overflow-hidden">
      <Header img={"/building.jpg"} tittle={"About us"} />
      <Headline />
      <AboutHome class={"bg-[whitesmoke]"} display={"hidden"} />
      <History />
      <ImageSlider />
      <Team />
      <Culture />
    </div>
  );
}
