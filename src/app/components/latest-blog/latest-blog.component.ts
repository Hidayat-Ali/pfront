import { Component, ElementRef, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/app/Post';
import { PostsService } from 'src/app/services/posts.service';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'src/app/splitText'


@Component({
  selector: 'app-latest-blog',
  templateUrl: './latest-blog.component.html',
  styleUrls: ['./latest-blog.component.css'],

})
export class LatestBlogComponent {
  constructor(private postService: PostsService) { }
  @ViewChild('cardRow') cardRow!: ElementRef;
  splitTextBlogTitle!: SplitText
  backgorundImageUrl: string = "https://images.pexels.com/photos/13952899/pexels-photo-13952899.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
  blogPosts$: Observable<Post[]> | undefined;
  ngOnInit() {

    this.blogPosts$ = this.postService.getPosts();

  }
  ngAfterViewInit() {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(this.cardRow.nativeElement, {
      opacity: 0,
      x: '-100%', // Move from right side
      duration: 1,
      scrollTrigger: {
        trigger: this.cardRow.nativeElement,
        start: 'top bottom -100px',
        end: 'top center',
        toggleActions: 'play none none none',
        markers: true,
      }
    });


    //   this.splitTextBlogTitle = new SplitText(this.el.nativeElement.querySelector('card-title'));
    //   const tl = gsap.timeline({ repeat: 30 });

    //   gsap.set("card-title", { opacity: 1 });

    //   tl.from(this.splitTextBlogTitle.chars, {
    //     duration: 1,
    //     y: 100,
    //     rotation: 90,
    //     opacity: 0,
    //     ease: "elastic",
    //     stagger: 0.03,
    //   });

    //   // Exploding text...
    //   tl.to(this.splitTextBlogTitle.chars, {
    //     duration: 2.5,
    //     opacity: 0,
    //     rotation: "random(-2000, 2000)",
    //     physics2D: {
    //       angle: () => Math.random() * 80 + 240,
    //       velocity: "random(300, 600)",
    //       gravity: 800,
    //     },
    //     stagger: 0.015,
    //   }, 3);

  }
}
