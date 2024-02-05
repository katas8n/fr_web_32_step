import { Component, OnInit } from '@angular/core';

import { HeaderService } from '../services/header.service';

import { IRouterLink } from '../interfaces/RouterLink';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  public routerLinks:IRouterLink[] = [];

  constructor(
    public headerService:HeaderService
  ) {

  }

  ngOnInit(): void {
    this.routerLinks = this.headerService.getRouterLinks();
  }
}
