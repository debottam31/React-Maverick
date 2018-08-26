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
                        <RestaurantItem key = {restaurant._id} {...restaurant}/>
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
		    primaryColor="#f3f3f3"
		    secondaryColor="#ecebeb"
		    {...props}
	    >
		    <rect x="19.5" y="20.27" rx="0" ry="0" width="268" height="184" /> 
		    <rect x="20.46" y="220.72" rx="0" ry="0" width="189" height="21.09" /> 
		    <rect x="18.5" y="253.27" rx="0" ry="0" width="257" height="20.02" />
	    </ContentLoader>
    </div>
)
export default ReactaurantsContainer;