import { Component } from '@angular/core';
import { PizzaService } from '../pizza.service';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrl: './pizza.component.scss'
})
export class PizzaComponent {
  public pizza:any[];
  constructor(
    public pizzaService:PizzaService
  ) {
    this.pizza = this.getPizza();
  }

  getPizza() {
    return this.pizzaService.getPizza();
  }
}
