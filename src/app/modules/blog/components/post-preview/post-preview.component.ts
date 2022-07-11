import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from '../../entities/Blog';

@Component({
  selector: 'app-post-preview',
  templateUrl: './post-preview.component.html',
})
export class PostPreviewComponent implements OnInit {
  constructor(private router: Router) { }

  @Input() data: Post = {} as Post;

  ngOnInit(): void { }
}
