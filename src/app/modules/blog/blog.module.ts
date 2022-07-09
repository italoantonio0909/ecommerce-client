import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './components/blog/blog.component';
import { SharedModule } from '../shared/shared.module';
import { PostComponent } from './components/post/post.component';
import { PostPreviewComponent } from './components/post-preview/post-preview.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const components = [BlogComponent, PostPreviewComponent, PostComponent];

@NgModule({
  declarations: [components],
  imports: [CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BlogRoutingModule,
    SharedModule],
  exports: [components],
})
export class BlogModule { }
