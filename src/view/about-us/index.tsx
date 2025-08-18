import TeamsAbout from "@/components/about/teamsAbout";
import HistoryAbout from "@/components/about/historyAbout";
import ImageSliderAbout from "@/components/about/imagesSliderAbout";
import CultureAbout from "@/components/about/cultureAbout";
import AboutHome from "@/components/about/aboutHome";
import HeaderPages from "@/components/home/headerPages";
import ImagesSwiperGalery from "@/components/about/imagesSwiperGalery";

export default function AboutPage() {
  return (
    <div className="overflow-hidden">
      <HeaderPages img={"/building.jpg"} />
      <AboutHome display={"hidden"} />
      <ImagesSwiperGalery />
      <HistoryAbout />
      <ImageSliderAbout />
      <TeamsAbout />
      <CultureAbout />
    </div>
  );
}
