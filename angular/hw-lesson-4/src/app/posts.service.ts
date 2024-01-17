import { Injectable } from '@angular/core';
import { IPost } from './interfaces'

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private posts:IPost[] = [
    {
      id: 0,
      title: "About bad written text.(c) Mihail",
      description: "There is Mihail and seems he doesn't like a text which..."
    },
    {
      id: 1,
      title: "Genadiy asks Misha(c) Genadiy",
      description: "Why did you decide that something went wrong? Why did you 'chvakesh','myakaesh' , you didn't see a result!"
    },
    {
      id: 2,
      title: "Jewesh man propose a cup of coffee(c) Igor",
      description: "Let's drink coffee! Come on? Are we going to drink a coffee?"
    },
  ];

  constructor() { }

  public getPosts():IPost[] {
    return this.posts;
  }

  public addPost(newPost):void {
   this.posts.push(newPost);
  }
}
