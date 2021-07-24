import React from "react";
//Importando Browser Router
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//Importando componente badge
import Badges from "../pages/Badges";
//Importando componente badgenew
import BadgeNew from "../pages/BadgeNew";
//Importando layout
import Layout from "../components/Layout";
//Importando NotFound
import NotFound from "../pages/NotFound.js"


//Creando componente
const App = () => {
    return (
        //Permite al resto de las rutas funcionar
        <BrowserRouter>
            {/*Layout recibe un hijo, el componente correspondiente a la ruta en la estemos*/}
            <Layout>
                {/*Componente que nos sirve para representar 1 sola ruta de varias que podemos poner dentro del componente*/}
                <Switch>
                    {/*Rutas de nuestra App*/}
                    <Route exact path="/badges" component={Badges} />
                    <Route exact path="/badges/new" component={BadgeNew} />
                    <Route component={NotFound} />
                </Switch>
            </Layout>
        </BrowserRouter>
    )
};

//Exportando componente
export default App;
