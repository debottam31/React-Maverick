import React from 'react';
import {Link} from 'react-router-dom';

const ReactaurantsContainer = ()=> (
    <section class= 'restaurantslists'>
        <h3 class='rest-list-subheading'>Restaurants</h3>
        <div class ='rest-list-row'>
        <RestaurantItem />
        <RestaurantItem />
        <RestaurantItem />
        <RestaurantItem />
        <RestaurantItem />
        <RestaurantItem />
        <RestaurantItem />
        <RestaurantItem />
        <RestaurantItem />
        <RestaurantItem />
        <div class='filling-empty-space'></div>
        <div class='filling-empty-space'></div>
        <div class='filling-empty-space'></div>
        <div class='filling-empty-space'></div>
        <div class='filling-empty-space'></div>
        <div class='filling-empty-space'></div>

        </div>    
    </section>
)

const RestaurantItem = ()=>(
    <div class= 'rest-list-col'>
        <div class = 'restdetailscontainer'>
            <div class= 'restaurantbanner'>
                <h3>Annapurna</h3>
            </div>
            <div class='rest-detail-col'>
                <div class='restaurantname'>
                    Restauranto
                </div>
                <Link to="/restaurants/MenuPage" class ="btn-view-menu"><i class="fa fa-cutlery"></i> 
                    &nbsp;View Menu</Link>
            </div>
        </div>
        
    </div>
)

export default ReactaurantsContainer;