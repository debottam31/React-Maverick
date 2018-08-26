import React from 'react';


const MenuBanner = (props)=>{
    return (
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
                <h3 className='rest-name-heading' >{props.name}</h3>
                <p className='rest-name-addrs' >Feedar Road, Belgharia Station</p>
                { props.foodGenre && <p className='rest-name-detail'>{props.foodGenre.foodType}, {props.foodGenre.subType}</p>}
                <p className='rest-name-time'>Opens at: {props.opensAt} | Closes at: {props.closesAt}</p>
            </div>
        </div>
    </section>
    )
}

export default MenuBanner;