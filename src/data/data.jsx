import alteaAlbir from "../assets/images/altea-albir.jpg";
import benidormVillaJoyosa from "../assets/images/benidorm-villa-joyosa.jpg";
import museum from "../assets/images/museum.jpg";
import guadalest from "../assets/images/guadalest.jpg";
import guadalestSwamp from "../assets/images/guadalest-swamp.jpg";
import custom from "../assets/images/custom.jpeg";

const routes = [
    {
        id: 1,
        name: "RUTA 1 - ALBIR + ALTEA ",
        frontPage: alteaAlbir,
    },
    {
        id: 2,
        name: "RUTA 2 - VILLAJOYOSA + BENIDORM ",
        frontPage: benidormVillaJoyosa,
    },
    {
        id: 3,
        name: "RUTA 3 - PANTANO DE GUADALEST ",
        frontPage: guadalestSwamp,
    },
    {
        id: 4,
        name: "RUTA 4 - GUADALEST PUEBLO ",
        frontPage: guadalest,
    },
    {
        id: 5,
        name: "RUTA 5 - MUSEO DE VEHÍCULOS ANTIGUOS ",
        frontPage: museum,
    },

    {
        id: 6,
        name: "RUTA 6 - ¡TE ESCUCHAMOS! ",
        frontPage: custom,
    },
];

export { routes };
