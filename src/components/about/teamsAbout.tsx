import TeamsMember from "../team/components/teamsMember";
import AboutContentfulPage from "./components/contentfulPage";

export default function TeamsAbout() {
  const entry = process.env.NEXT_PUBLIC_CONTENTFUL_ENTRY_ID_TEAM || "";

  return (
    <>
      <AboutContentfulPage
        entry={entry}
        class={"px-[5%]"}
        classTeam={"bg-[whitesmoke] p-5 sm:p-[5%] rounded-md"}
      />
      <TeamsMember />
    </>
  );
}
