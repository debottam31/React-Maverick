import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = ()=>(
    <div>
        <h1>Tell Me</h1>
        <NavLink to='/' activeClassName='is-active' exact>Home</NavLink>
        <NavLink to='/restaurants' activeClassName='is-active'>Order Now</NavLink>
        <NavLink to='/viewCart' activeClassName='is-active'>View Cart</NavLink>
        <NavLink to='/help' activeClassName='is-active'>Help</NavLink>
    </div>
);

export default Header;