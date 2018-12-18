import React from 'react';
import axios from 'axios';
import Header from '../../Header/Header';
import MenuBanner from './components/banner';
import RestMenu from './components/Restmenu';
import Footer from '../../Layout/footer'


class Restaurant extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            restaurantDetail : {},
            ready : false
        }
    }

    componentDidMount(){
        const restId = this.props.match.params.id
        //console.log(this.props);
        axios.get(`https://us-east1-react-maverick.cloudfunctions.net/function-1/restaurant/${restId}`, {headers: {"Access-Control-Allow-Origin": "*"}})
            .then((res)=>{
                this.setState(()=>({
                    restaurantDetail: res.data,
                    ready : true
                }))
                //console.log(this.state.restaurantDetail.id)
            }).catch((e)=>{
                console.log(e);
            })
    
    }
    render(){
        //console.log(this.state.restaurantDetail);
        return (
            <div>
                {this.state.restaurantDetail.dishitems && <div>
                <Header />
                <MenuBanner
                    id = {this.state.restaurantDetail.id}
                    name = {this.state.restaurantDetail.name}
                    // address = {this.restaurantDetail.}
                    rating = {this.state.restaurantDetail.rating}
                    opensAt = {this.state.restaurantDetail.opensAt}
                    closesAt = {this.state.restaurantDetail.closesAt}
                    foodGenre = {this.state.restaurantDetail.foodGenre}
                    />
                <RestMenu  
                    dishItems = {this.state.restaurantDetail.dishitems}
                    restId ={this.state.restaurantDetail.id}
                    name = {this.state.restaurantDetail.name}
                />
                <Footer />
                </div>}
            </div>
        )
    }
}

export default Restaurant ;

