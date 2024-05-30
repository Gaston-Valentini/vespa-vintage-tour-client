import style from "./About.module.css";
import { useTranslation } from "react-i18next";
import Title from "../../components/Title/Title";

export default function About() {
    const [t, i18n] = useTranslation("global");

    return (
        <section className={style.container} id="about">
            <div className={style.overlay}>
                <Title text={t("about.title")} color={"white"} />
                <p className={style.text}>
                    {t("about.textOne")}
                    <br />
                    <br />
                    {t("about.textTwo")}
                    <br />
                    <br />
                    {t("about.textThree")}
                    <br />
                    <br />
                    {t("about.textFour")}
                    <br />
                    <br />
                    {t("about.textFive")}
                    <br />
                    <br />
                    {t("about.textSix")}
                </p>
            </div>
        </section>
    );
}
