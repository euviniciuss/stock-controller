import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import RegisterProduct from './pages/RegisterProduct';
import Query from './pages/Query';

export default function Routes(){
    return(
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/registerProduct/:sku?" component={RegisterProduct}/>
            <Route exact path="/query" component={Query}/>
        </Switch>
    );
};