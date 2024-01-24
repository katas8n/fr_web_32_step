import { Component } from '@angular/core';
import { BurgersService } from '../burgers.service';

@Component({
  selector: 'app-burgers',
  templateUrl: './burgers.component.html',
  styleUrl: './burgers.component.scss'
})
export class BurgersComponent {
  public burgers:any[];
  constructor(
    public burgersService:BurgersService
  ) {
    this.burgers = this.getAllBurgers();
  }

  getAllBurgers() {
    return this.burgersService.getBurgers();
  }
}
