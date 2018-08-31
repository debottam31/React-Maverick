import React from  'react'
import {connect} from 'react-redux';
import {incrementItem,decrementItem, removeItem} from '../../actions/cartitems';

const QuantityBtn = (props)=>(
    <div className= 'item-qtycontainer' style={props.style}>
        <button className= 'buttonminus' onClick={()=> props.onDecrementCounter(props.itemId, props.quantity)}>
            <i class="fa fa-minus" aria-hidden="true"></i>
        </button>
        <p className='item-qty'>{props.quantity}</p>
        <button className='buttonplus' onClick ={()=> props.onIncrementCounter(props.itemId)}>
            <i class="fa fa-plus" aria-hidden="true"></i>
        </button>
    </div>
)

const mapDispatchToProps =  (dispatch)=>{
    return {
        onIncrementCounter : (itemid)=> dispatch(incrementItem({itemId :itemid})),
        onDecrementCounter : (itemid, qty)=> {
            if(qty<=1){
                return dispatch(removeItem({itemId :itemid}))
            }
             return dispatch(decrementItem({itemId :itemid}))
        }
    }
}


export default connect(null, mapDispatchToProps)(QuantityBtn);