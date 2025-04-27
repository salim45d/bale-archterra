import ContentfulPage from "./components/contentfulPage";

export default function CultureAbout() {
  const entry = process.env.NEXT_PUBLIC_CONTENTFUL_ENTRY_ID_CULTURE || "";

  return (
    <ContentfulPage
      entry={entry}
      class={"bg-[whitesmoke] p-[5%]"}
      classTeam={""}
    />
  );
}
