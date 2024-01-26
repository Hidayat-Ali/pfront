import { Component, ElementRef } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';
import gsap from 'gsap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private themeService: ThemeService, private el: ElementRef) { }
  ngAfterViewInit() {

    gsap.from('.navbar-brand', { x: -1000, duration: 1.5 });
    gsap.from('.vertical-line', { y: -1000, duration: 1.5 });
    gsap.from('.dark-mode', { x: 1000, duration: 1.5 });
    gsap.from('.download-cv', { x: 1000, duration: 1.5 });

    const modal = document.getElementById('exampleModal');


    modal?.addEventListener('shown.bs.modal', () => {

      const listItems = this.el.nativeElement.querySelectorAll('.mobile-view li');
      const themeButton = this.el.nativeElement.querySelector('.download-cv')
      gsap.set(listItems, { opacity: 0, y: 20 });

      gsap.fromTo(listItems, { opacity: 0, y: 20 }, { opacity: 1, y: 0, stagger: 0.2, duration: 0.9 });
      gsap.fromTo(themeButton, { x: -100 }, { x: 0, duration: 1, ease: 'power3.out' });
    });

  }


  isDarkMode: boolean = false;
  toggleMode() {
    this.themeService.toggleMode();
    this.isDarkMode = !this.isDarkMode;



  }
  isDarkTheme(): boolean {
    return this.themeService.isDarkTheme();
  }



}

