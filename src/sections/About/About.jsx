import style from "./About.module.css";
import Title from "../../components/Title/Title";

export default function About() {
    return (
        <section className={style.container}>
            <div className={style.overlay}>
                <Title text={"Una pequeña historia"} color={"white"} />
                <p className={style.text}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptates ipsam neque deleniti corporis quisquam dignissimos incidunt quia nostrum provident quibusdam, iusto unde dolorum debitis?
                    <br />
                    <br />
                    Nemo facilis exercitationem adipisci ea. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis iste at iusto nisi delectus vitae deserunt, perspiciatis natus molestiae blanditiis, est dignissimos omnis modi excepturi maxime. Quos cum ratione dolorem.
                    <br />
                    <br />
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores quo necessitatibus nulla sint voluptate incidunt repellendus alias beatae? Pariatur aliquam nemo commodi vero molestiae ratione rerum sequi quam magni tenetur?
                    <br />
                    <br />
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores quo necessitatibus nulla sint voluptate incidunt repellendus alias beatae? Pariatur aliquam nemo commodi vero molestiae ratione rerum sequi quam magni tenetur?
                    <br />
                    <br />
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores quo necessitatibus nulla sint voluptate incidunt repellendus alias beatae? Pariatur aliquam nemo commodi vero molestiae ratione rerum sequi quam magni tenetur?
                    <br />
                    <br />
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores quo necessitatibus nulla sint voluptate incidunt repellendus alias beatae? Pariatur aliquam nemo commodi vero molestiae ratione rerum sequi quam magni tenetur?
                    <br />
                    <br />
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores quo necessitatibus nulla sint voluptate incidunt repellendus alias beatae? Pariatur aliquam nemo commodi vero molestiae ratione rerum sequi quam magni tenetur?
                </p>
            </div>
        </section>
    );
}
