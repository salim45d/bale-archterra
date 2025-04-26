import Link from "next/link";
import { INavbar } from "@/store/slice/navbar";
import { useSelector } from "react-redux";
import { motion } from "motion/react";
import { variantUpslide } from "@/components/motion/motion";

export default function Navlink() {
  const navItem = useSelector(
    (state: { navbar: INavbar }) => state.navbar.navItem
  );

  return (
    <div className="font-semibold content-center">
      <ul className="flex justify-between  w-80">
        {navItem.map((item, idx) => (
          <motion.li
            key={idx}
            variants={variantUpslide}
            custom={idx + 1}
            initial="initial"
            whileInView="animate"
            className="overflow-hidden"
          >
            <Link
              href={item.href}
              className="hover:text-yellow-500 hover:font-extrabold"
            >
              {item.navtext}
            </Link>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
