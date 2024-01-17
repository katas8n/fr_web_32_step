import { Component, OnInit} from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent implements OnInit {
  private posts;

  constructor(
    private postsService:PostsService
  ){}

  getPosts() {
    return this.posts;
  }

  ngOnInit(): void {
    this.posts = this.postsService.getPosts();
  }
}
