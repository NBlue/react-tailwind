import Cards from "../../assets/desktop/isocard.svg";

const Slogan = () => {
    return (
        <section className="text-36 my-14 relative font-extrabold md:my-28 md:grid md:grid-cols-3 md:items-center md:text-48">
            <div className="text-center md:col-span-1 md:col-start-2">
                <p>
                    Earn <span className="text-purple-300">More</span>
                </p>
                <p className=""> Pay Less </p>
                <button className="text-20 px-6 py-[6px] font-bold mt-[27px] text-white bg-purple-500 rounded-[14px] hover:bg-pink-500 transition-all duration-300 md:px-10">
                    Start
                </button>
            </div>
            <div className="mt-[69px] md:absolute md:right-[-90px]">
                <img src={Cards} alt="" />
            </div>
        </section>
    );
};

export default Slogan;
