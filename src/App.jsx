import style from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
import Header from "./sections/Header/Header";
import Essential from "./sections/Essential/Essential";
import Routes from "./sections/Routes/Routes";
import About from "./sections/About/About";
import Contact from "./sections/Contact/Contact";
import Footer from "./components/Footer/Footer";

export default function App() {
    return (
        <div className={style.container}>
            <Navbar />
            <Header />
            <Essential />
            <Routes />
            <About />
            <Contact />
            <Footer />
        </div>
    );
}
