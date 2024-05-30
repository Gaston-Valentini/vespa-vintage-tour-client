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
        images: [
            "https://www.cuidamostumoto.com/sites/default/files/ruta-moto-1_baja.jpg",
            "https://ngbrakes.com/wp-content/uploads/2023/09/Rutas-europeas-web.jpg",
            "https://unik.es/wp-content/uploads/2023/05/rutas-en-moto-para-hacer-en-verano.jpg",
            "https://www.saicamotos.com/wp-content/uploads/2023/12/rutas-moto-valencia.jpg",
        ],
        time: "4 horas",
        price: "145€",
        launchPrice: "120€",
    },
    {
        id: 2,
        name: "RUTA 2 - VILLAJOYOSA + BENIDORM ",
        frontPage: benidormVillaJoyosa,
        images: [
            "https://ngbrakes.com/wp-content/uploads/2023/09/Rutas-europeas-web.jpg",
            "https://unik.es/wp-content/uploads/2023/05/rutas-en-moto-para-hacer-en-verano.jpg",
            "https://www.saicamotos.com/wp-content/uploads/2023/12/rutas-moto-valencia.jpg",
            "https://www.cuidamostumoto.com/sites/default/files/ruta-moto-1_baja.jpg",
        ],
        time: "4 horas",
        price: "145€",
        launchPrice: "120€",
    },
    {
        id: 3,
        name: "RUTA 3 - PANTANO DE GUADALEST ",
        frontPage: guadalestSwamp,
        images: [
            "https://www.saicamotos.com/wp-content/uploads/2023/12/rutas-moto-valencia.jpg",
            "https://unik.es/wp-content/uploads/2023/05/rutas-en-moto-para-hacer-en-verano.jpg",
            "https://ngbrakes.com/wp-content/uploads/2023/09/Rutas-europeas-web.jpg",
            "https://www.cuidamostumoto.com/sites/default/files/ruta-moto-1_baja.jpg",
        ],
        time: "4 horas",
        price: "145€",
        launchPrice: "120€",
    },
    {
        id: 4,
        name: "RUTA 4 - GUADALEST PUEBLO ",
        frontPage: guadalest,
        images: [
            "https://www.saicamotos.com/wp-content/uploads/2023/12/rutas-moto-valencia.jpg",
            "https://unik.es/wp-content/uploads/2023/05/rutas-en-moto-para-hacer-en-verano.jpg",
            "https://ngbrakes.com/wp-content/uploads/2023/09/Rutas-europeas-web.jpg",
            "https://www.cuidamostumoto.com/sites/default/files/ruta-moto-1_baja.jpg",
        ],
        time: "3 horas",
        price: "120€",
        launchPrice: "95€",
    },
    {
        id: 5,
        name: "RUTA 5 - MUSEO DE VEHÍCULOS ANTIGUOS ",
        frontPage: museum,
        images: [
            "https://unik.es/wp-content/uploads/2023/05/rutas-en-moto-para-hacer-en-verano.jpg",
            "https://ngbrakes.com/wp-content/uploads/2023/09/Rutas-europeas-web.jpg",
            "https://www.cuidamostumoto.com/sites/default/files/ruta-moto-1_baja.jpg",
            "https://www.saicamotos.com/wp-content/uploads/2023/12/rutas-moto-valencia.jpg",
        ],
        time: "3 horas",
        price: "120€",
        launchPrice: "95€",
    },

    {
        id: 6,
        name: "RUTA 6 - ¡TE ESCUCHAMOS! ",
        frontPage: custom,
        images: [
            "https://www.saicamotos.com/wp-content/uploads/2023/12/rutas-moto-valencia.jpg",
            "https://unik.es/wp-content/uploads/2023/05/rutas-en-moto-para-hacer-en-verano.jpg",
            "https://ngbrakes.com/wp-content/uploads/2023/09/Rutas-europeas-web.jpg",
            "https://www.cuidamostumoto.com/sites/default/files/ruta-moto-1_baja.jpg",
        ],
    },
];

export { routes };
