import React from 'react';
import Header from '../../Header/Header';
import Footer from '../../Layout/footer';

import CartBanner from './Components/banner';
import CartContent from './Components/Cartcontent';

const Cart = ()=>(
    <div>
        <Header />
        <CartBanner />
        <CartContent />
        <Footer />
    </div>
)

export default Cart ;