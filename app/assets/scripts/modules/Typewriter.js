import $ from 'jquery';
import TypeIt from 'typeit';
import ScrollButton from './ScrollButton';

class Intro {
  constructor(els, txt, auto, cursor, nextTask){
    var typingContent = [];
    this.typingArea = els;
    this.typingContent = txt;
    this.startTyping = auto;
    this.blink = cursor;
    this.nextTask = nextTask;

    new TypeIt(this.typingArea, {
      strings: this.typingContent,
      options: ({speed: 250}),
      lifeLike:true,
      autoStart: this.startTyping,
      nextStringDelay: 300,
      cursor: this.blink,
      callback: this.nextTask
    });
  }
}

export default Intro;
