import React from 'react';
import QuantityBtn from '../../../Layout/Quantitybtn';
import {connect} from 'react-redux';
import {addItem} from '../../../../actions/cartitems'

const MenuItem = (props)=>{
//    console.log(props.details._id);
    return (
    <div className='menu-item'>
        <div className='menu-item-details'>
            {props.details.itemType== 'NonVeg' && <img src="/content/images/nvegsymbol.png" alt="nveg" className='foodsymbol'/>}
            {props.details.itemType== 'Veg' && <img src="/content/images/vegsymbol.png" alt="veg" className='foodsymbol'/>}
            <div className='menu-item-nameinfo'>
                <h4 className='menu-name'>{props.details.itemName}</h4>
                {/* <p className='menu-info'>(Steam), 5Pic</p> */}
            </div>
        </div>
        <div className='menu-item-price'>
            <p className='menu-price'>₹ {props.details.price}.00</p>
            { props.itemexist ? 
                <QuantityBtn style = {{margin:'0'}}
                    itemId = {props.details._id}
                    quantity = {props.quantity}
                 /> 
                : <button className='btn-addto-cart'
                    onClick = {()=>props.onAddItem(props.details)}
            >Add
            </button>
            }
        </div>
    </div>
)}

const mapDispatchToProps = (dispatch)=>{
    return {
        onAddItem : (item)=> dispatch(addItem({
            restaurantName : item.name,
            restId : item.restId,
            itemName : item.itemName,
            itemId : item._id,
            itemType : item.itemType,
            price : item.price
        }))
    }
}

const mapStateToProps = (state, props)=>{
     const itemdetail = state.cartItems.find((item)=>{
        return item.itemId === props.details._id
    })
    if (itemdetail){
        return {
            itemexist : true,
            quantity : itemdetail.quantity
        }
    }else{
        return {itemexist : false,} 
    }
     
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuItem);