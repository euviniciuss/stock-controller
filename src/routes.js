import React from 'react';
import {  Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import RegisterProduct from './pages/RegisterProduct';
import Query from './pages/Query';

export default function Routes(){
    return(
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/registerProduct" component={RegisterProduct}/>
            <Route path="/query" component={Query}/>
        </Switch>
    );
};