import { Component } from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
@Component({
  selector: 'app-skilss',
  templateUrl: './skilss.component.html',
  styleUrls: ['./skilss.component.css']
})
export class SkilssComponent {

  ngAfterViewInit() {
    gsap.registerPlugin(ScrollTrigger);
    let skill = document.querySelector('.all-skill-icons');
    gsap.fromTo(skill, {
      xPercent: -100,
      autoAlpha: 0,

    }, {
      xPercent: 0,
      autoAlpha: 1,
      duration: 1,
      scrollTrigger: {
        trigger: skill,
        start: 'top 95%',
        end: 'bottom 103%',
        scrub: 3.5,

      },
    });

  }
}
