import TeamsAbout from "@/components/about/teamsAbout";
import HistoryAbout from "@/components/about/historyAbout";
import ImageSliderAbout from "@/components/about/imagesSliderAbout";
import CultureAbout from "@/components/about/cultureAbout";
import AboutHome from "@/components/about/aboutHome";
import HeaderHeadline from "@/components/home/headerHeadline";
import HeaderPages from "@/components/home/headerPages";

export default function AboutPage() {
  return (
    <div className="overflow-hidden">
      <HeaderPages img={"/building.jpg"} tittle={"About us"} />
      <HeaderHeadline />
      <AboutHome class={"bg-[whitesmoke]"} display={"hidden"} />
      <HistoryAbout />
      <ImageSliderAbout />
      <TeamsAbout />
      <CultureAbout />
    </div>
  );
}
