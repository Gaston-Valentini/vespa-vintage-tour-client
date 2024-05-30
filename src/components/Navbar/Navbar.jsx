import style from "./Navbar.module.css";
import { useTranslation } from "react-i18next";
import logo from "../../assets/images/logo-black.png";
import { FaWhatsapp, FaInstagram, FaFacebookF, FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { useState, useEffect } from "react";

export default function Navbar() {
    const [t, i18n] = useTranslation("global");

    const [isOpen, setIsOpen] = useState(true);
    const [windowSize, setWindowSize] = useState(window.innerWidth);

    const handleLanguage = (e) => {
        i18n.changeLanguage(e.target.value);
    };

    const switchOpen = () => {
        setIsOpen(!isOpen);
    };

    const handleResize = () => {
        setWindowSize(window.innerWidth);
    };

    const onWhatsapp = () => {
        const phone = "+34603120210";
        const message = "!Hola! Me gustaría recibir más información, mi nombre es: ";
        const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

        window.open(url);
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <nav className={style.container}>
            <div className={style.logo}>
                <img src={logo} />
                <select className={style.logoLanguage} onChange={(e) => handleLanguage(e)}>
                    <option hidden>{t("navbar.language")}</option>
                    <option value="es">{t("navbar.spanish")}</option>
                    <option value="en">{t("navbar.english")}</option>
                </select>
            </div>
            <div className={isOpen ? `${style.overlay} ${style.overlayOpen}` : style.overlay}>
                <div className={isOpen ? `${style.links} ${style.linksOpen}` : style.links}>
                    <IoMdClose className={style.linksClose} onClick={switchOpen} />
                    <a href="#header" className={style.linksLink} onClick={switchOpen}>
                        {t("navbar.linkOne")}
                    </a>
                    <a href="#about" className={style.linksLink} onClick={switchOpen}>
                        {t("navbar.linkTwo")}
                    </a>
                    <a href="#routes" className={style.linksLink} onClick={switchOpen}>
                        {t("navbar.linkThree")}
                    </a>
                    <a href="#important" className={style.linksLink} onClick={switchOpen}>
                        {t("navbar.linkFour")}
                    </a>
                    <a href="#contact" className={style.linksLink} onClick={switchOpen}>
                        {t("navbar.linkFive")}
                    </a>
                </div>
                {windowSize < 1000 ? (
                    <div className={isOpen ? `${style.socialMobile} ${style.socialMobileOpen}` : style.socialMobile}>
                        <div onClick={onWhatsapp} className={style.socialMobileLink}>
                            <FaWhatsapp />
                        </div>
                        <a href="https://www.instagram.com/vespavintagetours/" target="blank" className={style.socialMobileLink}>
                            <FaInstagram />
                        </a>
                        <a
                            href="https://www.facebook.com/vespa.vintage.tours?rdid=x5RWAh9SkUKTAtcp&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2FzhmjqvfSA8ijzt2W%2F"
                            target="blank"
                            className={style.socialMobileLink}
                        >
                            <FaFacebookF />
                        </a>
                    </div>
                ) : (
                    <></>
                )}
            </div>
            {windowSize > 1000 ? (
                <div className={style.social}>
                    <div onClick={onWhatsapp} className={style.socialLink}>
                        <FaWhatsapp />
                    </div>
                    <a href="https://www.instagram.com/vespavintagetours/" target="blank" className={style.socialLink}>
                        <FaInstagram />
                    </a>
                    <a
                        href="https://www.facebook.com/vespa.vintage.tours?rdid=x5RWAh9SkUKTAtcp&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2FzhmjqvfSA8ijzt2W%2F"
                        target="blank"
                        className={style.socialLink}
                    >
                        <FaFacebookF />
                    </a>
                </div>
            ) : (
                <></>
            )}
            <FaBars className={style.bars} onClick={switchOpen} />
        </nav>
    );
}
