import { BsFillSunFill } from "react-icons/bs"; //bs là 2 chữ cái đầu tiên
import { HiOutlineMenu } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";

import { useState } from "react";

const NavBar = () => {
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
                <ul className="ml-48 text-16 font-semibold">
                    {/* Nếu openMenu là true thì hiện cái close kia ra */}
                    {openMenu ? (
                        <MdOutlineClose
                            size={"24px"}
                            className="cursor-pointer"
                            onClick={handleMenu}
                        />
                    ) : (
                        <HiOutlineMenu
                            size={"24px"}
                            className="cursor-pointer"
                            onClick={handleMenu}
                        />
                    )}
                </ul>
            </div>
        </nav>
    );
};
export default NavBar;
