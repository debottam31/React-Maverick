import React from "react";
import ReactDOM from "react-dom";
import Swiper from "react-id-swiper";


class Example extends React.Component {
  render() {
    const params = {
      slidesPerView: 5,
      loop: true,
      mousewheel: true,
      spaceBetween: 30,
      autoplay: {
        delay: 2200,
        disableOnInteraction: false
      },
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
      }
    };
    return (
      <Swiper {...params}>
        <div>Slide 1</div>
        <div>Slide 2</div>
        <div>Slide 3</div>
        <div>Slide 4</div>
        <div>Slide 5</div>
        <div>Slide 6</div>
        <div>Slide 7</div>
        <div>Slide 8</div>
        <div>Slide 9</div>
        <div>Slide 10</div>
      </Swiper>
    );
  }
}

const rootElement = document.getElementById("app");
ReactDOM.render(<Example />, rootElement);
