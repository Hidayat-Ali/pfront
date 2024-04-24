import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { ContactComponent } from './components/contact/contact.component';
import { WorkComponent } from './components/work/work.component';
import { CreatePostComponent } from './components/create-post/create-post.component';

const routes: Routes = [
  { component: HomeComponent, path: '', },
  { component: BlogsComponent, path: 'blog/:title' },
  { component: ContactComponent, path: 'contact' },
  { component: WorkComponent, path: 'all_work' },
  { component: CreatePostComponent, path: 'create-post' },
  { path: '**', redirectTo: '' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
