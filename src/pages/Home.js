import React, { Fragment } from 'react';
//Importando estilos
import '../pages/styles/Home.css';
//Imagenes
import astronauts from '../images/astronauts.svg';
import logoConf from '../images/platziconf-logo.svg';

//Creando componente
const Home = () => {
    return (
        <Fragment>
            <div className="Home__container">
                <div className="d-flex justify-content-center align-items-center">
                    <div className="row justify-content-center align-items-center vh-100">
                        <div className="col-4 colConf text-center">
                            <img src={logoConf} alt="" />
                            <div className="link-light text-center">
                                <p className="h2">PRINT YOUR BADGES</p>
                                <p className="fw-normal">The easiest way to manage yout conference</p>
                                <button className="btn btn-success">Start now</button>
                            </div>
                        </div>
                        <div className="col-8 colAst">
                            <img src={astronauts} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

//Exportando componente
export default Home;