import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public login:string = "";
  public password:string = "";
  public users:any[] = [];

  public data = [
    "Crypted data!",
    "Anothere piece of data",
    "Something else"
  ]

  public isVisibleForm = false;

  public listenToTheSecondEvent(data) {
    console.log(data);
  }

  public readTextareaFromChild(event: string) {
    console.log(event);
    console.log("Textarea value from child:", event);
  }

  public onSubmitHandler(e) {
    e.preventDefault();

    this.users.push(this.login)
    this.login = "";
  }

  public onChangeVisibility() {
    this.isVisibleForm = !this.isVisibleForm;
  }

}
