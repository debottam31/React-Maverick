import React from "react";
import {NavLink} from 'react-router-dom';

export default class Nav extends React.Component {
    
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          dropdownOpen: false
        };
    }
    
    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    render() {

        return(
            <div class="container">
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item active">
                                <NavLink to='/' strict activeStyle={{fontWeight: 'bold',color: 'red'}} activeClassName="selected">
                                &nbsp;<i class="fas fa-home"></i>&nbsp;Home&nbsp;&nbsp;<span class="sr-only">(current)</span></NavLink>
                            </li>
                            <li class="nav-item active">
                                <NavLink to='/restaurants' exact activeStyle={{fontWeight: 'bold',color: 'red'}}>
                                &nbsp;<i class="fas fa-shipping-fast"></i>&nbsp;Order Now&nbsp;</NavLink>
                            </li>
                            <li class="nav-item active">
                                <NavLink to='/viewCart' exact activeStyle={{fontWeight: 'bold',color: 'red'}}>
                                &nbsp;<i class="fas fa-shopping-cart"></i>&nbsp;View Cart&nbsp;</NavLink>
                            </li>
                            <li class="nav-item active">
                                <NavLink to='/about' exact activeStyle={{fontWeight: 'bold',color: 'red'}}>
                                &nbsp;<i class="fas fa-info-circle"></i>&nbsp;About&nbsp;</NavLink>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" 
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="fas fa-users"></i>&nbsp;Users Management
                                </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <NavLink to='/' exact activeStyle={{fontWeight: 'bold',color: 'red'}} >
                                        &nbsp;&nbsp;&nbsp;<i class="fas fa-sign-in-alt"></i>&nbsp;Sign In&nbsp;
                                    </NavLink><hr />
                                    <NavLink to='/usersignup' exact activeStyle={{fontWeight: 'bold',color: 'red'}} >
                                        &nbsp;&nbsp;&nbsp;<i class="fas fa-user-plus"></i>&nbsp;Sign Up&nbsp;
                                    </NavLink><br />
                                <div class="dropdown-divider"></div>
                                    <NavLink to='/help' exact activeStyle={{fontWeight: 'bold',color: 'red'}} >
                                        &nbsp;&nbsp;&nbsp;<i class="fas fa-hands-helping"></i>&nbsp;Help&nbsp;
                                    </NavLink><br />
                                </div>
                            </li>
                        </ul>
                        <form class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </nav>
            </div>
        );
    }   
}
