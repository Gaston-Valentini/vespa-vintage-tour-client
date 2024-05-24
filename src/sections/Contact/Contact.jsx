import React, { useEffect, useState } from "react";
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

export default function Contact() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
        routeDate: "",
        license: "",
        licenseDate: "",
    });

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
    };

    useEffect(() => {
        const { name, phone, license, licenseDate } = form;
        const areComplete = name !== "" && phone !== "" && license !== "" && licenseDate !== "";
        setCanSubmit(areComplete);
    }, [form]);

    useEffect(() => {
        Flatpickr(document.getElementById("routeDate"), {
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
                    routeDate: dateStr,
                }));
            },
        });
    }, []);

    return (
        <section className={style.container} id="contact">
            <Title text={"Contacto"} color={"var(--black)"} />
            <div className={style.content}>
                <form className={style.form} onSubmit={handleSubmit}>
                    <div className={style.formSection}>
                        <span>
                            Nombre <span>*</span>
                        </span>
                        <div className={style.formSectionInput}>
                            <FaUserAlt />
                            <input type="text" name="name" onChange={(e) => handleInput(e)} />
                        </div>
                    </div>
                    <div className={style.formSection}>
                        <span>Correo</span>
                        <div className={style.formSectionInput}>
                            <MdAlternateEmail />
                            <input type="email" name="email" onChange={(e) => handleInput(e)} />
                        </div>
                    </div>
                    <div className={style.formSection}>
                        <span>
                            Teléfono <span>*</span>
                        </span>
                        <PhoneInput name="phone" style={{ gap: "5px" }} className={style.formSectionPhoneInput} onChange={(value) => setForm((prevState) => ({ ...prevState, phone: value || "" }))} />
                    </div>
                    <div className={style.formSection}>
                        <span>Mensaje</span>
                        <div className={style.formSectionInput}>
                            <BiMessageDetail style={{ alignSelf: "flex-start" }} />
                            <textarea name="message" onChange={(e) => handleInput(e)} />
                        </div>
                    </div>
                    <div className={style.formSection}>
                        <span>Fecha de ruta</span>
                        <div className={style.formSectionInput}>
                            <MdDateRange />
                            <input type="text" id="routeDate" name="routeDate" placeholder="dd/mm/yyyy" readOnly value={form.routeDate} />
                        </div>
                    </div>
                    <div className={style.formSection}>
                        <span>
                            Tienes carnet de moto <span>*</span>
                        </span>
                        <div className={style.formSectionInput}>
                            <FaRegAddressCard />
                            <select name="license" onChange={(e) => handleInput(e)}>
                                <option hidden>Selecciona una opción</option>
                                <option>Sí</option>
                                <option>No</option>
                            </select>
                        </div>
                    </div>
                    <div className={style.formSection}>
                        <span>
                            Fecha de caducidad <span>*</span>
                        </span>
                        <div className={style.formSectionInput}>
                            <MdOutlineCreditCardOff />
                            <input type="date" name="licenseDate" onChange={(e) => handleInput(e)} />
                        </div>
                    </div>
                    <input type="submit" value="Enviar" disabled={!canSubmit} className={style.formSubmit} />
                </form>
                <div className={style.map}>
                    <MapComponent />
                    <a href="https://www.google.com/maps/place/Vespa+Vintage+Tours/@38.5653324,-0.0937996,17z/data=!3m1!4b1!4m6!3m5!1s0x29a8c469f09582bb:0xceddfded8b70df93!8m2!3d38.5653324!4d-0.0912247!16s%2Fg%2F11vxqw6jsh?entry=ttu" target="_blank" className={style.mapLink}>
                        Ver ruta
                    </a>
                </div>
            </div>
        </section>
    );
}
