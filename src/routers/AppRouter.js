import React from 'react';
import {BrowserRouter,Route, Switch} from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
    
import Header from '../components/Header/Header';
import WelcomePage from '../components/Pages/Welcome/WelcomePage';
import Restaurants from '../components/Pages/Restaurants/index';
import Restaurant from '../components/Pages/Restaurant/index';
import Cart from '../components/Pages/Cart/Cart';
import HelpPage from '../components/Pages/HelpPage';
import NotFoundPage from '../components/Pages/NotFoundPage';


class AppRouter extends React.Component {
    render(){
        return (
            <BrowserRouter basename='/'>
                <ScrollToTop>
                    <Switch>
                        <Route path='/' component= {WelcomePage} exact />
                        <Route path='/restaurants' component= {Restaurants} exact/>
                        <Route path='/restaurants/:id' component={Restaurant} exact strict />
                        <Route path='/viewCart' component= {Cart} />
                        <Route path='/help' component= {HelpPage} />
                        <Route component ={NotFoundPage} />
                    </Switch>
                </ScrollToTop>
            </BrowserRouter>    
        )
    }
}
export default AppRouter;