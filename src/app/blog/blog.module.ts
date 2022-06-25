import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog/blog.component';
import { SharedModule } from '../shared/shared.module';
import { PostPreviewComponent } from './post-preview/post-preview.component';
import { PostComponent } from './post/post.component';

const components = [BlogComponent, PostPreviewComponent, PostComponent];

@NgModule({
  declarations: [components],
  imports: [CommonModule, BlogRoutingModule, SharedModule],
  exports: [components],
})
export class BlogModule {}
