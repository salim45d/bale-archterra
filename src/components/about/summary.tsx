import Image from "next/image";

export default function Summary() {
  const image = [
    { id: 1, href: "/history3.jpg" },
    { id: 2, href: "/history1.jpg" },
    { id: 3, href: "/history2.jpg" },
    { id: 4, href: "/history.jpg" },
  ];

  return (
    <summary className="grid grid-cols-2 sm:grid-cols-4 gap-2 p-5 my-[5%]">
      {image.map((item, idx) => (
        <div key={idx} className="inline-block sm:content-center">
          <Image
            src={item.href}
            className={`rounded-md w-full object-cover h-auto`}
            width={500}
            height={400}
            alt="history-section-image"
          />
        </div>
      ))}
    </summary>
  );
}
