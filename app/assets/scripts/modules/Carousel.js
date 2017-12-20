import $ from 'jquery';
import Carousel from 'slick-carousel';

class MyCarousel {
  constructor () {
    this.carousel = $(".myCarousel");
    this.createCarousel();
  }
  
  createCarousel () {
      this.carousel.slick({
    autoplay:true,
    autoplaySpeed:5000,
    arrows: true,
    speed:900,
    slidesToShow:1,
    slidesToScroll:1,
    pauseOnHover:true,
    dots:true,
    pauseOnDotsHover:true,
    cssEase:'linear',
    fade:true,
    focusOnSelect: true,
    focusOnChange: true,
    draggable:false,
    // prevArrow:'<button id="nextBtn" type="button" class="slick-next slideshow__button slideshow__button--next">Next</button>',
    // nextArrow:'<button class="NextArrow"></button>', 
  });
  }
  
  
}

export default MyCarousel;
