import $ from 'jquery';

class ScrollButton {
  constructor (e) {
    $('#hero-area').on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: $($(this).attr('#hero-area')).offset().top}, 500, 'linear');
    });
  }
}

export default ScrollButton;
