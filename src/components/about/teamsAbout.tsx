import TeamsMemberCardSwiper from "../team/components/teamsCardWiper";
import AboutContentfulPage from "./components/contentfulPage";

export default function TeamsAbout() {
  const entry = process.env.NEXT_PUBLIC_CONTENTFUL_ENTRY_ID_TEAM || "";

  return (
    <>
      <AboutContentfulPage
        entry={entry}
        class={"px-[5%]"}
        classTeam={"bg-[whitesmoke] p-5 pb-16 md:p-[5%] md:pb-20  rounded-xl"}
      />
      <TeamsMemberCardSwiper />
    </>
  );
}
