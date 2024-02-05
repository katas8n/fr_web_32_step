import { Injectable } from '@angular/core';

import { IRouterLink } from '../interfaces/RouterLink';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  private routerLinks: IRouterLink[] = [
    {
      label:"Quizzes",
      href:  "/quizzes"
    },
    {
      label:"Resources",
      href:"/resources"
    },
    {
      label:"Profile",
      href:"/profile"
    },
  ]
  constructor() { }


  public getRouterLinks(): IRouterLink[] {
    return this.routerLinks;
  }
}
