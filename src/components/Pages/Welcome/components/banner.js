import React from 'react';
import {Link} from 'react-router-dom';
const Banner = ()=>(
    <section class="welcome">
        <div class="wc-placeholder">
            <h1 class="titlebanner">TELL ME</h1>
            <Link to="/restaurants" class ="btn-order-now"><i class="fa fa-shopping-cart"></i>
            Order Now</Link>
        </div>
    </section>
)

export default Banner;