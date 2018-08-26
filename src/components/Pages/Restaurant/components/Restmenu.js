import React from 'react';
import MenuItem from './MenuItem';

const RestMenu = (props)=>(
    <section className='menu-placeholder'>
        <h3 className='rest-meu-subheading'>Menu</h3>
        <div className='rest-menu-placeholder'>
        {
            props.dishItems.map((item)=>{
                return(  
                    <MenuItem key = {item._id} {...item}/>
                )
            })
        }
        </div>
    </section>
)

const Quantity = ()=>(
    <div className= 'item-qtycontainer' style={{margin:'0'}}>
        <button className= 'buttonminus'>
            <i class="fa fa-minus" aria-hidden="true"></i>
        </button>
        <p className='item-qty'>1</p>
        <button className='buttonplus'>
            <i class="fa fa-plus" aria-hidden="true"></i>
        </button>
    </div>
)

export default RestMenu ;