import style from "./Contact.module.css";
import Title from "../../components/Title/Title";
import { FaUserAlt, FaRegAddressCard } from "react-icons/fa";
import { MdAlternateEmail, MdDateRange, MdOutlineCreditCardOff } from "react-icons/md";
import { BiMessageDetail } from "react-icons/bi";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useEffect, useState } from "react";

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

    return (
        <section className={style.container} id="contact">
            <Title text={"Contacto"} color={"var(--black)"} />
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
                        <select name="routeDate" onChange={(e) => handleInput(e)}>
                            <option>Opción 1</option>
                            <option>Opción 2</option>
                            <option>Opción 3</option>
                        </select>
                    </div>
                </div>
                <div className={style.formSection}>
                    <span>
                        Tipo de carnet de conducir <span>*</span>
                    </span>
                    <div className={style.formSectionInput}>
                        <FaRegAddressCard />
                        <select name="license" onChange={(e) => handleInput(e)}>
                            <option>Opción 1</option>
                            <option>Opción 2</option>
                            <option>Opción 3</option>
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
        </section>
    );
}
