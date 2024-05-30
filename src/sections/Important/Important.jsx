import style from "./Important.module.css";
import { useTranslation } from "react-i18next";
import Title from "../../components/Title/Title";
import glasses from "../../assets/images/glasses.png";
import shoes from "../../assets/images/shoes.png";
import motoLicense from "../../assets/images/moto-license.png";
import alcohol from "../../assets/images/alcohol.png";
import velocity from "../../assets/images/velocity.png";
import kid from "../../assets/images/kid.png";

export default function Important() {
    const [t, i18n] = useTranslation("global");

    const onWhatsapp = () => {
        const phone = "+34603120210";
        const message = "!Hola! Me gustaría recibir más información, mi nombre es: ";
        const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
        window.open(url);
    };

    return (
        <section className={style.container} id="important">
            <div className={style.heading}>
                <Title text={t("important.title")} />
                <p className={style.headingText}>{t("important.subtitle")}</p>
            </div>
            <div className={style.list}>
                <div className={style.listElement}>
                    <div className={style.listElementImage}>
                        <img src={glasses} />
                    </div>
                    <p className={style.listElementText}>{t("important.textOne")}</p>
                </div>
                <div className={style.listElement}>
                    <div className={style.listElementImage}>
                        <img src={motoLicense} />
                    </div>
                    <p className={style.listElementText}>{t("important.textTwo")}</p>
                </div>
                <div className={style.listElement}>
                    <div className={style.listElementImage}>
                        <img src={shoes} />
                    </div>
                    <p className={style.listElementText}>{t("important.textThree")}</p>
                </div>
                <div className={style.listElement}>
                    <div className={style.listElementImage}>
                        <img src={velocity} />
                    </div>
                    <p className={style.listElementText}>{t("important.textFour")}</p>
                </div>
                <div className={style.listElement}>
                    <div className={style.listElementImage}>
                        <img src={alcohol} />
                    </div>
                    <p className={style.listElementText}>{t("important.textFive")}</p>
                </div>
                <div className={style.listElement}>
                    <div className={style.listElementImage}>
                        <img src={kid} />
                    </div>
                    <p className={style.listElementText}>{t("important.textSix")}</p>
                </div>
            </div>
            <div className={style.contact}>
                <p className={style.contactText}>{t("important.answer")}</p>
                <div className={style.contactLink} onClick={onWhatsapp}>
                    {t("important.contact")}
                </div>
            </div>
        </section>
    );
}
