import style from "./Title.module.css";

export default function Title({ text, color }) {
    return (
        <section className={style.container} style={{ color }}>
            {text}
        </section>
    );
}
