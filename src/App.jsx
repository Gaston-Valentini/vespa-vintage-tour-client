import style from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
import Header from "./sections/Header/Header";
import Essential from "./sections/Essential/Essential";

export default function App() {
    return (
        <div className={style.container}>
            <Navbar />
            <Header />
            <Essential />
        </div>
    );
}
