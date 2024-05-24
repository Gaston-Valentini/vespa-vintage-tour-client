import style from "./Navbar.module.css";
import logo from "../../assets/images/logo-black.png";
import { FaWhatsapp, FaInstagram, FaFacebookF, FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { useState, useEffect } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(true);
    const [windowSize, setWindowSize] = useState(window.innerWidth);

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
            </div>
            <div className={isOpen ? `${style.overlay} ${style.overlayOpen}` : style.overlay}>
                <div className={isOpen ? `${style.links} ${style.linksOpen}` : style.links}>
                    <IoMdClose className={style.linksClose} onClick={switchOpen} />
                    <a href="#header" className={style.linksLink} onClick={switchOpen}>
                        INICIO
                    </a>
                    <a href="#about" className={style.linksLink} onClick={switchOpen}>
                        SOBRE NOSOTROS
                    </a>
                    <a href="#routes" className={style.linksLink} onClick={switchOpen}>
                        NUESTRAS RUTAS
                    </a>
                    <a href="#important" className={style.linksLink} onClick={switchOpen}>
                        IMPORTANTE
                    </a>
                    <a href="#contact" className={style.linksLink} onClick={switchOpen}>
                        CONTACTO
                    </a>
                </div>
                {windowSize < 800 ? (
                    <div className={isOpen ? `${style.socialMobile} ${style.socialMobileOpen}` : style.socialMobile}>
                        <div onClick={onWhatsapp} className={style.socialMobileLink}>
                            <FaWhatsapp />
                        </div>
                        <a href="https://www.instagram.com/vespavintagetours/" target="blank" className={style.socialMobileLink}>
                            <FaInstagram />
                        </a>
                        <a href="https://www.facebook.com/vespa.vintage.tours?rdid=x5RWAh9SkUKTAtcp&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2FzhmjqvfSA8ijzt2W%2F" target="blank" className={style.socialMobileLink}>
                            <FaFacebookF />
                        </a>
                    </div>
                ) : (
                    <></>
                )}
            </div>
            {windowSize > 800 ? (
                <div className={style.social}>
                    <div onClick={onWhatsapp} className={style.socialLink}>
                        <FaWhatsapp />
                    </div>
                    <a href="https://www.instagram.com/vespavintagetours/" target="blank" className={style.socialLink}>
                        <FaInstagram />
                    </a>
                    <a href="https://www.facebook.com/vespa.vintage.tours?rdid=x5RWAh9SkUKTAtcp&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2FzhmjqvfSA8ijzt2W%2F" target="blank" className={style.socialLink}>
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
