import React from 'react';

import Header from '../../Header/Header';
import Footer from '../../Layout/footer'

const Restaurant = (props)=>{
    
    console.log(props);
    return (
    <div>
        <Header />
        <section className= 'restmenumain'>
            <div className='menu-bannerplaceholder'>
                <div className='rest-image-holder'>
                    <img src="/content/images/resort-921940_640.jpg" alt="rest-thumbnail" className='menu-rest-banner'/>
                    <div className='rest-rating-placeholder'>
                    <div className='rest-rating'>
                        {/* <div className='rest-rating-num'>4.2</div> */}
                        <div>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star-half-o" aria-hidden="true"></i>
                            <i class="fa fa-star-o" aria-hidden="true"></i>
                        </div>
                    </div>
                    </div>
                </div>
                <div className= 'menu-rest-details'>
                    <h3 className='rest-name-heading' >Ambrosia</h3>
                    <p className='rest-name-addrs' >Feedar Road, Belgharia Station</p>
                    <p className='rest-name-detail'>Indian, Chinease, Tandoori</p>
                    <p className='rest-name-time'>Opens at: 11:00 AM | Closes at: 11:00 PM  </p>
                </div>
            </div>
        </section>
        <section className='menu-placeholder'>
            <h3 className='rest-meu-subheading'>Menu</h3>
            <div className='rest-menu-placeholder'>
                <div className='menu-item'>
                    <div className='menu-item-details'>
                        <img src="/content/images/nvegsymbol.png" alt="nveg" className='foodsymbol'/>
                        <div className='menu-item-nameinfo'>
                            <h4 className='menu-name'>Chicken Momo</h4>
                            <p className='menu-info'>(Steam), 5Pic</p>
                        </div>
                    </div>
                    <div className='menu-item-price'>
                        <p className='menu-price'>₹ 60.00</p>
                        <button className='btn-addto-cart'>Add</button>
                    </div>
                </div>
                <div className='menu-item'>
                    <div className='menu-item-details'>
                        <img src="/content/images/vegsymbol.png" alt="veg" className='foodsymbol'/>
                        <div className='menu-item-nameinfo'>
                            <h4 className='menu-name'>Veg Momo</h4>
                            <p className='menu-info'>(Steam), 5Pic</p>
                        </div>
                    </div>
                    <div className='menu-item-price'>
                        <p className='menu-price'>₹ 60.00</p>
                        <Quantity />
                    </div>
                </div>
            </div>
        </section>
        <Footer />
    </div>
)}

export default Restaurant ;

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