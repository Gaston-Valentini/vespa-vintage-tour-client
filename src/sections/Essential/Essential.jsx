import style from "./Essential.module.css";
import Title from "../../components/Title/Title";
import { FaHandPointRight } from "react-icons/fa";
import { requeriments } from "../../data/data";
import image from "../../assets/images/essential.jpeg";

export default function Esencial() {
    const onWhatsapp = () => {
        const phone = "+34603120210";
        const message = "!Hola! Me gustaría recibir más información, mi nombre es: ";
        const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

        window.open(url);
    };

    return (
        <section className={style.container} id="essential">
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
                    <div className={style.contactLink} onClick={onWhatsapp}>
                        CONTÁCTANOS
                    </div>
                </div>
            </div>
            <div className={style.image}>
                <img src={image} />
            </div>
        </section>
    );
}
