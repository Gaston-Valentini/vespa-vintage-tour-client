import style from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
import Header from "./sections/Header/Header";
import Important from "./sections/Important/Important";
import Routes from "./sections/Routes/Routes";
import About from "./sections/About/About";
import Contact from "./sections/Contact/Contact";
import Footer from "./components/Footer/Footer";
import DetailedRoutes from "./sections/DetailedRoutes/DetailedRoutes";

export default function App() {
    return (
        <div className={style.container}>
            <Navbar />
            <Header />
            <About />
            <Routes />
            <Important />
            <DetailedRoutes />
            <Contact />
            <Footer />
        </div>
    );
}
