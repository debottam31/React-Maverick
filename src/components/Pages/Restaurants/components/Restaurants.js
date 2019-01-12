import React from 'react';
import axios from 'axios';
import ContentLoader from 'react-content-loader';
//component
import RestaurantItem from '../components/RestaurantItem';

class ReactaurantsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            restaurants : [],
            ready : false
        }
    }
    componentDidMount(){
        axios.get('http://localhost:3000/api/restaurants', {headers: {"Access-Control-Allow-Origin": "*"}})
            .then((res)=>{
                this.setState(()=>({
                    restaurants: res.data,
                    ready : true
                }))
           })
           .catch((err)=>{
               console.log(err);
           })
    }
    render(){
        return (
            <section class= 'restaurantslists'>
                <h3 class='rest-list-subheading'>Restaurants</h3>
                <div class ='rest-list-row'>
                    {!this.state.ready && [...Array(8)].map((x,i)=>(
                        <RestLoader  key={i} /> 
                    ))}

                    {this.state.ready && this.state.restaurants.map((restaurant)=> (
                        <RestaurantItem key = {restaurant._id} restaurantdetail = {{...restaurant}}/>
                    ))}

                    <div class='filling-empty-space'></div>
                    <div class='filling-empty-space'></div>
                    <div class='filling-empty-space'></div>
                    <div class='filling-empty-space'></div>
                    <div class='filling-empty-space'></div>
                    <div class='filling-empty-space'></div>
                </div>    
             </section>
        )
    }
}

const RestLoader = props => (
    <div className= 'rest-list-col'>
	    <ContentLoader
		    height={300}
		    width={300}
		    speed={2}
		    primaryColor="#dbdbdb"
            secondaryColor="#eae8e8"
            style = {{width: '100%', height: '100%'}}
		    {...props}
	    >
		    <rect x="20" y="20" rx="0" ry="0" width="260" height="180" /> 
		    <rect x="20" y="210" rx="0" ry="0" width="200" height="15" /> 
		    <rect x="20" y="235" rx="0" ry="0" width="260" height="15" />
	    </ContentLoader>
    </div>
)
export default ReactaurantsContainer;