import Image from "next/image";

export default function ImageSliderAbout() {
  const image = [
    { id: 1, href: "/history3.jpg" },
    { id: 2, href: "/history1.jpg" },
    { id: 3, href: "/history2.jpg" },
    { id: 4, href: "/history.jpg" },
  ];

  return (
    <summary className="flex justify-center">
      <div
        className="flex overflow-hidden space-x-2 max-w-7xl"
        data-aos="flip-right"
      >
        <div className="flex space-x-2 animate-loop-scroll">
          {image.map((item, idx) => (
            <div key={idx} className="inline-block content-center">
              <Image
                src={item.href}
                className={`rounded-lg object-cover max-w-none`}
                width={300}
                height={400}
                alt={`History Image ${idx}`}
                loading="lazy"
              />
            </div>
          ))}
        </div>
        <div className="flex space-x-2 animate-loop-scroll" aria-hidden="true">
          {image.map((item, idx) => (
            <div key={idx} className="inline-block content-center">
              <Image
                src={item.href}
                className={`rounded-lg object-cover max-w-none`}
                width={300}
                height={400}
                alt={`History Image ${idx}`}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </summary>
  );
}
