import { BsFillSunFill } from "react-icons/bs"; //bs là 2 chữ cái đầu tiên
import { HiOutlineMenu } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";

import { useState } from "react";

const NavBar = ({ isMobile }) => {
    const [openMenu, setOpenMenu] = useState(false);
    const handleMenu = () => {
        setOpenMenu(!openMenu);
    };
    return (
        <nav className="flex items-center ">
            <div className="flex items-center ">
                <div className="text-[20px] font-bold mr-2">NerdCard</div>
                <BsFillSunFill
                    size={"24px"}
                    color="#e9c46a"
                    className="cursor-pointer"
                />
                <ul className="md:flex md:gap-10 ml-48 text-16 font-semibold">
                    {/* Nếu openMenu là true thì hiện cái close kia ra ko thì hiện menu hambogo */}
                    {openMenu && isMobile ? (
                        <MdOutlineClose
                            size={"24px"}
                            className="cursor-pointer"
                            onClick={handleMenu}
                        />
                    ) : !openMenu && isMobile ? (
                        <HiOutlineMenu
                            size={"24px"}
                            className="cursor-pointer"
                            onClick={handleMenu}
                        />
                    ) : (
                        <>
                            <li className="hover:text-purple-500 transition-all duration-500 cursor-pointer">
                                Feature
                            </li>
                            <li>Menu</li>
                            <li>Out Story</li>
                            <li>Contact</li>
                        </>
                    )}
                    {openMenu && (
                        <div className="absolute right-8 bg-white p-8 text-center text-black text-13 cursor-pointer">
                            <li>Feature</li>
                            <li>Menu</li>
                            <li>Out Story</li>
                            <li>Contact</li>
                        </div>
                    )}
                </ul>
            </div>
        </nav>
    );
};
export default NavBar;
