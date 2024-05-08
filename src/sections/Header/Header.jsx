import style from "./Header.module.css";
import logo from "../../assets/images/logo.png";

export default function Header() {
    return (
        <header className={style.container}>
            <div className={style.overlay}>
                <div className={style.image}>
                    <img src={logo} />
                </div>
                <p className={style.slogan}>Lorem ipsum dolor sit amet.</p>
            </div>
        </header>
    );
}
