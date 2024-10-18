import { navigationMenuItem } from "@/types/navigationMenuItem";
import {
  IconBriefcase,
  IconCallCalling,
  IconCar,
  IconDocumentText,
  IconService,
} from "../icons";

export const menuItems: navigationMenuItem[] = [
  {
    title: "رزرو خودرو",
    href: "/cars",
    icon: <IconCar width={20} height={20}/>,
  },
  {
    title: "خدمات ما",
    href: "/",
    icon: <IconService fill="none" width={20} height={20}/>,
  },
  {
    title: "بلاگ",
    href: "/blog",
    icon: <IconDocumentText fill="none" width={20} height={20}/>,
  },
  {
    title: "درباره ما",
    href: "/about",
    icon: <IconBriefcase fill="none" width={20} height={20}/>,
  },
  {
    title: "تماس با ما",
    href: "/contact",
    icon: <IconCallCalling width={20} height={20}/>,
  },
];
