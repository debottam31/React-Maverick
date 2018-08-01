import React from 'react';

const CartContent = ()=>(
    <section className='cartcontent'>
        <h3 className='cart-subheading'>Your Orders</h3>
        <div className='cart-item-placeholder'>
            <div className='cart-items-withrest'>
                <p className='cart-rest-name'>From Annapurna</p>
                <div className= 'cart-item'>
                    <p className='cart-item-name'>Egg roll</p>
                    <div className= 'item-qtycontainer'>
                        <button className= 'buttonminus'>
                            <i class="fa fa-minus" aria-hidden="true"></i>
                        </button>
                        <p className='item-qty'>2</p>
                        <button className='buttonplus'>
                            <i class="fa fa-plus" aria-hidden="true"></i>
                        </button>
                    </div>
                    <p className='cart-item-amount'>₹ 50.00</p>
                </div>
                <div className= 'cart-item'>
                    <p className='cart-item-name'>Moghlai Paratha</p>
                    <div className= 'item-qtycontainer'>
                        <button className= 'buttonminus'>
                            <i class="fa fa-minus" aria-hidden="true"></i>
                        </button>
                        <p className='item-qty'>1</p>
                        <button className='buttonplus'>
                            <i class="fa fa-plus" aria-hidden="true"></i>
                        </button>
                    </div>
                    <p className='cart-item-amount'>₹ 45.00</p>
                </div>
            </div>
            <div className='cart-items-withrest'>
                <p className='cart-rest-name'>From Rosui</p>
                <div className= 'cart-item'>
                    <p className='cart-item-name'>Chicken Chowmin</p>
                    <div className= 'item-qtycontainer'>
                        <button className= 'buttonminus'>
                            <i class="fa fa-minus" aria-hidden="true"></i>
                        </button>
                        <p className='item-qty'>1</p>
                        <button className='buttonplus'>
                            <i class="fa fa-plus" aria-hidden="true"></i>
                        </button>
                    </div>
                    <p className='cart-item-amount'>₹ 90.00</p>
                </div>
            </div>
            <hr/>
            <div className='cart-total'>
                <div className='cart-item'>
                    <div className='cart-fil-emptyspace'></div>
                    <p className='cart-deliverycharge'>Delivery Charge</p>
                    <p className='cart-deliveryamt'>₹ 30.00</p>
                </div>
                <div className='cart-item'>
                    <p className='cart-totaldesc'>Amount Pay On Delivery</p>
                    <p className='cart-totaldesc'>₹ 215.00</p>
                </div>
            </div>
            <div className='cart-orderplace'>
                Call +91-9876543210 To Place an Order
            </div>
        </div>
    </section>
)

export default CartContent;