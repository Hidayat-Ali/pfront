import { Component, ElementRef, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/app/Post';
import { PostsService } from 'src/app/services/posts.service';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'src/app/splitText'
import Swiper from 'swiper';


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
  swiper!: Swiper;
  fishes = [
    {
      name: 'Barracuda',
      subtitle: 'Burn, Burn, Burn',
      description: 'Barracudas are formidable and predatory fish known for their sleek, elongated bodies and sharp teeth. Belonging to the genus Sphyraena, these species are found in tropical and subtropical waters around the world, including the Atlantic, Pacific, and Indian Oceans.',
      imageUrl: 'https://rb.gy/qbysqy'
    },
    // Add more fish objects here
  ];
  ngAfterViewInit() {
    this.swiper = new Swiper(".swiper", {
      direction: "horizontal",
      loop: false,
      speed: 1500,
      slidesPerView: 4,
      spaceBetween: 60,
      mousewheel: true,
      parallax: true,
      centeredSlides: true,
      effect: "coverflow",
      coverflowEffect: {
        rotate: 40,
        slideShadows: true
      },
      autoplay: {
        delay: 2000,
        pauseOnMouseEnter: true
      },
      scrollbar: {
        el: ".swiper-scrollbar"
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 60
        },
        600: {
          slidesPerView: 2,
          spaceBetween: 60
        },
        1000: {
          slidesPerView: 3,
          spaceBetween: 60
        },
        1400: {
          slidesPerView: 4,
          spaceBetween: 60
        },
        2300: {
          slidesPerView: 5,
          spaceBetween: 60
        },
        2900: {
          slidesPerView: 6,
          spaceBetween: 60
        }
      }
    });
  }

  ngOnInit() {

    this.blogPosts$ = this.postService.getPosts();
  }

  public formatTitleForLink(title: string | undefined): string {
    return title ? title.replace(/\s+/g, '-') : '';
  }

}
