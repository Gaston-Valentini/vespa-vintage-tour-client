import style from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
import Header from "./sections/Header/Header";

export default function App() {
    return (
        <div className={style.container}>
            <Navbar />
            <Header />
        </div>
    );
}
