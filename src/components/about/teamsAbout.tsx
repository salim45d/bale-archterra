import TeamsMemberCardSwiper from "../team/components/teamsCardWiper";
import AboutContentfulPage from "./components/contentfulPage";

export default function TeamsAbout() {
  const entry = process.env.NEXT_PUBLIC_CONTENTFUL_ENTRY_ID_TEAM || "";

  return (
    <>
      <AboutContentfulPage
        entry={entry}
        class={"p-[5%]"}
        classTeam={"bg-red-100 p-5 rounded-xl"}
      />
      <TeamsMemberCardSwiper />
    </>
  );
}
