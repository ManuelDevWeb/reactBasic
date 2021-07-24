import React from 'react';
//Importando estilos
import './styles/NotFound.css';
//Importando Imagen
import imgEror from '../images/error.svg';

//Creando componente
const NotFound = () => {
    return (
        <div className='NotFound__Container'>
            <div className='NotFound__Img'>
                <img src={imgEror} alt="Erro 404" />
                <p>Page <span>not found!</span></p>
            </div>
        </div>
    );
}

//Exportando componente
export default NotFound;