import React from 'react';
import Swiper from 'react-id-swiper';
import {Link} from 'react-router-dom';

class WelcomePage extends React.Component{
 
    render(){
        const restaurants = ['Annapurna','Ambrosia','Penguine','Dhaka Biriani Center','Rasui','Ma Home Service',
        'Aro Khabo','Streight from Vagar','New Arsalan Biriani','Food Village'];
        return (
        <div class ="container">
            <section class="welcome">
                <div class="wc-placeholder">
                    <h1 class="titlebanner">TELL ME</h1>
                    <Link to="/restaurants" class ="btn-order-now"><i class="fa fa-shopping-cart"></i>
                    Order Now</Link>
                </div>
            </section>
            <section class="aboutus">
                <div class="cont-aboutus">
                    <h3 class="subheading">About Us</h3>
                    <h4 class="about-us-content">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sunt minus totam laudantium ex est voluptates maxime voluptas temporibus ab doloremque, mollitia corporis pariatur vel labore vero explicabo, repudiandae in! Nihil ducimus sapiente perspiciatis, rem quod placeat! Atque neque eos dolorum eveniet praesentium quo unde ab aliquam nemo assumenda illo blanditiis debitis id molestias rem, sequi veniam, ad asperiores quia quibusdam dolor nam iste aliquid veritatis. Similique fugit at, numquam iusto possimus eveniet velit asperiores animi reiciendis, repudiandae quidem debitis quaerat ab harum nesciunt? Quasi, laboriosam officiis deserunt iusto assumenda molestias velit voluptatibus, ut excepturi, animi facilis consequuntur soluta facilis.
                    </h4>
                </div>
            </section>
            <section class="partners">
                <div class="cont-parnters">
                <h3 class="subheading ourpartners">Our Partners</h3>
                    <div class="partnercontainer">
                        {/* <div class="swiper-container">
                            <div class="swiper-wrapper">
                                {restaurants.map((name)=>{
                                    return(
                                        <Restaurant key={name} name ={name}/>
                                    )
                                })}
                            </div>
                        </div> */}
                        <Swiper {...params}>
                        {restaurants.map((name)=>{
                                    return(
                                    <div>
                                    <Restaurant key={name} name ={name}/>
                                    </div>
                                    )
                                })}
                        </Swiper>
                    </div>
                </div>
            </section>
        </div>
    );
    }
}

// const Restaurant = (props)=>(
//     <div class="swiper-slide">
//         <div class="partnerrestro prvlt">
//             <h3>{props.name}</h3>
//         </div>
//     </div>
// )

const Restaurant = (props)=>(
        <div class="partnerrestro prvlt">
            <h3>{props.name}</h3>
        </div>
)

const params = {
    slidesPerView: 5,
    mousewheel: true,
    spaceBetween: 30,
    autoplay: 2200,
    autoplaydisableOnInteraction: false,
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
export default WelcomePage ; 