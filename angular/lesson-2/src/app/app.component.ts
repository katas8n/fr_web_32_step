import { Component, Output } from '@angular/core';

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

  public readTextareaFromChild(event: string) {
    console.log(event);
    console.log("Textarea value from child:", event);
  }
}
