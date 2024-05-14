import style from "./Routes.module.css";
import Title from "../../components/Title/Title";
import { routes } from "../../data/data";

export default function Routes() {
    return (
        <section className={style.container} id="routes">
            <div className={style.heading}>
                <Title text={"Nuestras rutas"} color={"var(--green)"} />
                <p className={style.headingText}>Te presentamos nuestras diversas rutas, cada una con recorrido y experiencia únicos</p>
            </div>
            <div className={style.routes}>
                {routes.map((e) => (
                    <a href={`#routes-${e.id}`} key={e.id} className={style.routesRoute}>
                        <div className={style.routesRoutePhoto}>
                            <div className={style.routesRoutePhotoOverlay}>
                                <img src={e.images[0]} />
                            </div>
                        </div>
                        <p className={style.routesRouteName}>{e.name}</p>
                    </a>
                ))}
            </div>
        </section>
    );
}
