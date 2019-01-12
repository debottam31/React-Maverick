import React from 'react';
import {Link} from 'react-router-dom';
const RestaurantItem = (props)=>{
    //console.log(props);
    return (
        <div class= 'rest-list-col'>
            <div class = 'restdetailscontainer'>
                <div class= 'restaurantbanner'>
                    <h3>{props.restaurantdetail.name}</h3>
                </div>
                <div class='rest-detail-col'>
                    <div class='restaurantname'>
                        {props.restaurantdetail.name}
                    </div>
                    <Link to={{
                        pathname : `/restaurants/${props.restaurantdetail._id}`,
                        state : {...props.restaurantdetail}
                    }}
                        class ="btn-view-menu">
                            <i class="fa fa-cutlery"></i> 
                        &nbsp;View Menu</Link>
                </div>
            </div>
            
        </div>
    )
}

export default RestaurantItem;