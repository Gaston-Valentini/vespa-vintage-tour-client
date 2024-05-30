import style from "./Header.module.css";
import { useTranslation } from "react-i18next";
import logo from "../../assets/images/logo-white.png";

export default function Header() {
    const [t, i18n] = useTranslation("global");

    return (
        <header className={style.container} id="header">
            <div className={style.overlay}>
                <div className={style.logo}>
                    <img src={logo} />
                </div>
                <p className={style.slogan}>{t("header.text")}</p>
            </div>
        </header>
    );
}
