import { Component, ElementRef } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as imagesLoaded from 'imagesloaded';

@Component({
  selector: 'app-magic',

  templateUrl: './magic.component.html',
  styleUrl: './magic.component.css'
})
export class MagicComponent {
  constructor(private el: ElementRef) { }
  quotes: string[] = [
    '"We Provide best IT  Solutions"',
    '"We develop All kind of Frontend Applications with better creativity."',
    '"if Your are the one looking for creating your portfolio?"',
    '"We are here to make it easy for you!"',
    '"JUST CONTACT US VIA OUR EMAIL"',
    '"Thank You for visiting Our Website!"'
  ];

  currentQuote: string = this.quotes[0];
  previousInt: number = 0;
  fadeState: string = 'visible';

  ngOnInit(): void {
    gsap.registerPlugin(ScrollTrigger);
    this.rotateBubbles();
    setInterval(() => this.handleAnimation(), 7000);

    const images: Element[] = gsap.utils.toArray('img');





    const showDemo = () => {
      document.body.style.overflow = 'auto';
      document.scrollingElement?.scrollTo(0, 0);
      gsap.to(document.querySelector('.loader'), { autoAlpha: 0 });

      gsap.utils.toArray('section').forEach((section: any, index) => {
        const w = section.querySelector('.wrapper');
        const [x, xEnd] = (index % 2) ? ['100%', (w.scrollWidth - section.offsetWidth) * -1] : [w.scrollWidth * -1, 0];
        gsap.fromTo(w, { x }, {
          x: xEnd,
          scrollTrigger: {
            trigger: section,
            scrub: 0.5
          }
        });
      });
    }

    imagesLoaded(images).on('always', showDemo);
  }
  rotateBubbles() {
    const bubbleContainer = document.querySelector('.bubble--container') as HTMLElement;
    bubbleContainer.animate([{ transform: 'rotate(0deg)' }, { transform: 'rotate(360deg)' }], {
      duration: 20000,
      iterations: Infinity
    });
  }

  handleAnimation() {
    let randomInt = this.getRandomInt();

    while (randomInt === this.previousInt) {
      randomInt = this.getRandomInt();
    }
    this.previousInt = randomInt;

    this.fadeState = 'hidden';
    setTimeout(() => {
      this.currentQuote = this.quotes[randomInt];
      this.fadeState = 'visible';
    }, 2800);
  }

  getRandomInt() {
    return Math.floor(Math.random() * this.quotes.length);
  }

}


