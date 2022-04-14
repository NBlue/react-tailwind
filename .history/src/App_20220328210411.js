import "./App.css";
import Content from "./component/Content/Content";
import NavBar from "./component/Navbar/Navbar";
import Slogan from "./component/Slogan/Slogan";

function App() {
    return (
        <div className="font-sora overflow-y-auto overflow-x-hidden h-screen px-4 py-8 bg-gradient-to-b from-purple-900 to-purple-700r text-purple-600">
            <NavBar />
            <Slogan />
            <Content />
        </div>
    );
}

export default App;
