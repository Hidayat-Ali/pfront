import { Component, HostListener } from '@angular/core';
import { gsap } from 'gsap';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';

  private posX = 0;
  private posY = 0;
  private mouseX = 0;
  private mouseY = 0;

  ngOnInit() {
    this.animateCursor();
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.mouseX = event.pageX;
    this.mouseY = event.pageY;
  }

  private animateCursor() {
    gsap.to({}, 0.02, {
      repeat: -1,
      onRepeat: () => {
        this.posX += (this.mouseX - this.posX) / 9;
        this.posY += (this.mouseY - this.posY) / 9;

        gsap.set('.cursor-follower', {
          css: {
            left: this.posX - 20,
            top: this.posY - 20
          }
        });

        gsap.set('.cursor', {
          css: {
            left: this.mouseX,
            top: this.mouseY
          }
        });
      }
    });
  }
}
