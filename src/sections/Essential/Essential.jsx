import style from "./Essential.module.css";
import Title from "../../components/Title/Title";
import { FaHandPointRight, FaWhatsapp } from "react-icons/fa";
import { requeriments } from "../../data/data";
import image from "../../assets/images/essential.jpeg";

export default function Esencial() {
    return (
        <section className={style.container} id="esential">
            <div className={style.content}>
                <div className={style.heading}>
                    <Title text={"Esencial"} />
                    <p className={style.headingText}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores dolorum aliquam assumenda consequatur? Voluptas officia atque eum nesciunt, accusamus fuga soluta! Corrupti, consectetur tempora rem deleniti atque doloremque optio. Suscipit!</p>
                </div>
                <div className={style.list}>
                    {requeriments.map((e) => (
                        <div className={style.listElement}>
                            <FaHandPointRight />
                            {e}
                        </div>
                    ))}
                </div>
                <div className={style.contact}>
                    <p className={style.contactText}>¿Tienes alguna pregunta?</p>
                    <div className={style.contactLink}>CONTÁCTANOS</div>
                </div>
            </div>
            <div className={style.image}>
                <img src={image} />
            </div>
        </section>
    );
}
