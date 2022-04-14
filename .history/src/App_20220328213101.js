import "./App.css";
import Content from "./component/Content/Content";
import NavBar from "./component/Navbar/Navbar";
import Slogan from "./component/Slogan/Slogan";

function App() {
    return (
        <div className="font-sora overflow-y-auto overflow-x-hidden h-screen px-4 py-8 bg-gradient-to-b dark:from-purple-900 dark:to-purple-700 from-white to-pink-500  dark:text-white text-black md:px-20">
            <NavBar />
            <Slogan />
            <Content />
        </div>
    );
}

export default App;
