import Link from "next/link";

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
    <nav className="flex items-center font-EstedadMedium text-base text-neutral-g10">
      <ul className="flex gap-10 items-center">
        {menuItems.map((item) => (
          <li key={`navigation-${item.href}`}>
            <Link href={item.href}>{item.title}</Link>
          </li>
        ))}
      </ul>
      {/* searchBar */}
      <div className="mr-[43.18px] cursor-pointer">
        {/* <SearchNormal1 size={19} color="#5C5F61" variant="Outline" /> */}
      </div>
    </nav>
  );
};
