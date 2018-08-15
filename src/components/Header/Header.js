import React from 'react';
import {NavLink, Link} from 'react-router-dom';


class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            headerClass : 'glass'
        }
    }

    componentDidMount(){
        window.addEventListener('scroll',this.scrollHandler);
    }

    componentWillUnmount(){
        window.removeEventListener('scroll', this.scrollHandler);
    }

    scrollHandler = (e)=>{
        // console.log(e);
        let yaxis ;
        if(e.pageY){
            yaxis = e.pageY;
        }
        if(e.srcElement){
            yaxis = e.srcElement.body.scrollTop;
        }
        //console.log(e.srcElement.body.scrollTop);
        if(yaxis > 0){
            this.setState(()=>({headerClass : 'glass opaq'}))
        }else{
            this.setState(()=>({headerClass : 'glass'}))
        }
    }

    render () {
        return (
            <div>
            <nav class ={this.state.headerClass}>
                <div class="logo">
                <Link to='/' class = 'brand'>tell me</Link>
                </div>
                <div class ='menu'>
                    <ul>
                        <li><NavLink to='/' activeClassName='is-active' exact>Home</NavLink></li>
                        <li><NavLink to='/restaurants' activeClassName='is-active'>Restaurants</NavLink></li>
                        <li><NavLink to='/viewCart' activeClassName='is-active'>View Cart</NavLink></li>
                        <li><NavLink to='/help' activeClassName='is-active'>Help</NavLink></li>
                    </ul>
                </div>    
            </nav>
        </div>
        )
    }
}
export default Header;