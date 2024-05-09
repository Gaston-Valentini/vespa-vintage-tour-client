import style from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
import Header from "./sections/Header/Header";
import Essential from "./sections/Essential/Essential";
import Routes from "./sections/Routes/Routes";

export default function App() {
    return (
        <div className={style.container}>
            <Navbar />
            <Header />
            <Essential />
            <Routes />
        </div>
    );
}
