import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrl: './common.component.scss'
})
export class CommonComponent {
  public kek:any;
  constructor(
    public http:HttpClient
  ) {
    http.get("https://swapi.dev/api/people").subscribe(data => {
      console.log(data)
      this.kek = data;
      this.kek = this.kek.results;


    })
  }
}
