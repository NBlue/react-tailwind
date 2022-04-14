import { BsFillSunFill } from "react-icons/bs"; //bs là 2 chữ cái đầu tiên

const NavBar = () => {
    return (
        <nav className="flex items-center ">
            <div className="flex items-center ">
                <div className="text-[20px] font-bold mr-2">NerdCard</div>
                <BsFillSunFill
                    size={"24px"}
                    color="#e9c46a"
                    className="cursor-pointer"
                />
            </div>
        </nav>
    );
};
export default NavBar;
