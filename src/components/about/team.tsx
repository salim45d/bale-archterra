import TeamsMember from "../team/components/teamsMember";
import ContentfulPage from "./components/contentfulPage";

export default function Team() {
  const entry = process.env.NEXT_PUBLIC_CONTENTFUL_ENTRY_ID_TEAM || "";

  return (
    <>
      <ContentfulPage
        entry={entry}
        class={"px-[5%]"}
        classTeam={"bg-[whitesmoke] p-5 sm:p-[5%] rounded-md"}
      />
      <TeamsMember />
    </>
  );
}
