import {
  BookOpenText,
  House,
  Package,
  ShieldCheck,
  Star,
  TableOfContents,
} from "lucide-react";

export const NavLinks = [
  { name: "الصفحة الرئيسيــــة", url: "#home", icon: House },
  {
    name: "الوصـــــــــــــــــــــــــــــف",
    url: "#info",
    icon: BookOpenText,
  },
  {
    name: "محتويات العلبـــــــــة",
    url: "#box-content",
    icon: TableOfContents,
  },
  {
    name: "الـــــــــــــــــــــــضمانات",
    url: "#guarantees",
    icon: ShieldCheck,
  },
  {
    name: "رأي العمــــــــــــــــــلاء",
    url: "#testimonials",
    icon: Star,
  },
  {
    name: "نموذج الطلــــــــــــــب",
    url: "#order",
    icon: Package,
  },
];
