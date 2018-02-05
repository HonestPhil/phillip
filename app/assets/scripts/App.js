import Intro from './modules/Typewriter';
import $ from 'jquery';
// import MyCarousel from './modules/Carousel';

var heroArea = $('.large-hero__text-content');
var heroText = $('large-hero__text-content').text();
var loadContent = $()

var introTypewriter = new Intro(heroArea,
  [
    heroText,
    // '<h1>Hello, my name is Phillip. </h1>',
    // '<h2>I am a web developer. </h2>',
    // '<h2>Here is some of my work...</h2>'
  ],true,
  false,
  function() {
                  $(' .contact-me').fadeIn('slow');
                 }
  );
  
  
  var sectionTitles = $('h2');
  var title = $('h2').text();
  var titlesTypewriter = new Intro(sectionTitles, 
  [
    title
  ],false,
  true,
  function() {
                  $('.reveal-content').fadeIn('slow');
                 }
  );

// var scrollButton = new ScrollButton('#hero-area', true);

// var myCarousel = new MyCarousel();




