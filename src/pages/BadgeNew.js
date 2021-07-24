import React, { Fragment, useState } from "react";
//Importando imagen
import imgHero from "../images/badge-header.svg";
//Importando componente Badge
import Badge from "../components/Badge.js";
//Importando componente BadgeForm
import BadgeForm from "../components/BadgeForm.js";
//Importando estilos
import "./styles/BadgeNew.css";

//Creando componente
const BadgeNew = () => {
    //State
    const [form, setValues] = useState({
        firstName: "",
        lastName: "",
        email: "",
        jobTitle: "",
        twitter: "",
        gravatar: "https://s.gravatar.com/avatar/0d5b9b3d326178491c3be3500e652c3b?s=80",
    });

    //Método que escucha cambios del input
    const handleChange = (event) => {
        setValues({
            ...form,
            [event.target.name]: event.target.value,
        });
    };

    //Método que escucha envio del formulario
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(form);
    };

    return (
        <Fragment>
            <div className="BadgeNew__hero">
                <img className="img-fluid" src={imgHero} alt="Logo" />
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <Badge
                            firstName={form.firstName}
                            lastName={form.lastName}
                            avatar={form.gravatar}
                            jobTitle={form.jobTitle}
                            twitter={form.twitter}
                        />
                    </div>
                    <div className="col-6">
                        <BadgeForm
                            //Enviando props con el state
                            handleChange={handleChange}
                            handleSubmit={handleSubmit}
                            form={form}
                        />
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

//Exportando componente
export default BadgeNew;
