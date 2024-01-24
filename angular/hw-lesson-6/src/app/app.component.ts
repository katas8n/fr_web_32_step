import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public categories = [
    {
      title: "Burgers",
      path: "/burgers"
    },
    {
      title: "Pizza",
      path: "/pizza"
    },
    {
      title: "Tacos",
      path: "/tacos"
    },
  ]

}
