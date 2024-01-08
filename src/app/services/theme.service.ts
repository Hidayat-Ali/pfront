// theme.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private isDarkMode: boolean = false;

  constructor() { }

  toggleMode() {
    this.isDarkMode = !this.isDarkMode;
    const theme = this.isDarkMode ? 'light-theme' : 'dark-theme';

    document.documentElement.setAttribute('data-theme', theme);
  }

  isDarkTheme(): boolean {
    return this.isDarkMode;
  }

}

