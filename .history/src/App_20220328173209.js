import "./App.css";
import NavBar from "./component/Navbar/Navbar";
import Slogan from "./component/Slogan/Slogan";

function App() {
    return (
        <div className="font-sora h-screen px-4 py-8 bg-gradient-to-b from-purple-900 to-purple-700r text-white">
            <NavBar />
            <Slogan />
        </div>
    );
}

export default App;
