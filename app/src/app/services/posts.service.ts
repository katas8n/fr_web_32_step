import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private BASE_URL = "http://localhost:3000/";

  constructor(
    public httpClient:HttpClient
  ) { 

    console.log(Observable)
  }

  public getPosts(): Observable <any[]> {
    return this.httpClient.get<any[]>(this.BASE_URL);
  }

  public addPost(postBody): Observable<any> {
    return this.httpClient.post<any>(this.BASE_URL,postBody);
  }
}
