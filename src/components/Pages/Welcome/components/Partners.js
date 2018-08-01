import  React from 'react';
import Swiper from 'react-id-swiper';

const Parners = ()=>{
    const restaurants = [{name :'Annapurna',cssclass :'prblue'},
    {name :'Ambrosia',cssclass :'prgreen'},
    {name :'Penguine',cssclass :'prdrblue'},
    {name :'Dhaka Biriani Center',cssclass :'prdrgrey'},
    {name :'Rasui',cssclass :'prdrorng'},
    {name :'Ma Home Service',cssclass :'prvlt'},
    {name :'Aro Khabo',cssclass :'prgreen'},
    {name :'Streight from Vagar',cssclass :'prdrblue'},
    {name :'New Arsalan Biriani',cssclass :'prdrgrey'},
    {name :'Food Village',cssclass :'prvlt'}]

    return(
        <section class="partners">
            <div class="cont-parnters">
                <h3 class="subheading ourpartners">Our Partners</h3>
                <div class="partnercontainer">
                    <Swiper {...params}>
                        {restaurants.map((restaurant,index)=>{
                            return(
                                <div key={index}>
                                    <Restaurant name ={restaurant.name} cssclass={restaurant.cssclass}/>
                                </div>
                            )
                        })}
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

const Restaurant = (props)=>(
    <div class={'partnerrestro '+props.cssclass}>
        <h3>{props.name}</h3>
    </div>
)

// const Restaurant = (props)=>(
//     <div class="swiper-slide">
//         <div class="partnerrestro prvlt">
//             <h3>{props.name}</h3>
//         </div>
//     </div>
// )

const params = {
    slidesPerView: 5,
    mousewheel: true,
    spaceBetween: 30,
    autoplay  : {
        delay : 2500,
        disableOnInteraction: false
    },
    loop: true,
    breakpoints: {
      // when window width is <= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      // when window width is <= 480px
      480: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      // when window width is <= 640px
      768: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      1600: {
        slidesPerView: 4,
        spaceBetween: 30
      }
    },
    
  }

export default Parners;