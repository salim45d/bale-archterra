import ContentfulPage from "./components/contentfulPage";

export default async function History() {
  const entry = process.env.NEXT_PUBLIC_CONTENTFUL_ENTRY_ID_HISTORY || "";

  return (
    <ContentfulPage
      entry={entry}
      class={"bg-[whitesmoke] p-[5%]"}
      classTeam={""}
    />
  );
}
