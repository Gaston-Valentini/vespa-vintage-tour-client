import style from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";

export default function App() {
    return (
        <div className={style.container}>
            <Navbar />
        </div>
    );
}
