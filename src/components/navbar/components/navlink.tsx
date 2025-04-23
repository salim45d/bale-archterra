import { INavbar } from "@/store/slice/navbar";
import { useSelector } from "react-redux";
import Link from "next/link";
import { IMotion } from "@/store/slice/motion";
import { motion } from "motion/react";

export default function Navlink(Prop: { class: string; classLi: string }) {
  const navItem = useSelector(
    (state: { navbar: INavbar }) => state.navbar.navItem
  );
  const frame = useSelector((state: { motion: IMotion }) => state.motion);
  const variant = frame.motionTitle;

  return (
    <div className="font-semibold content-center">
      <ul className={`${Prop.class} flex`}>
        {navItem.map((item, idx) => (
          <motion.li
            key={idx}
            variants={variant}
            custom={idx + 1}
            initial="initial"
            animate="animate"
            className={Prop.classLi}
          >
            <Link href={item.href} className="hover:scale-150">
              {item.navtext}
            </Link>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
