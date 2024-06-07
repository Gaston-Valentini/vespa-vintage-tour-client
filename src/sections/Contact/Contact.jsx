import { useEffect, useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import style from "./Contact.module.css";
import Title from "../../components/Title/Title";
import { FaUserAlt, FaRegAddressCard } from "react-icons/fa";
import { MdAlternateEmail, MdDateRange, MdOutlineCreditCardOff } from "react-icons/md";
import { BiMessageDetail } from "react-icons/bi";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import Flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Spanish } from "flatpickr/dist/l10n/es.js";
import MapComponent from "../../components/Map/Map";
import emailjs from "@emailjs/browser";
import file from "../../assets/files/proteccion-de-datos-web-vvt.pdf";

export default function Contact() {
    const [t, i18n] = useTranslation("global");

    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
        route_date: "",
        license: "",
        expirydate: "",
    });
    const [terms, setTerms] = useState(false);
    const [message, setMessage] = useState("");
    const formRef = useRef(null);
    const [canSubmit, setCanSubmit] = useState(true);

    const handleInput = (e) => {
        const { name, value } = e.target;
        setForm((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                formRef.current,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )
            .then(
                (result) => {
                    console.log(result);
                    setMessage(200);
                    setTimeout(() => {
                        setMessage("");
                    }, 5000);
                },
                (error) => {
                    console.log(error);
                    setMessage(400);
                    setTimeout(() => {
                        setMessage("");
                    }, 5000);
                }
            );
    };

    useEffect(() => {
        const { name, phone, license, expirydate } = form;
        const areComplete = name !== "" && phone !== "" && license !== "" && expirydate !== "" && terms === true;
        setCanSubmit(areComplete);
    }, [form, terms]);

    useEffect(() => {
        Flatpickr(document.getElementById("route_date"), {
            locale: {
                ...Spanish,
            },
            dateFormat: "d/m/Y",
            defaultDate: null,
            disable: [
                function (date) {
                    return date.getDay() !== 0 && date.getDay() !== 6;
                },
            ],
            onChange: (selectedDates, dateStr) => {
                setForm((prevState) => ({
                    ...prevState,
                    route_date: dateStr,
                }));
            },
        });
    }, []);

    return (
        <section className={style.container} id="contact">
            <Title text={t("contact.title")} color={"var(--black)"} />
            <div className={style.content}>
                <form className={style.form} ref={formRef} onSubmit={(e) => handleSubmit(e)}>
                    <div className={style.formSection}>
                        <span>
                            {t("contact.name")} <span>*</span>
                        </span>
                        <div className={style.formSectionInput}>
                            <FaUserAlt />
                            <input type="text" name="name" onChange={(e) => handleInput(e)} />
                        </div>
                    </div>
                    <div className={style.formSection}>
                        <span>{t("contact.email")}</span>
                        <div className={style.formSectionInput}>
                            <MdAlternateEmail />
                            <input type="email" name="email" onChange={(e) => handleInput(e)} />
                        </div>
                    </div>
                    <div className={style.formSection}>
                        <span>
                            {t("contact.phone")} <span>*</span>
                        </span>
                        <PhoneInput
                            name="phone"
                            style={{ gap: "5px" }}
                            className={style.formSectionPhoneInput}
                            onChange={(value) => setForm((prevState) => ({ ...prevState, phone: value || "" }))}
                        />
                    </div>
                    <div className={style.formSection}>
                        <span>{t("contact.message")}</span>
                        <div className={style.formSectionInput}>
                            <BiMessageDetail style={{ alignSelf: "flex-start" }} />
                            <textarea name="message" onChange={(e) => handleInput(e)} />
                        </div>
                    </div>
                    <div className={style.formSection}>
                        <span>{t("contact.routeDate")}</span>
                        <div className={style.formSectionInput}>
                            <MdDateRange />
                            <input type="text" id="route_date" name="route_date" placeholder="dd/mm/yyyy" readOnly value={form.route_date} />
                        </div>
                    </div>
                    <div className={style.formSection}>
                        <span>
                            {t("contact.license")} <span>*</span>
                        </span>
                        <div className={style.formSectionInput}>
                            <FaRegAddressCard />
                            <select name="license" onChange={(e) => handleInput(e)}>
                                <option hidden>{t("contact.licenseOne")}</option>
                                <option>{t("contact.licenseTwo")}</option>
                                <option>{t("contact.licenseThree")}</option>
                            </select>
                        </div>
                    </div>
                    <div className={style.formSection}>
                        <span>
                            {t("contact.expirydate")} <span>*</span>
                        </span>
                        <div className={style.formSectionInput}>
                            <MdOutlineCreditCardOff />
                            <input type="date" name="expirydate" onChange={(e) => handleInput(e)} />
                        </div>
                    </div>
                    {message === 200 && <p className={style.formMessageOk}>{t("contact.submitOk")}</p>}
                    {message === 400 && <p className={style.formMessageBad}>{t("contact.submitNo")}</p>}
                    <div className={style.formTerms}>
                        <input type="checkbox" onChange={(e) => setTerms(!terms)} />
                        <p>
                            {t("contact.terms")}{" "}
                            <a href={file} download>
                                {t("contact.file")}
                            </a>
                        </p>
                    </div>
                    <input type="submit" value={t("contact.submit")} disabled={!canSubmit} className={style.formSubmit} />
                </form>
                <div className={style.map}>
                    <MapComponent />
                    <a
                        href="https://www.google.com/maps/place/Vespa+Vintage+Tours/@38.5653324,-0.0937996,17z/data=!3m1!4b1!4m6!3m5!1s0x29a8c469f09582bb:0xceddfded8b70df93!8m2!3d38.5653324!4d-0.0912247!16s%2Fg%2F11vxqw6jsh?entry=ttu"
                        target="_blank"
                        className={style.mapLink}
                    >
                        {t("contact.showRoute")}
                    </a>
                </div>
            </div>
        </section>
    );
}
