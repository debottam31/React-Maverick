import React from 'react';
import Swiper from 'react-id-swiper';
import {Link} from 'react-router-dom';

import Banner from './components/banner';
import Aboutus from './components/Aboutus';
import Partners from './components/Partners';
import Footer from '../../Layout/footer';
class WelcomePage extends React.Component{
 
    render(){
        return (
        <div class ="container">
            <Banner />
            <Aboutus />
            <Partners />
            <Footer />
        </div>
    );
    }
}

export default WelcomePage ; 