import React from 'react';
import {BrowserRouter,Route, Switch} from 'react-router-dom';

import Header from '../components/Header/Header';
import NavBar from '../components/layout/Nav';
import Footer from '../components/layout/Footer';
import WelcomePage from '../components/pages/WelcomePage';
import Restaurants from '../components/pages/Restaurants';
import Cart from '../components/pages/Cart';
import HelpPage from '../components/pages/HelpPage';
import AboutPage from '../components/pages/About'
import NotFoundPage from '../components/pages/NotFoundPage';
import UserSignUp from '../components/pages/user/signup';

const AppRouter  = () => (
    <BrowserRouter>
        <div>
            <Header/>
                <NavBar/>
                    <Switch>
                        <Route path='/' component= {WelcomePage} exact />
                        <Route path='/restaurants' component= {Restaurants} exact/>
                        <Route path='/viewCart' component= {Cart} />
                        <Route path='/about' component={AboutPage}/>
                        <Route path='/help' component= {HelpPage} />
                        <Route path='/usersignup' component= {UserSignUp} />
                        <Route component ={NotFoundPage} />
                    </Switch>
            <Footer/>
        </div>
    </BrowserRouter>
)

export default AppRouter;