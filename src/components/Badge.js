import React from 'react';
//Importando imagen
import confLogo from '../images/badge-header.svg';
//Importando estilos
import "./styles/Badge.css";

//Creando componente
const Badge = (props) => {
    const { firstName, lastName, avatar, jobTitle, twitter } = props;
    return (
        <div className="Badge">
            <div className="Badge__header">
                <img src={confLogo} alt="Logo conferencia" />
            </div>
            <div className="Badge__section-name">
                <img className="Badge__avatar" src={avatar} alt="Avatar" />
                <h1>{firstName} <br /> {lastName}</h1>
            </div>
            <div className="Badge__section-info">
                <h3>{jobTitle}</h3>
                <div>{twitter}</div>
            </div>
            <div className="Badge__footer">
                #platziconf
            </div>
        </div>
    );
}

//Exportando componente
export default Badge;