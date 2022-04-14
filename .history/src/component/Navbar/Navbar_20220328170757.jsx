import { BsFillSunFill } from "react-icons/bs"; //bs là 2 chữ cái đầu tiên

const NavBar = () => {
    return (
        <nav className="flex items-center ">
            <div className="flex items-center ">
                <div className="text-[20px] font-bold">NerdCard</div>
                <BsFillSunFill />
            </div>
        </nav>
    );
};
export default NavBar;
