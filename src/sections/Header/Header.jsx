import style from "./Header.module.css";
import logo from "../../assets/images/logo-white.png";

export default function Header() {
    return (
        <header className={style.container} id="header">
            <div className={style.logo}>
                <img src={logo} />
            </div>
            <div className={style.image}>
                <div className={style.imageContainer}>
                    <img src={"https://econtainers.co/shop/wp-content/uploads/2020/08/4_Photo-1-scaled.jpg"} />
                </div>
                <div className={style.imageBottom}></div>
            </div>
            <p className={style.slogan}>Lorem ipsum dolor sit amet consectetur.</p>
        </header>
    );
}
