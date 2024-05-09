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
                    <p className={style.headingText}>Por favor, lea los requisitos que se deben cumplir para disfrutar de la experiencia, gracias.</p>
                </div>
                <div className={style.list}>
                    {requeriments.map((e) => (
                        <div key={e.id} className={style.listElement}>
                            <FaHandPointRight />
                            {e.text}
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
