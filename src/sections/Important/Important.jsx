import style from "./Important.module.css";
import Title from "../../components/Title/Title";
import glasses from "../../assets/images/glasses.png";
import shoes from "../../assets/images/shoes.png";
import motoLicense from "../../assets/images/moto-license.png";
import alcohol from "../../assets/images/alcohol.png";
import velocity from "../../assets/images/velocity.png";
import kid from "../../assets/images/kid.png";

export default function Important() {
    const onWhatsapp = () => {
        const phone = "+34603120210";
        const message = "!Hola! Me gustaría recibir más información, mi nombre es: ";
        const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
        window.open(url);
    };

    return (
        <section className={style.container} id="important">
            <div className={style.heading}>
                <Title text={"Importante"} />
                <p className={style.headingText}>Por favor, lea los requisitos que se deben cumplir para disfrutar de la experiencia, gracias.</p>
            </div>
            <div className={style.list}>
                <div className={style.listElement}>
                    <div className={style.listElementImage}>
                        <img src={glasses} />
                    </div>
                    <p className={style.listElementText}>Tus ojos son fundamentales. Protégelos durante tu experiencia con unas gafas que te encanten. Pueden ser graduadas, de sol... (obligatorio)</p>
                </div>
                <div className={style.listElement}>
                    <div className={style.listElementImage}>
                        <img src={motoLicense} />
                    </div>
                    <p className={style.listElementText}>Necesitas tener un carnet de conducir habilitante para conducir motos de 125cc.</p>
                </div>
                <div className={style.listElement}>
                    <div className={style.listElementImage}>
                        <img src={shoes} />
                    </div>
                    <p className={style.listElementText}>Trae zapato cerrado y bien ajustado (obligatorio)</p>
                </div>
                <div className={style.listElement}>
                    <div className={style.listElementImage}>
                        <img src={velocity} />
                    </div>
                    <p className={style.listElementText}>La conducción temeraria no está permitida.</p>
                </div>
                <div className={style.listElement}>
                    <div className={style.listElementImage}>
                        <img src={alcohol} />
                    </div>
                    <p className={style.listElementText}>Tenemos una política de tolerancia cero con drogas y alcohol. Si sospechamos que has bebido o has consumido drogas, tu excursión podrá ser cancelada sin derecho a devolución de tu dinero.</p>
                </div>
                <div className={style.listElement}>
                    <div className={style.listElementImage}>
                        <img src={kid} />
                    </div>
                    <p className={style.listElementText}>¡Nos encantan los niños! Si tu peque mide 1,35m o más y tiene 8 años o mas, nos encantaría conocerlo! Siempre serás responsable de su bienestar durante toda la excursión, ¡no le quites el ojo!</p>
                </div>
            </div>
            <div className={style.contact}>
                <p className={style.contactText}>¿Tienes alguna pregunta?</p>
                <div className={style.contactLink} onClick={onWhatsapp}>
                    CONTÁCTANOS
                </div>
            </div>
        </section>
    );
}
