import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public data = [
    "Crypted data!",
    "Anothere piece of data",
    "Something else"
  ]
}
