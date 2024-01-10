import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit {
  @Input() posts:any [];

  addNewPost() {
    this.posts.push({
      id: 12,
      title: "Kek",
      description: "Cheburek!"
    })
  }
  
  ngOnInit(): void {
    setTimeout(() => {
      this.posts = this.posts.map((el) => {
        el.title += "!!!"

        return el;
      })
    },2000)
  }
}
