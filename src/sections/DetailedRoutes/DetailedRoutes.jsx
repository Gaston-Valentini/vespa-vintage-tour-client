import style from "./DetailedRoutes.module.css";
import Title from "../../components/Title/Title";
import { routes } from "../../data/data";
import { GiPathDistance } from "react-icons/gi";
import { IoMdPricetags } from "react-icons/io";

export default function DetailedRoutes() {
    return (
        <section className={style.container}>
            <Title text={"Catálogo"} color={"var(--green)"} />
            <div className={style.routes}>
                {routes.map((e) => (
                    <div className={style.routesRoute} id={`routes-${e.id}`}>
                        <div className={style.routesRouteData}>
                            <div className={style.routesRouteDataMap}>
                                <img src={"https://t3.ftcdn.net/jpg/00/62/20/74/360_F_62207459_cL5wYDLWzTYwhXps8bC1N5za9YA0CmEf.jpg"} />
                            </div>
                            <div className={style.routesRouteDataInfo}>
                                <p className={style.routesRouteDataInfoName}>{e.name}</p>
                                <div className={style.routesRouteDataInfoDescription}>{e.description}</div>
                                <div className={style.routesRouteDataInfoNumbers}>
                                    <div className={style.routesRouteDataInfoNumbersDistance}>
                                        <GiPathDistance />
                                        <p>{e.distance}</p>
                                    </div>
                                    <div className={style.routesRouteDataInfoNumbersPrice}>
                                        <IoMdPricetags />
                                        <p>{e.distance}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
