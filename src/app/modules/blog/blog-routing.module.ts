import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './components/blog/blog.component';
import { PostComponent } from './components/post/post.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: BlogComponent,
      },
      {
        path: 'detail',
        component: PostComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogRoutingModule { }
