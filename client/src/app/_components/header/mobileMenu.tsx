import Image from "next/image";
import { IconCar, IconCloseCircle, IconMenu } from "../icons";
import { useState } from "react";
import { Overlay } from "../overlay/overlay";
import { menuItems } from "./menuItems";
import Link from "next/link";

export const MobileMenu: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const setIsOpen = () => {
    setMenuOpen((prev) => !prev);
  };
  return (
    <>
      {/* mobile menu */}
      <div className="mobile-nav md:hidden">
        {/* Menu Icon */}
        <IconMenu onClick={() => setMenuOpen((prev) => !prev)} />
        {menuOpen && <Overlay isOpen={menuOpen} setIsOpen={setIsOpen} />}
        <div
          className={`fixed ${
            menuOpen ? `right-0` : `-right-64`
          } w-64 bottom-0 top-0  pt-3 px-4 bg-white z-20 transition-all`}
        >
          {/* Menu Header */}
          <div className="flex items-center  border-b border-gray-300 mb-6 pb-5">
            {/* Menu Header Logo */}
            <div className="flex gap-2 items-center">
              <Image
                src="/images/autoRent.webp"
                alt="اتورنت"
                width={46}
                height={46}
                priority={true}
              />
              <p className="text-2xl font-[900] leading-180">
                <span className="text-primary">اُتــو</span>
                <span className="text-secondary">رِنت</span>
              </p>
            </div>
            {/* Menu Header Close Icon */}
            <IconCloseCircle
              onClick={() => setMenuOpen((prev) => !prev)}
              width={20}
              height={20}
              className="mr-auto"
            />
          </div>
          {/* Menu Body */}
          <ul className="flex flex-col space-y-6 items-start pr-2.5">
            {menuItems.map((item) => (
              <li key={`navigation-${item.href}`}>
                    <Link href={item.href} className="flex items-center gap-x-2">
                        {item.icon}
                        {item.title}
                    </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
