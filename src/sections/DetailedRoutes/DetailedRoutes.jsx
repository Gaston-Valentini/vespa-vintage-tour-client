import style from "./DetailedRoutes.module.css";
import Title from "../../components/Title/Title";
import { routes } from "../../data/data";
import { LuClock3 } from "react-icons/lu";
import { IoMdPricetags } from "react-icons/io";

export default function DetailedRoutes() {
    return (
        <section className={style.container}>
            <Title text={"Catálogo"} color={"var(--green)"} />
            <div className={style.routes}>
                {routes.map((e) => (
                    <div key={e.id} className={style.routesRoute} id={`routes-${e.id}`}>
                        <div className={style.routesRoutePhoto}>
                            <div className={style.routesRoutePhotoImage}>
                                <img src={e.frontPage} />
                            </div>
                            <div className={style.routesRoutePhotoBottom}></div>
                        </div>
                        <div className={style.routesRouteData}>
                            <div className={style.routesRouteDataInfo}>
                                <p className={style.routesRouteDataInfoName}>{e.name}</p>
                                <div className={style.routesRouteDataInfoDescription}>{e.description}</div>
                                {e.id !== 6 && (
                                    <div className={style.routesRouteDataInfoNumbers}>
                                        <div className={style.routesRouteDataInfoNumbersValue}>
                                            <LuClock3 />
                                            <p>{e.time}</p>
                                        </div>
                                        <div className={style.routesRouteDataInfoNumbersValue}>
                                            <IoMdPricetags />
                                            <p>
                                                {e.price} (precio de lanzamiento {e.launchPrice})
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </div>
                            {e.id % 2 === 0 && e.id !== 6 && (
                                <div className={style.routesRouteDataGalleryOne}>
                                    {e.images.map((photo, index) => (
                                        <div key={index} className={style.routesRouteDataGalleryPhoto}>
                                            <div className={style.routesRouteDataGalleryPhotoImage}>
                                                <img src={photo} />
                                            </div>
                                            <div className={style.routesRouteDataGalleryPhotoBottom}></div>
                                        </div>
                                    ))}
                                </div>
                            )}
                            {e.id % 2 !== 0 && (
                                <div className={style.routesRouteDataGalleryTwo}>
                                    {e.images.map((photo, index) => (
                                        <div key={index} className={style.routesRouteDataGalleryPhoto}>
                                            <div className={style.routesRouteDataGalleryPhotoImage}>
                                                <img src={photo} />
                                            </div>
                                            <div className={style.routesRouteDataGalleryPhotoBottom}></div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
