import style from "./Routes.module.css";
import { useTranslation } from "react-i18next";
import Title from "../../components/Title/Title";
import { routes } from "../../data/data";

export default function Routes() {
    const [t, i18n] = useTranslation("global");

    return (
        <section className={style.container} id="routes">
            <div className={style.heading}>
                <Title text={t("routes.title")} color={"var(--green)"} />
                <p className={style.headingText}>{t("routes.subtitle")}</p>
            </div>
            <div className={style.routes}>
                {routes.map((e) => (
                    <a href={`#routes-${e.id}`} key={e.id} className={style.routesRoute}>
                        <div className={style.routesRoutePhoto}>
                            <div className={style.routesRoutePhotoOverlay}>
                                <img src={e.frontPage} />
                            </div>
                        </div>
                        <p className={style.routesRouteName}>{e.name}</p>
                    </a>
                ))}
            </div>
        </section>
    );
}
