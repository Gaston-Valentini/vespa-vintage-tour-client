import style from "./Footer.module.css";
import logo from "../../assets/images/logo-white.png";
import { FaLocationDot, FaClock, FaPhone, FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function Footer() {
    const onWhatsapp = () => {
        const phone = "+34603120210";
        const message = "!Hola! Me gustaría recibir más información, mi nombre es: ";
        const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

        window.open(url);
    };

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
                    <p>+34603120210</p>
                </div>
                <div className={style.dataSection}>
                    <MdEmail />
                    <p>vespavintagetours@gmail.com</p>
                </div>
                <div className={style.dataSocial}>
                    <div onClick={onWhatsapp}>
                        <FaWhatsapp />
                    </div>
                    <a href="https://www.instagram.com/vespavintagetours/" target="blank">
                        <FaInstagram />
                    </a>
                    <a href="https://www.facebook.com/vespa.vintage.tours?rdid=x5RWAh9SkUKTAtcp&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2FzhmjqvfSA8ijzt2W%2F" target="blank">
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
