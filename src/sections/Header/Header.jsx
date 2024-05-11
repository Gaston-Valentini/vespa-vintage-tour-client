import style from "./Header.module.css";
import logo from "../../assets/images/logo-white.png";

export default function Header() {
    return (
        <header className={style.container} id="header">
            <div className={style.overlay}>
                <div className={style.image}>
                    <img src={logo} />
                </div>
                <p className={style.slogan}>Lorem ipsum dolor sit amet.</p>
            </div>
        </header>
    );
}
