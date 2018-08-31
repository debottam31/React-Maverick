import React from 'react';
import {connect} from 'react-redux';
import getVisibleCartItems from '../../../../selector/selector';
import CartWithRest from './Cartitems';
import {calculateTotal} from '../../../../actions/cartitems'
const CartContent = (props)=>{
   // console.log(props.cartItems);
   if(props.itemCount > 0){
    return (    
        <section className='cartcontent'>
           <h3 className='cart-subheading'>Your Orders</h3>
           <div className='cart-item-placeholder'>
               {props.cartItems.map((restitem,  index)=> <CartWithRest key= {index} restItem ={restitem}/>)}
               <hr/>
               <div className='cart-total'>
                   <div className='cart-item'>
                       <div className='cart-fil-emptyspace'></div>
                       <p className='cart-deliverycharge'>Delivery Charge</p>
                       <p className='cart-deliveryamt'>₹ {props.deliveryCharge}.00</p>
                   </div>
                   <div className='cart-item'>
                       <p className='cart-totaldesc'>Amount Pay On Delivery</p>
                       <p className='cart-totaldesc'>₹ {props.totalAmount}.00</p>
                   </div>
               </div>
               <div className='cart-orderplace'>
                   Call +91-9876543210 To Place an Order
               </div>
           </div>
       </section>
   )
   }
   return (
       <section className='cartcontent'>
            <h3 className='cart-subheading' style={{height : '50%'}}>Your Cart is Empty</h3>
       </section>
   )
    
}



 const mapToStateProps = (state)=>{
    return {
        cartItems : getVisibleCartItems(state.cartItems),
        deliveryCharge : state.deliveryCharge,
        itemCount : state.cartItems.length,
        totalAmount : state.totalAmount

    }
}

export default connect(mapToStateProps)(CartContent);


