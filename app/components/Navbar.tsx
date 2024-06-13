import Image from "next/image";
import NavbarItem from "./NavabarItem";
import { BsChevronDown } from "react-icons/bs";

export default function Navbar() {
  return (
    <nav className="w-full fixed z-40">
      <div
        className="
                  px-4
                  md:px-16
                  py-6
                  flex
                  flex-row
                  items-center
                  transition
                  duration-500
                  bg-zinc-900
                  bg-opacity-90
                "
      >
        <Image src="/images/logo.png" alt="logo" width={200} height={500} />
        <div
          className="
           hidden
           lg:flex           
           flex-row
           ml-8
           gap-5
          "
        >
          <NavbarItem label="Home" />
          <NavbarItem label="Series" />
          <NavbarItem label="Films" />
          <NavbarItem label="New & Popular" />
          <NavbarItem label="My List" />
          <NavbarItem label="Browse by languages" />
        </div>
        <div className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative">
            <p className="text-white text-sm">Browse</p>
            <BsChevronDown className="text-white transition"/>
        </div>
      </div>
    </nav>
  );
}
