import {
  BookOpenText,
  House,
  Package,
  ShieldCheck,
  Star,
  TableOfContents,
} from "lucide-react";

export const NavLinks = [
  { name: "الصفحة الرئيسيــــــــــــــــــــة", url: "#home", icon: House },
  {
    name: "الوصـــــــــــــــــــــــــــــــــــــــــــــف",
    url: "#info",
    icon: BookOpenText,
  },
  {
    name: "محتويات العلبــــــــــــــــــــــــة",
    url: "#box-content",
    icon: TableOfContents,
  },
  {
    name: "الـــــــضمانات و الإسترجاع",
    url: "#guarantees",
    icon: ShieldCheck,
  },
  {
    name: "رأي العمـــــــــــــــــــــــــــــــــلاء",
    url: "#testimonials",
    icon: Star,
  },
  {
    name: "نموذج الطلــــــــــــــــــــــــــــب",
    url: "#order",
    icon: Package,
  },
];
