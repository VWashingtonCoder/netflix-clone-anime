import Image from "next/image";
import NavbarItem from "./NavabarItem";
import MobileMenu from "./MobileMenu";
import { BsChevronDown, BsSearch, BsBell } from "react-icons/bs";
import { useCallback, useState } from "react";
import AccountMenu from "./AccountMenu";

export default function Navbar() {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [showAccountMenu, setShowAccountMenu] = useState(false);

    const toggleMobileMenu = useCallback(() => {
        setShowMobileMenu((current) => !current)
    }, [])

    const toggleAccountMenu = useCallback(() => {
        setShowAccountMenu((current) => !current)
    }, [])

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
        <div 
            className="
                lg:hidden 
                flex 
                flex-row 
                items-center 
                gap-2 
                ml-8 
                cursor-pointer 
                relative
            "
            onClick={toggleMobileMenu}
        >
            <p className="text-white text-sm">Browse</p>
            <BsChevronDown className="text-white transition"/>
            <MobileMenu visible={showMobileMenu} />
        </div>

        <div className="flex flex-row ml-auto gap-7 items-center">
            <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
                <BsSearch />
            </div>
            <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
                <BsBell />
            </div>

            <div onClick={toggleAccountMenu} className="flex flex-row items-center gap-2 cursor-pointer relative">
                <div className="w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden">
                    <Image src="/images/default-blue.png" alt="profile" width={100} height={100} />
                </div>
                <BsChevronDown className="text-white transition" />
                <AccountMenu visible={showAccountMenu} />
            </div>
        </div>
      </div>
    </nav>
  );
}
