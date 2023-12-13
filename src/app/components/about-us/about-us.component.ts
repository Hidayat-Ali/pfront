import { Component, ElementRef } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'src/app/splitText'

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {

  private splitText!: SplitText;
  constructor(private el: ElementRef) { }
  ngAfterViewInit() {
    gsap.registerPlugin(ScrollTrigger); // Register the ScrollTrigger plugin

    this.splitText = new SplitText(this.el.nativeElement.querySelector('#split'));


    const tl = gsap.timeline({ repeat: 30 });

    gsap.set("#split", { opacity: 1 });

    tl.from(this.splitText.chars, {
      duration: 1,
      y: 100,
      rotation: 90,
      opacity: 0,
      ease: "elastic",
      stagger: 0.03,
    });

    // Exploding text...
    tl.to(this.splitText.chars, {
      duration: 2.5,
      opacity: 0,
      rotation: "random(-2000, 2000)",
      physics2D: {
        angle: () => Math.random() * 80 + 240,
        velocity: "random(300, 600)",
        gravity: 800,
      },
      stagger: 0.015,
    }, 3);

    gsap.from(".about-me-text p", {
      y: 100,
      ease: "power4.out",
      duration: 1.8,
      skewY: 7,
      stagger: {
        amount: 0.3
      },
      scrollTrigger: {
        trigger: ".about-me-text", // Element to trigger the animation
        start: "top center", // Animation starts when the top of the element reaches the center of the viewport
        end: "bottom center", // Animation ends when the bottom of the element reaches the center of the viewport
        scrub: true, // Smooth animation during scrolling
      }
    });
    tl.to('.about-me-text p', {
      duration: 3.5,
      delay: 5,
      opacity: 0,
      rotation: "random(-2000, 2000)",
      physics2D: {
        angle: () => Math.random() * 80 + 240,
        velocity: "random(300, 600)",
        gravity: 800,
      },
      stagger: 0.015,
    }, 3);




    let image = document.querySelector('.img-left');

    gsap.fromTo(image, {
      scale: 0
    }, {
      scale: 1,
      duration: 1,
      scrollTrigger: {
        trigger: image,
        start: "-110% 70%",
        end: "-30% 40%",
        scrub: 1.5,

      }
    });
  }
}
