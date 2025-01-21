import { Menu } from "lucide-react";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { NavLinks } from "../../../constants";
import Link from "next/link";

const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="outline">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="top">
        <SheetHeader>
          <SheetTitle>القائمة الرئيسية</SheetTitle>
          <ul className="flex flex-col gap-2">
            {NavLinks.map((link) => (
              <li
                key={link.name}
                className="flex justify-center items-center gap-4 bg-secondary/30 hover:bg-secondary py-2 rounded-md transition-all"
              >
                <SheetClose asChild>
                  <Link
                    href={link.url}
                    className="flex justify-center items-center gap-3 w-full h-full text-center"
                  >
                    <link.icon size={22} />
                    {link.name}
                  </Link>
                </SheetClose>
              </li>
            ))}
          </ul>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
