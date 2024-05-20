import style from "./About.module.css";
import Title from "../../components/Title/Title";

export default function About() {
    return (
        <section className={style.container} id="about">
            <div className={style.overlay}>
                <Title text={"Una pequeña historia"} color={"white"} />
                <p className={style.text}>
                    ¡Bienvenidos a Vespa Vintage Tours!
                    <br />
                    <br />
                    Somos Raúl y Alicia, y estamos encantados de presentarte nuestra pasión:
                    ofrecerte experiencias inolvidables a bordo de auténticas Vespas antiguas
                    restauradas. Desde que fundamos Vespa Vintage Tours, nuestra misión ha sido dar
                    una segunda vida a estos icónicos scooters italianos y, al mismo tiempo,
                    brindarte una forma única y encantadora de descubrir el mundo.
                    <br />
                    <br />
                    Cada Vespa que rescatamos tiene su propia historia, y nosotros dedicamos tiempo
                    y esfuerzo para devolverles su esplendor original. Nos emociona pensar que, al
                    restaurarlas, estamos preservando una parte de la historia y creando nuevas
                    memorias para nuestros clientes. Para nosotros, no hay nada más gratificante que
                    ver la sonrisa en tu rostro mientras exploras paisajes impresionantes y lugares
                    escondidos, todo sin el estrés de los típicos tours turísticos.
                    <br />
                    <br />
                    Hemos diseñado una variedad de rutas que se adaptan a todos los gustos. Ya sea
                    que quieras perderte en las calles empedradas de pintorescos pueblos, disfrutar
                    de la serenidad de la naturaleza o descubrir monumentos históricos desde una
                    perspectiva diferente, nuestras Vespas te llevarán allí con estilo y comodidad.
                    Cada una de ellas se ha creado pensando en lo que nos gustaría ver si viéramos
                    nuestra comarca con ojos nuevos, por primera vez. ¡Somos unos románticos!
                    <br />
                    <br />
                    Nuestro compromiso es ofrecerte no solo un tour, sino una experiencia auténtica
                    y relajante. Queremos que sientas la libertad, la cultura y la pasión que nos
                    inspiran cada día. Así que, únete a nosotros y deja que la magia de las Vespas
                    antiguas transforme tu manera de ver el mundo. ¡Estamos listos para llevarte en
                    una aventura inolvidable!
                    <br />
                    <br />
                    Con cariño, Raúl y Alicia
                </p>
            </div>
        </section>
    );
}
