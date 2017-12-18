import $ from 'jquery';
import TypeIt from 'typeit';
import ScrollButton from './ScrollButton';

class Intro {
  constructor(els, txt, auto){
    var typingContent = [];
    this.typingArea = els;
    this.typingContent = txt;
    this.startTyping = auto;

    new TypeIt(this.typingArea, {
      strings: this.typingContent,
      lifeLike:true,
      autoStart: this.startTyping,
      nextStringDelay: 750,
      cursor: false,
      callback: function() {
                  $('.scroll-button').fadeIn('slow');
                 }
    });
  }
}

export default Intro;
