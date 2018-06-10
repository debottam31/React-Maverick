import React from 'react';
import {BrowserRouter,Route, Switch} from 'react-router-dom';

import Header from '../components/Header/Header';
import WelcomePage from '../components/WelcomePage/WelcomePage';
import Restaurants from '../components/Restaurants/Restaurants';
import Cart from '../components/Cart/Cart';
import HelpPage from '../components/HelpPage/HelpPage';
import NotFoundPage from '../components/NotFoundPage/NotFoundPage';


const AppRouter  = ()=>(
    <BrowserRouter>
        <div>
            <Header/>
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