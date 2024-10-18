"use client";
import Link from "next/link";
import { IconProfileCircle } from "../icons";
import { MobileMenu } from "./mobileMenu";
import { TopNavigation } from "./topNavigation";
import Image from "next/image";

export const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-center">
      {/* Menu */}
      <div className="w-full lg:w-[90%] xl:w-[85%] 2xl:container">
        <div className="flex items-center justify-between py-3 md:py-[18.5px] px-5 lg:px-8 bg-white lg:rounded-b-2xl">
          {/* mobile menu */}
          <MobileMenu />

          {/* logo */}
          <div className="flex gap-[5px] items-center">
            <Image
              className="hidden lg:block"
              src="/images/autoRent.webp"
              alt="اتورنت"
              width={59}
              height={59}
            />
            <p className="text-2xl font-[900] leading-180">
              <span className="text-primary">اُتــو</span>
              <span className="text-secondary">رِنت</span>
            </p>
          </div>
          {/* menu & searchBar */}
          <TopNavigation />
          {/* login/register & userPanel */}
          <Link
            href="#"
            className="hidden md:block py-1.5 px-4 bg-primary font-[500] text-white text-base rounded-lg leading-180"
          >
            ورود / ثبت‌نام
          </Link>
          <IconProfileCircle className="md:hidden" />
        </div>
      </div>
    </header>
  );
};
