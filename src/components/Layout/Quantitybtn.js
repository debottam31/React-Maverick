import React from  'react'
import {connect} from 'react-redux';
import {incrementItem,removeItem} from '../../actions/cartitems';

const QuantityBtn = (props)=>(
    <div className= 'item-qtycontainer' style={props.style}>
        <button className= 'buttonminus' onClick={props.onDecrementCounter}>
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
        onDecrementCounter : ()=> dispatch(removeItem())
    }
}


export default connect(null, mapDispatchToProps)(QuantityBtn);