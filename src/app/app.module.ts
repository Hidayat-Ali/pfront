import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroComponent } from './components/hero/hero.component';
import { HomeComponent } from './components/home/home.component';
import { LatestBlogComponent } from './components/latest-blog/latest-blog.component';
import { SkilssComponent } from './components/skilss/skilss.component';
import { HeaderComponent } from './components/header/header.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { WorkComponent } from './components/work/work.component';
import { HttpClientModule } from '@angular/common/http';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { FormsModule } from '@angular/forms';
import { TruncatePipe } from './pipes/truncate.pipe';




@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    BlogsComponent,
    ContactComponent,
    FooterComponent,
    HeroComponent,
    HomeComponent,
    LatestBlogComponent,
    SkilssComponent,
    HeaderComponent,
    WorkComponent,
    CreatePostComponent,




  ],
  imports: [
    BrowserModule,
    CKEditorModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    TruncatePipe

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
