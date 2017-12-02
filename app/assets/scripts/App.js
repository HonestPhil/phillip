import Intro from './modules/Typewriter';
import $ from 'jquery';

var heroArea = $('.large-hero__text-content');
var introTypewriter = new Intro(heroArea,
  [
    '<h1>Hello, my name is Phillip. </h1>',
    '<h2>I am a web developer. </h2>',
    '<h2>Here is some of my work...</h2>'
  ],true);
