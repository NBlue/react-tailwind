// Customer hook dark mode
import { useState, useEffect } from "react";

const useDarkMode = () => {
    // Lưu vào localstorage để khi reload lại ko bị mất
    const [isDarkMode, setDarkMode] = useState(
        () => localStorage.theme === "dark"
    );
    const toggleDarkMode = () => {
        setDarkMode(!isDarkMode);
    };
    useEffect(() => {
        const html = window.document.documentElement; // Lấy toàn bộ element trong document
        const prev = isDarkMode ? "light" : "dark";
        html.classList.remove(prev);
        const next = isDarkMode ? "dark" : "light";
        html.classList.add(next);
        localStorage.setItem("theme", next);
    }, [isDarkMode]);
    return [isDarkMode, toggleDarkMode];
};

export default useDarkMode;
