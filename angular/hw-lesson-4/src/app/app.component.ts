import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  constructor(
    public authService:AuthService
  ) {}

  public getVisibility() {
    return this.authService.getVisibility();
  }

  ngOnInit(): void {}
}
