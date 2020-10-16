import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import OrphanagesMap from './pages/OrphanagesMap';
import Orphanage from './pages/Orphanage';
import CreateOrphanage from './pages/CreateOrphanage';



function Routers(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing}/> {/* exact para fazer comparação de igualdade */}
                <Route path="/app" component={OrphanagesMap}/>
                <Route path="/orphanages/create" component={CreateOrphanage}/>
                <Route path="/orphanages/:id" component={Orphanage}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routers;
