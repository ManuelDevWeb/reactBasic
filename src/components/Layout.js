import React, { Fragment } from 'react';
//Importando NavBar
import Navbar from './Navbar';

//Creando componente
const Layout = (props) => {
    //El hijo viene desde las rutas del App.js
    const { children } = props;

    return (
        <Fragment>
            <Navbar />
            {children}
        </Fragment>
    );
}

//Exportando componente
export default Layout;