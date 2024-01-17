import { Component, Input, OnInit } from '@angular/core';
import { IPost } from '../interfaces';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements OnInit {
  @Input() post:IPost;

  ngOnInit(): void {
    console.log(this.post);
  }

  getData(post) {
    console.log(post)
  }
}
