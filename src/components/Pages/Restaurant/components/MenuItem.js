import React from 'react';

const MenuItem = (props)=>(
    <div className='menu-item'>
        <div className='menu-item-details'>
            {props.itemType== 'NonVeg' && <img src="/content/images/nvegsymbol.png" alt="nveg" className='foodsymbol'/>}
            {props.itemType== 'Veg' && <img src="/content/images/vegsymbol.png" alt="veg" className='foodsymbol'/>}
            <div className='menu-item-nameinfo'>
                <h4 className='menu-name'>{props.itemName}</h4>
                {/* <p className='menu-info'>(Steam), 5Pic</p> */}
            </div>
        </div>
        <div className='menu-item-price'>
            <p className='menu-price'>₹ {props.price}.00</p>
            <button className='btn-addto-cart'>Add</button>
        </div>
    </div>
)

export default MenuItem;