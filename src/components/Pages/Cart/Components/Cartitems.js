import React from 'react';
import QuantityBtn from '../../../Layout/Quantitybtn';


const CartWithRest = (props) =>{

return(
    <div className='cart-items-withrest'>
        <p className='cart-rest-name'>From {props.restItem.restaurantName}</p>
        {props.restItem.itemdetail.map((detail, index)=><CartSingleItem  key= {index} itemdetail ={detail} />)}
    </div>
)
}
export default CartWithRest ; 


const CartSingleItem = (props)=>(
    <div className= 'cart-item'>
        <p className='cart-item-name'>{props.itemdetail.itemName}</p>
        <QuantityBtn quantity={props.itemdetail.quantity} itemId={props.itemdetail.itemId} />
        <p className='cart-item-amount'>{props.itemdetail.price}.00</p>
    </div>
)