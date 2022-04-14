import { FaUser } from "react-icons/fa";
import { BsFillCreditCardFill } from "react-icons/bs";
import checkIconMobile from "../../assets/mobile/checkpoint.svg";

import { useSpring, animated } from "react-spring";

const Content = () => {
    // animation customer bằng react spring
    // Muốn số chạy từ 0 đến 10245
    const customer = useSpring({ customers: 10245, from: { customers: 0 } });
    const card = useSpring({ cards: 12045, from: { cards: 0 } });

    return (
        <section className="md:flex md:flex-row">
            <div className="ml-[70px] mr-[54px] font-bold  flex flex-col items-center bg-gradient-to-b shadow-md from-white/40 to transparent rounded-[24px] text-white md:w-[20%]">
                <div className="mt-16 gap-8 flex items-start md:text-16">
                    <FaUser size={"22px"} className="mt-3" />
                    <div className="text-26">
                        <animated.div>
                            {/* Math.floor: làm tròn giá trị */}
                            {customer.customers.to((val) => Math.floor(val))}
                        </animated.div>
                        <p className="text-13 font-semibold">Customer</p>
                    </div>
                </div>
                <div className="mt-16 gap-8 flex items-start md:text-16">
                    <BsFillCreditCardFill size={"22px"} className="mt-[12px]" />
                    <div className="text-26">
                        <animated.div>
                            {/* Math.floor: làm tròn giá trị */}
                            {card.cards.to((val) => Math.floor(val))}
                        </animated.div>
                        <p className="text-13 font-semibold mb-[36px]">
                            Cards Issued
                        </p>
                    </div>
                </div>
            </div>
            <div className="text-13 flex flex-col w-[100%] mt-[90px] font-semibold md:w-[30%] md:text-16 md:ml-[20%]">
                <div className="check-content">
                    <img src={checkIconMobile} alt="" />
                    <p> Card reports sent to your phone every weeks</p>
                </div>
                <div className="check-content">
                    <img src={checkIconMobile} alt="" />
                    <p> No external fees</p>
                </div>
                <div className="check-content">
                    <img src={checkIconMobile} alt="" />
                    <p> Set spending limits and restrictions</p>
                </div>
            </div>
        </section>
    );
};
export default Content;
