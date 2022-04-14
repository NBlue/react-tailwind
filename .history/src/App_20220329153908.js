import "./App.css";
import Content from "./component/Content/Content";
import NavBar from "./component/Navbar/Navbar";
import Slogan from "./component/Slogan/Slogan";

import { useEffect, useState } from "react";

function App() {
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    });
    const [isMobile, setMobile] = useState(false);

    // Set windowSize để tùy chỉnh màn hình, useEffect này thuộc trường hợp 2 lấy ngay lần đầu
    useEffect(() => {
        const handleSize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };
        window.addEventListener("resize", handleSize);
        handleSize();
        return () => window.removeEventListener("resize", handleSize);
    }, []);

    useEffect(() => {
        // Nếu chiều rộng màn hình < 500 thì nó là mobile
        if (windowSize.width < 500) {
            setMobile(true);
        } else {
            setMobile(false);
        }
    }, [windowSize]);

    return (
        <div className="font-sora overflow-y-auto overflow-x-hidden h-screen px-4 py-8 dark:text-white text-black bg-gradient-to-b dark:from-purple-900 dark:to-purple-700 from-white to-pink-500 md:px-20">
            <NavBar isMobile={isMobile} />
            <Slogan />
            <Content />
        </div>
    );
}

export default App;
