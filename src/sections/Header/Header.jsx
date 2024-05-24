import style from "./Header.module.css";
import logo from "../../assets/images/logo-white.png";

export default function Header() {
    return (
        <header className={style.container} id="header">
            <div className={style.overlay}>
                <div className={style.logo}>
                    <img src={logo} />
                </div>
                <p className={style.slogan}>Disfrutando la vida con actitud Vespa!</p>
            </div>
        </header>
    );
}
