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
        description: <p>Un recorrido por Albir para descubrir su playa de canto rodado y sus magníficas vistas de la Costa Blanca. Conoce Villa Gadea, la joya escondida que te sorprenderá y Altea, un pueblecito precioso con el casco antiguo más bonito de la zona.</p>,
        frontPage: alteaAlbir,
        images: ["https://www.cuidamostumoto.com/sites/default/files/ruta-moto-1_baja.jpg", "https://ngbrakes.com/wp-content/uploads/2023/09/Rutas-europeas-web.jpg", "https://unik.es/wp-content/uploads/2023/05/rutas-en-moto-para-hacer-en-verano.jpg", "https://www.saicamotos.com/wp-content/uploads/2023/12/rutas-moto-valencia.jpg"],
        time: "4 horas",
        price: "145€",
        launchPrice: "120€",
    },
    {
        id: 2,
        name: "RUTA 2 - VILLAJOYOSA + BENIDORM ",
        description: <p>Descubre el pueblo de las casitas de colores. Conoce su magnífica historia, visita uno de los puertos más activos de la zona y después, visita la playa de Poniente de Benidorm, déjanos enseñarte las partes que deberías visitar cuando se va el sol y aquellos secretos escondidos que sólo los que vivimos aquí conocemos.</p>,
        frontPage: benidormVillaJoyosa,
        images: ["https://ngbrakes.com/wp-content/uploads/2023/09/Rutas-europeas-web.jpg", "https://unik.es/wp-content/uploads/2023/05/rutas-en-moto-para-hacer-en-verano.jpg", "https://www.saicamotos.com/wp-content/uploads/2023/12/rutas-moto-valencia.jpg", "https://www.cuidamostumoto.com/sites/default/files/ruta-moto-1_baja.jpg"],
        time: "4 horas",
        price: "145€",
        launchPrice: "120€",
    },
    {
        id: 3,
        name: "RUTA 3 - PANTANO DE GUADALEST ",
        description: <p>Si prefieres pasar un poquito menos de rato entre personas y un poquito más de rato viviendo la calma de la montaña, ésta ruta te da la oportunidad de conocer Guadalest reservando un poquito de tiempo para conocer la Joya Esmeralda, el único pantano de este color que podrás ver. ¡Pregúntanos su historia!</p>,
        frontPage: guadalestSwamp,
        images: ["https://www.saicamotos.com/wp-content/uploads/2023/12/rutas-moto-valencia.jpg", "https://unik.es/wp-content/uploads/2023/05/rutas-en-moto-para-hacer-en-verano.jpg", "https://ngbrakes.com/wp-content/uploads/2023/09/Rutas-europeas-web.jpg", "https://www.cuidamostumoto.com/sites/default/files/ruta-moto-1_baja.jpg"],
        time: "4 horas",
        price: "145€",
        launchPrice: "120€",
    },
    {
        id: 4,
        name: "RUTA 4 - GUADALEST PUEBLO ",
        description: <p>¿Conoces Guadalest? Este pueblito de interior, enclavado entre montañas y construido sobre la roca más dura, te dará la oportunidad de respirar siglos de historia de un solo vistazo. Disfruta de sus múltiples y curiosos museos, prueba la gastronomía local y descubre la artesanía de la zona. ¡Ponte zapatos cómodos!</p>,
        frontPage: guadalest,
        images: ["https://www.saicamotos.com/wp-content/uploads/2023/12/rutas-moto-valencia.jpg", "https://unik.es/wp-content/uploads/2023/05/rutas-en-moto-para-hacer-en-verano.jpg", "https://ngbrakes.com/wp-content/uploads/2023/09/Rutas-europeas-web.jpg", "https://www.cuidamostumoto.com/sites/default/files/ruta-moto-1_baja.jpg"],
        time: "3 horas",
        price: "120€",
        launchPrice: "95€",
    },
    {
        id: 5,
        name: "RUTA 5 - MUSEO DE VEHÍCULOS ANTIGUOS ",
        description: <p>Si eres de los que disfrutan de la naturaleza, de pasear tranquilo entre bosques, de disfrutar las vistas, parar para hacer fotos y vivir la vida con una auténtica Actitud Vespa, ésta es tu ruta. Conoce la cara más interior de la Marina Baixa y descubre el Museo de Vehículos Antiguos de Guadalest, donde serás transportado a otras épocas con su magnífica colección.</p>,
        frontPage: museum,
        images: ["https://unik.es/wp-content/uploads/2023/05/rutas-en-moto-para-hacer-en-verano.jpg", "https://ngbrakes.com/wp-content/uploads/2023/09/Rutas-europeas-web.jpg", "https://www.cuidamostumoto.com/sites/default/files/ruta-moto-1_baja.jpg", "https://www.saicamotos.com/wp-content/uploads/2023/12/rutas-moto-valencia.jpg"],
        time: "3 horas",
        price: "120€",
        launchPrice: "95€",
    },

    {
        id: 6,
        name: "RUTA 6 - ¡TE ESCUCHAMOS! ",
        description: (
            <>
                En Vespa Vintage Tours, entendemos que cada viajero es único, con sus propios intereses, horarios y deseos de exploración. Por eso hemos reservado un espacio donde puedes crear tu propia ruta turística a medida. Diseñada para ofrecerte la máxima flexibilidad y libertad. Esta opción te permite planificar tu aventura ideal según el tiempo disponible, la zona que deseas visitar y las experiencias que quieras incluir.
                <br />
                <br />
                <ul>
                    <li>
                        <span>Infórmanos de tu tiempo disponible:</span> Ya sea que tengas una mañana libre, un día entero o unas horas al final de la tarde y te mostraremos las mejores opciones para aprovechar al máximo cada minuto.
                    </li>
                    <li>
                        <span>Elige la zona que quieres explorar:</span> Desde encantadores pueblos históricos y paisajes naturales impresionantes hasta vibrantes ciudades llenas de vida, tienes la libertad de escoger la zona que más te apetece descubrir.
                    </li>
                    <li>
                        <span>Personaliza tu experiencia:</span> ¿Buscas una experiencia gastronómica inolvidable? ¿Prefieres un recorrido cultural lleno de historia? ¿O tal vez una aventura al aire libre en plena naturaleza? Nos encantará escucharte.
                    </li>
                </ul>
                <br />
                Tienes el control total para diseñar una aventura que se adapte perfectamente a tus intereses y necesidades. Deja de lado las rutas predefinidas y los horarios rígidos, y sumérgete en una exploración auténtica y relajante a tu propio ritmo.
            </>
        ),
        frontPage: custom,
        images: ["https://www.saicamotos.com/wp-content/uploads/2023/12/rutas-moto-valencia.jpg", "https://unik.es/wp-content/uploads/2023/05/rutas-en-moto-para-hacer-en-verano.jpg", "https://ngbrakes.com/wp-content/uploads/2023/09/Rutas-europeas-web.jpg", "https://www.cuidamostumoto.com/sites/default/files/ruta-moto-1_baja.jpg"],
    },
];

export { routes };
