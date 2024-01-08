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
  goToTop() {
    window.scrollTo(0, 0);
  }
  public formatTitleForLink(title: string | undefined): string {
    return title ? title.replace(/\s+/g, '-') : '';
  }
  ngAfterViewInit() {
    // gsap.registerPlugin(ScrollTrigger);
    // gsap.from(this.cardRow.nativeElement, {
    //   opacity: 0,
    //   x: '-100%', // Move from right side
    //   duration: 1,
    //   scrollTrigger: {
    //     trigger: this.cardRow.nativeElement,
    //     start: 'top bottom -100px',
    //     end: 'top center',
    //     toggleActions: 'play none none none',
    //     markers: true,
    //   }
    // });





  }
}
