import style from "./Navbar.module.css";
import logo from "../../assets/images/logo.png";
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
                    <a href="#esential" className={style.linksLink} onClick={switchOpen}>
                        ESENCIAL
                    </a>
                    <a href="#routes" className={style.linksLink} onClick={switchOpen}>
                        NUESTRAS RUTAS
                    </a>
                    <a href="#about" className={style.linksLink} onClick={switchOpen}>
                        SOBRE NOSOTROS
                    </a>
                    <a href="#contact" className={style.linksLink} onClick={switchOpen}>
                        CONTACTO
                    </a>
                </div>
                {windowSize < 800 ? (
                    <div className={isOpen ? `${style.socialMobile} ${style.socialMobileOpen}` : style.socialMobile}>
                        <a href="#" className={style.socialMobileLink}>
                            <FaWhatsapp />
                        </a>
                        <a href="#" className={style.socialMobileLink}>
                            <FaInstagram />
                        </a>
                        <a href="#" className={style.socialMobileLink}>
                            <FaFacebookF />
                        </a>
                    </div>
                ) : (
                    <></>
                )}
            </div>
            {windowSize > 800 ? (
                <div className={style.social}>
                    <div className={style.socialLink}>
                        <FaWhatsapp />
                    </div>
                    <a href="#" className={style.socialLink}>
                        <FaInstagram />
                    </a>
                    <a href="#" className={style.socialLink}>
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
