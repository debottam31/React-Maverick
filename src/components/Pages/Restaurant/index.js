import React from 'react';

import Header from '../../Header/Header';

const Restaurant = (props)=>{
    
    console.log(props);
    return (
    <div>
        <Header />
        <section className= 'restmenumain'>
            <div className='menu-bannerplaceholder'>
                <div className='menu-rest-banner'>
                cool
                </div>
                <div className= 'menu-rest-details'>
                </div>
            </div>
        </section>
        <section className='menu-placeholder'>

        </section>
    </div>
)}

export default Restaurant ;
