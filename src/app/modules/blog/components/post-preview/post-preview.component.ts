import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../../interfaces/blog-interfaces';

@Component({
  selector: 'app-post-preview',
  templateUrl: './post-preview.component.html',
  styleUrls: ['./post-preview.component.css'],
})
export class PostPreviewComponent implements OnInit {
  @Input() data: Post = {} as Post;

  constructor() { }

  ngOnInit(): void { }
}
