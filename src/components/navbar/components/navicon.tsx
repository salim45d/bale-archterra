import {
  RiInstagramFill,
  RiFacebookCircleFill,
  RiYoutubeFill,
  RiLinkedinFill,
  RiPhoneFill,
  RiMailFill,
} from "react-icons/ri";
import { TbClockHour7Filled } from "react-icons/tb";

export function NavContacticon(Prop: { class: string; classText: string }) {
  return (
    <div className={`${Prop.class} flex`}>
      <div className="flex">
        <RiPhoneFill className="m-1  text-yellow-500" />
        <a
          href="tel:622741234"
          className={`${Prop.classText} content-center  hover:text-yellow-500`}
        >
          +62-274-12345
        </a>
      </div>
      <div className="flex">
        <RiMailFill className="m-1  text-yellow-500" />
        <a
          href="mailto:"
          className={`${Prop.classText} content-center  hover:text-yellow-500`}
        >
          archterra.bale@mail.co
        </a>
      </div>
      <div className="flex">
        <TbClockHour7Filled className="m-1 text-yellow-500" />
        <p className={`${Prop.classText} content-center`}>
          Mon - Fri 08.00 - 16.00
        </p>
      </div>
    </div>
  );
}

export function NavSocialIcon(Prop: { class: string }) {
  return (
    <div className={`${Prop.class} flex text-yellow-500`}>
      <a
        href="https://www.facebook.com/"
        target="_blank"
        className="m-1 mx-2 hover:scale-125"
        aria-label="Facebook"
      >
        <RiFacebookCircleFill />
      </a>
      <a
        href="https://www.instagram.com/"
        target="_blank"
        className="m-1 mx-2 hover:scale-125"
        aria-label="Instagram"
      >
        <RiInstagramFill />
      </a>
      <a
        href="https://www.youtube.com/"
        target="_blank"
        className="m-1 mx-2 hover:scale-125"
        aria-label="Youtube"
      >
        <RiYoutubeFill />
      </a>
      <a
        href="https://www.linkedin.com/"
        target="_blank"
        className="m-1 mx-2 hover:scale-125"
        aria-label="Linkedin"
      >
        <RiLinkedinFill />
      </a>
    </div>
  );
}
