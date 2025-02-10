import Link from "next/link";
import { IconSearchNormal } from "../icons";
import { menuItems } from "./menuItems";

export const TopNavigation: React.FC<React.HtmlHTMLAttributes<HTMLElement>> = ({
  className,
}) => {
  return (
    <nav className="hidden md:flex items-center font-[500] text-base text-neutral-g10 ">
      <ul className="flex gap-10 items-start ">
        {menuItems.map((item) => (
          <li key={`navigation-${item.href}`}>
            <Link href={item.href}>{item.title}</Link>
          </li>
        ))}
      </ul>
      {/* searchBar */}
      <div className="mr-[43.18px] cursor-pointer hidden lg:block">
        <IconSearchNormal width={19} height={19} className="text-[#5C5F61] " />
      </div>
    </nav>
  );
};
