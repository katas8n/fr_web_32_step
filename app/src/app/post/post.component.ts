import { Component, OnInit, OnDestroy } from '@angular/core';
import { PostService } from '../services/posts.service';

import { fromFetch } from 'rxjs/fetch'

import { Subscription, Observable, async, switchMap, of, map } from 'rxjs';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements OnInit {
  public data = [

  ];
  // public sub: Subscription = new Subscription();
  constructor(
    public postService:PostService
  ) {

  }

  public getPosts(){
    // return this.posts;
  }

  // public setPosts(posts: any[]){
  //   // this.posts = posts;
  // }

  ngOnInit(): void {
    const observable = new Observable(subscriber => {
      subscriber.next("/films");
      subscriber.next("/people");
      subscriber.next("/stories");

      subscriber.complete();
    });

    const subscribed = observable.subscribe({
      next(someValue) {
       const data = (async () => {

         const values = await fetch("http://localhost:3000"+someValue);
         const parsedValues = await values.json();

         return parsedValues;

       })();
       console.log(data)
      } 
    })

    subscribed.unsubscribe();

    const data = fromFetch("http://localhost:3000/stories").pipe(
      switchMap((response) => {
          return response.json();
      })
    )

    of("John", "Jim", "Bob").pipe(
      map(person => person + " Doe")
    ).subscribe(person => {
      console.log(person)
    })

    console.log(observable);
    console.log(data);
    // this.sub.add(
    //   this.postService.getPosts().subscribe((postsData) => {
    //     this.setPosts(postsData);
  
  
    //     console.log(postsData)
    //   })
    // );
  }

  ngOnDestroy(): void {
    // this.sub.unsubscribe();
  }
}
