import ContactSection from "@/components/contact/contact-section";
import HeaderPages from "@/components/home/headerPages";

export default function ContactPage() {
  return (
    <div className="overflow-hidden">
      <HeaderPages img={"/about-colorfull-large.jpg"} />
      <ContactSection />
    </div>
  );
}
