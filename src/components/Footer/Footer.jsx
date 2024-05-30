import style from "./Footer.module.css";
import { useTranslation } from "react-i18next";
import logo from "../../assets/images/logo-white.png";
import { FaLocationDot, FaClock, FaPhone, FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function Footer() {
    const [t, i18n] = useTranslation("global");

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
                <div className={style.dataTitle}>{t("footer.contact")}</div>
                <div className={style.dataSection}>
                    <FaLocationDot />
                    <p>Plaça Apr 3, 92, 03502 Benidorm, Alicante</p>
                </div>
                <div className={style.dataSection}>
                    <FaClock />
                    <p>{t("footer.hour")}</p>
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
                    <a
                        href="https://www.facebook.com/vespa.vintage.tours?rdid=x5RWAh9SkUKTAtcp&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2FzhmjqvfSA8ijzt2W%2F"
                        target="blank"
                    >
                        <FaFacebookF />
                    </a>
                </div>
            </div>
            <div className={style.navbar}>
                <div className={style.navbarTitle}>{t("footer.navigation")}</div>
                <a href="#header">{t("footer.navigationOne")}</a>
                <a href="#about">{t("footer.navigationTwo")}</a>
                <a href="#routes">{t("footer.navigationThree")}</a>
                <a href="#important">{t("footer.navigationFour")}</a>
                <a href="#contact">{t("footer.navigationFive")}</a>
            </div>
        </section>
    );
}
