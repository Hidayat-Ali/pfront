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

  ngOnInit(): void {
    gsap.registerPlugin(ScrollTrigger);

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

}


