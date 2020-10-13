import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import OrphanagesMap from './pages/OrphanagesMap';


function Routers(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing}/> {/* exact para fazer comparação de igualdade */}
                <Route path="/app" component={OrphanagesMap}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routers;
