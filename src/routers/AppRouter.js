import React from 'react';
import {BrowserRouter,Route, Switch} from 'react-router-dom';

import Header from '../components/Header/Header';
import WelcomePage from '../components/Pages/Welcome/WelcomePage';
import Restaurants from '../components/Pages/Restaurants';
import Cart from '../components/Pages/Cart';
import HelpPage from '../components/Pages/HelpPage';
import NotFoundPage from '../components/Pages/NotFoundPage';


const AppRouter  = ()=>(
    <BrowserRouter>
        <div>
            <Switch>
            <Route path='/' component= {WelcomePage} exact />
            <Route path='/restaurants' component= {Restaurants} exact/>
            <Route path='/viewCart' component= {Cart} />
            <Route path='/help' component= {HelpPage} />
            <Route component ={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
)

export default AppRouter;