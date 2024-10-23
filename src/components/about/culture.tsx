import { getAboutContentfulPage } from "@/api/api";
import RichText from "@/components/richtext/richText";

export default async function Team() {
  const entry = process.env.NEXT_PUBLIC_CONTENTFUL_ENTRY_ID_CULTURE || "";
  const about = await getAboutContentfulPage(entry);

  return (
    <div>
      <section
        className="bg-[whitesmoke] p-[5%] mt-1 flex justify-center"
        id={about?.fields.slug}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 lg:max-w-7xl">
          <div className="mb-3 col-span-2 sm:col-span-1">
            <h1 className="text-xs mb-5">ABOUT US</h1>
            <h1 className="text-2xl sm:text-4xl text-red-700 font-extrabold">
              {about?.fields.title}
            </h1>
            <p className="text-[#063852] font-extrabold">
              {about?.fields.subtitle}
            </p>
          </div>
          <div className="text-justify leading-relaxed">
            <RichText document={about?.fields.opening} />
          </div>
          <div className="text-justify leading-relaxed col-span-2">
            <RichText document={about?.fields.body} />
            <div className="mt-2">
              <RichText document={about?.fields.closing} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
