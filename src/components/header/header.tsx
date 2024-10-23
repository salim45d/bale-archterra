import Image from "next/image";

interface IHeader {
  img: string;
  tittle: string;
}

export default function Header(prop: IHeader) {
  return (
    <header>
      <div className="relative bg-black pt-14 sm:pt-0">
        <div className="absolute gradient"></div>
        <Image
          className="w-full h-96 object-cover"
          src={prop.img}
          alt="Header Page Image"
          width={500}
          height={200}
          priority={true}
        />
        <div className="absolute w-[100%] h-[100%] top-0 text-center content-center">
          <h1 className="text-2xl sm:text-4xl font-extrabold text-yellow-500 mb-20">
            {prop.tittle}
          </h1>
        </div>
      </div>
    </header>
  );
}
