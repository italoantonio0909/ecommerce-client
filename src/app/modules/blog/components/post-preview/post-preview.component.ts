import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../../entities/Blog';

@Component({
  selector: 'app-post-preview',
  templateUrl: './post-preview.component.html',
})
export class PostPreviewComponent implements OnInit {
  @Input() data: Post = {} as Post;

  constructor() { }

  ngOnInit(): void { }
}
