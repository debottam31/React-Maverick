import React from 'react';

import RestaurentsBanner from './components/Banner';
import ReactaurantsContainer from './components/Restaurants';
import Header from '../../Header/Header';
import Footer from '../../Layout/footer';

const Restaurants = ()=>(
    <div>
        <Header />
        <RestaurentsBanner />
        <ReactaurantsContainer />    
        <Footer />
    </div>
)

export default Restaurants;