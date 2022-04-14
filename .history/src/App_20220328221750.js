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
        const handlSize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };
        window.addEventListener("resize", handlSize);
        handlSize();
        return () => window.removeEventListener("resize");
    }, []);
    return (
        <div className="font-sora overflow-y-auto overflow-x-hidden h-screen px-4 py-8 text-white bg-gradient-to-b dark:from-purple-900 to-purple-700">
            <NavBar />
            <Slogan />
            <Content />
        </div>
    );
}

export default App;
