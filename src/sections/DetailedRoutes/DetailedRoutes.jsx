import style from "./DetailedRoutes.module.css";
import { useTranslation } from "react-i18next";
import Title from "../../components/Title/Title";
import { LuClock3 } from "react-icons/lu";
import { IoMdPricetags } from "react-icons/io";
import alteaAlbir from "../../assets/images/altea-albir.jpg";
import alteaAlbirTwo from "../../assets/images/altea-albir-2.jpg";
import alteaAlbirThree from "../../assets/images/altea-albir-3.jpg";
import alteaAlbirFour from "../../assets/images/altea-albir-4.jpg";
import alteaAlbirFive from "../../assets/images/altea-albir-5.jpg";
import benidormVillaJoyosa from "../../assets/images/benidorm-villa-joyosa.jpg";
import benidormVillaJoyosaTwo from "../../assets/images/benidorm-villa-joyosa-2.jpg";
import benidormVillaJoyosaThree from "../../assets/images/benidorm-villa-joyosa-3.jpg";
import benidormVillaJoyosaFour from "../../assets/images/benidorm-villa-joyosa-4.jpg";
import benidormVillaJoyosaFive from "../../assets/images/benidorm-villa-joyosa-5.jpg";
import museum from "../../assets/images/museum.jpg";
import museumTwo from "../../assets/images/museum-2.jpg";
import museumThree from "../../assets/images/museum-3.jpg";
import museumFour from "../../assets/images/museum-4.jpg";
import museumFive from "../../assets/images/museum-5.jpg";
import guadalestSwamp from "../../assets/images/guadalest-swamp.jpg";
import guadalestSwampTwo from "../../assets/images/guadalest-swamp-2.jpg";
import guadalestSwampThree from "../../assets/images/guadalest-swamp-3.jpg";
import guadalestSwampFour from "../../assets/images/guadalest-swamp-4.jpg";
import guadalestSwampFive from "../../assets/images/guadalest-swamp-5.jpg";
import guadalest from "../../assets/images/guadalest.jpg";
import guadalestTwo from "../../assets/images/guadalest-2.jpg";
import guadalestThree from "../../assets/images/guadalest-3.jpg";
import guadalestFour from "../../assets/images/guadalest-4.jpg";
import guadalestFive from "../../assets/images/guadalest-5.jpg";
import custom from "../../assets/images/custom.jpeg";

export default function DetailedRoutes() {
    const [t, i18n] = useTranslation("global");

    const routes = [
        {
            id: 1,
            name: t("detailedRoutes.routeOneTitle"),
            description: <p>{t("detailedRoutes.routeOneText")}</p>,
            frontPage: alteaAlbir,
            images: [alteaAlbirTwo, alteaAlbirThree, alteaAlbirFour, alteaAlbirFive],
            time: `4 ${t("detailedRoutes.routeHours")}`,
            price: "145€",
            launchPrice: "120€",
        },
        {
            id: 2,
            name: t("detailedRoutes.routeTwoTitle"),
            description: <p>{t("detailedRoutes.routeTwoText")}</p>,
            frontPage: benidormVillaJoyosa,
            images: [benidormVillaJoyosaTwo, benidormVillaJoyosaThree, benidormVillaJoyosaFour, benidormVillaJoyosaFive],
            time: `4 ${t("detailedRoutes.routeHours")}`,
            price: "145€",
            launchPrice: "120€",
        },
        {
            id: 3,
            name: t("detailedRoutes.routeThreeTitle"),
            description: <p>{t("detailedRoutes.routeThreeText")}</p>,
            frontPage: guadalestSwamp,
            images: [guadalestSwampTwo, guadalestSwampThree, guadalestSwampFour, guadalestSwampFive],
            time: `4 ${t("detailedRoutes.routeHours")}`,
            price: "145€",
            launchPrice: "120€",
        },
        {
            id: 4,
            name: t("detailedRoutes.routeFourTitle"),
            description: <p>{t("detailedRoutes.routeFourText")}</p>,
            frontPage: guadalest,
            images: [guadalestTwo, guadalestThree, guadalestFour, guadalestFive],
            time: `3 ${t("detailedRoutes.routeHours")}`,
            price: "120€",
            launchPrice: "95€",
        },
        {
            id: 5,
            name: t("detailedRoutes.routeFiveTitle"),
            description: <p>{t("detailedRoutes.routeFiveText")}</p>,
            frontPage: museum,
            images: [museumTwo, museumThree, museumFour, museumFive],
            time: `3 ${t("detailedRoutes.routeHours")}`,
            price: "120€",
            launchPrice: "95€",
        },
        {
            id: 6,
            name: t("detailedRoutes.routeSixTitle"),
            description: (
                <>
                    {t("detailedRoutes.routeSixTextOne")}
                    <br />
                    <br />
                    <ul>
                        <li>
                            <span>{t("detailedRoutes.routeSixListTitleOne")}</span> {t("detailedRoutes.routeSixListTextOne")}
                        </li>
                        <li>
                            <span>{t("detailedRoutes.routeSixListTitleTwo")}</span> {t("detailedRoutes.routeSixListTextTwo")}
                        </li>
                        <li>
                            <span>{t("detailedRoutes.routeSixListTitleThree")}</span> {t("detailedRoutes.routeSixListTextThree")}
                        </li>
                    </ul>
                    <br />
                    {t("detailedRoutes.routeSixTextTwo")}
                </>
            ),
            frontPage: custom,
            images: [
                "https://www.saicamotos.com/wp-content/uploads/2023/12/rutas-moto-valencia.jpg",
                "https://unik.es/wp-content/uploads/2023/05/rutas-en-moto-para-hacer-en-verano.jpg",
                "https://ngbrakes.com/wp-content/uploads/2023/09/Rutas-europeas-web.jpg",
                "https://www.cuidamostumoto.com/sites/default/files/ruta-moto-1_baja.jpg",
            ],
        },
    ];

    return (
        <section className={style.container}>
            <Title text={t("detailedRoutes.title")} color={"var(--green)"} />
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
                                                {e.price} ({t("detailedRoutes.routePrice")} {e.launchPrice})
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
