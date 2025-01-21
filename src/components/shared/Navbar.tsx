import Image from "next/image";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import { ModeToggle } from "./ModeToggle";

function Navbar() {
  return (
    <header className="top-0 z-50 fixed flex justify-center items-center border-grid bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b w-full">
      <nav className="flex justify-between items-center px-3 lg:px-14 p-1.5 max-w-[1920px] container">
        <MobileMenu />
        <Link href="#home">
          <Image
            src="/images/logo-dark.png"
            alt="logo"
            width={80}
            height={80}
            className="dark:block hidden"
          />
          <Image
            src="/images/logo-light.png"
            alt="logo"
            width={80}
            height={80}
            className="dark:hidden"
          />
        </Link>
        <ModeToggle />
      </nav>
    </header>
  );
}

export default Navbar;
