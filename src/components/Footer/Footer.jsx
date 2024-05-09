import style from "./Footer.module.css";
import logo from "../../assets/images/logo.png";
import { FaLocationDot, FaClock, FaPhone, FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function Footer() {
    return (
        <section className={style.container}>
            <div className={style.logo}>
                <img src={logo} />
            </div>
            <div className={style.data}>
                <div className={style.dataTitle}>CONTÁCTANOS</div>
                <div className={style.dataSection}>
                    <FaLocationDot />
                    <p>Av. Los Olmos 12, San Juan - Alicante, 04302</p>
                </div>
                <div className={style.dataSection}>
                    <FaClock />
                    <p>08:00 - 17:00</p>
                </div>
                <div className={style.dataSection}>
                    <FaPhone />
                    <p>+34622345237</p>
                </div>
                <div className={style.dataSection}>
                    <MdEmail />
                    <p>vespavintagetour@gmail.com</p>
                </div>
                <div className={style.dataSocial}>
                    <div>
                        <FaWhatsapp />
                    </div>
                    <a href="#">
                        <FaInstagram />
                    </a>
                    <a href="#">
                        <FaFacebookF />
                    </a>
                </div>
            </div>
            <div className={style.navbar}>
                <div className={style.navbarTitle}>NAVEGACIÓN</div>
                <a href="#header">Inicio</a>
                <a href="#essential">Esencial</a>
                <a href="#routes">Nuestras rutas</a>
                <a href="#about">Sobre nosotros</a>
                <a href="#contact">Contacto</a>
            </div>
        </section>
    );
}
