import Link from "next/link";
import { IconSearchNormal } from "../icons";

const menuItems: navigationMenuItem[] = [
  {
    title: "رزرو خودرو",
    href: "/cars",
  },
  {
    title: "خدمات ما",
    href: "/",
  },
  {
    title: "بلاگ",
    href: "/blog",
  },
  {
    title: "درباره ما",
    href: "/about",
  },
  {
    title: "تماس با ما",
    href: "/contact",
  },
];

export const TopNavigation: React.FC = () => {
  return (
    <nav className="flex items-center font-[500] text-base text-neutral-g10">
      <ul className="flex gap-10 items-center">
        {menuItems.map((item) => (
          <li key={`navigation-${item.href}`}>
            <Link href={item.href}>{item.title}</Link>
          </li>
        ))}
      </ul>
      {/* searchBar */}
      <div className="mr-[43.18px] cursor-pointer">
        <IconSearchNormal width={19} height={19} stroke="#5C5F61" />
      </div>
    </nav>
  );
};
