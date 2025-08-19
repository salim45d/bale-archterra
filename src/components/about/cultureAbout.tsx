import AboutContentfulPage from "./components/contentfulPage";

export default function CultureAbout() {
  const entry = process.env.NEXT_PUBLIC_CONTENTFUL_ENTRY_ID_CULTURE || "";

  return (
    <AboutContentfulPage
      entry={entry}
      class={"p-[5%]"}
      classTeam={""}
    />
  );
}
