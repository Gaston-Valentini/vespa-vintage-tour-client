import style from "./Navbar.module.css";
import logo from "../../assets/images/logo.png";
import { FaWhatsapp, FaInstagram, FaFacebookF, FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { useState, useEffect } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [windowSize, setWindowSize] = useState(0);

    const handleResize = () => {
        setWindowSize(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const switchOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={style.container}>
            <div className={style.logo}>
                <img src={logo} />
            </div>
            <div className={isOpen ? `${style.overlay} ${style.overlayOpen}` : style.overlay}>
                <div className={isOpen ? `${style.links} ${style.linksOpen}` : style.links}>
                    <IoMdClose className={style.linksClose} onClick={switchOpen} />
                    <a href="#" className={style.linksLink}>
                        ENLACE
                    </a>
                    <a href="#" className={style.linksLink}>
                        ENLACE
                    </a>
                    <a href="#" className={style.linksLink}>
                        ENLACE
                    </a>
                    <a href="#" className={style.linksLink}>
                        ENLACE
                    </a>
                    <a href="#" className={style.linksLink}>
                        ENLACE
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
