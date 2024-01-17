import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(
    public authService:AuthService,

  ) {}

  public handleVisibility() {
    this.authService.handleVisibility()
  }

  public getAuthState():string {
    return this.authService.getAuthState()
  }
}
