import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isVisible = true;
  private signButton = this.isVisible ? "Sign In" : "Sign Up";

  constructor() { }

  public getVisibility():boolean {
    return this.isVisible;
  }

  public handleVisibility():void {
    this.isVisible = !this.isVisible;
    this.signButton =  this.isVisible ? "Sign In" : "Sign Up";
  }

  public getAuthState() {
    return this.signButton;
  }
}
