import { Component } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';
import gsap from 'gsap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  ngAfterViewInit() {

    gsap.from('.navbar-brand', { x: -1000, duration: 1.5 });
    gsap.from('.vertical-line', { y: -1000, duration: 1.5 });
    gsap.from('.dark-mode', { x: 1000, duration: 1.5 });
    gsap.from('.download-cv', { x: 1000, duration: 1.5 });

  }

  constructor(private themeService: ThemeService) { }
  isDarkMode: boolean = false;
  toggleMode() {
    this.themeService.toggleMode();
    this.isDarkMode = !this.isDarkMode;

  }
  isDarkTheme(): boolean {
    return this.themeService.isDarkTheme();
  }



}

