import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public greeting = "Hello everyone :D!";
  public posts = [
    {
      id: 1,
      title: "Read a book!",
      description: "You should read a book ..."
    },
    {
      id: 2,
      title: "Write a book!",
      description: "You should write a book ..."
    },
    {
      id: 3,
      title: "Seek a book!",
      description: "You should seek a book ..."
    },
  ];
}
