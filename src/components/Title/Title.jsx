import style from "./Title.module.css";

export default function Title({ text }) {
    return <section className={style.container}>{text}</section>;
}
