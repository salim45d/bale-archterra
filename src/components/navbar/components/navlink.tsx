import { INavbar } from "@/store/slice/navbar";
import { useSelector } from "react-redux";
import Link from "next/link";

export default function Navlink(Prop: { class: string; classLi: string }) {
  const navItem = useSelector(
    (state: { navbar: INavbar }) => state.navbar.navItem
  );

  return (
    <div className="font-semibold content-center">
      <ul className={`${Prop.class} flex`}>
        {navItem.map((item) => (
          <li key={item.id} className={Prop.classLi}>
            <Link href={item.href} className="hover:scale-150">
              {item.navtext}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
