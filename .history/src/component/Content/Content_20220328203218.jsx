import { FaUser } from "react-icons/fa";

const Content = () => {
    return (
        <section className="">
            <div className="ml-[70px] mr-[54px] font-bold bg-purple-600 flex items-center bg-gradient-to-b shadow-md from-white/40 to transparent rounded-[24px]">
                <div className="mt-16 flex">
                    <FaUser size={"22px"} className="mt-3" />
                    <p className="text-26">10245</p>
                </div>
            </div>
        </section>
    );
};
export default Content;
