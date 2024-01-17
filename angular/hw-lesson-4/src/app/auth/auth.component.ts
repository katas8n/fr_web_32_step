import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {
  constructor(
    public authService:AuthService,
    public postService:PostsService
  ) {}

  public getAuthState():string {
    return this.authService.getAuthState()
  }

  public signUp(form) {
    console.log(form.value);

    this.postService.addPost({
      id: 23,
      title: form.value.login,
      description: form.value.password
    })
  }


}
