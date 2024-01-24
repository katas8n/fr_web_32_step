import { Injectable } from '@angular/core';

import { Product } from './classes';
import { IProduct } from './interfaces/IProduct';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {
  private pizza:IProduct[] = [
      new Product(
        "New pizza",
        23
      ),
      new Product(
        "Kek pizza",
        13
      ),
      new Product(
        "Bum pizza",
        23.23
      ),
      new Product(
        "Gugslica",
        13.13
      ),
  ]

  constructor() { }

  public getPizza():IProduct[] {
    return this.pizza;
  }

  public addPizza(obj:IProduct) {
    this.pizza.push(obj)
  }

  public updatePizza(obj:IProduct,label:string) {
    const searchedPizza = this.pizza.find(el => el.getLabel() === label);

    for(const key in obj) {
      if(searchedPizza[key] !== obj[key]) {
        searchedPizza[key] =  obj[key]
      }
    }
  }

  public removePizza(label:string) {
    this.pizza = this.pizza.filter(el => el.getLabel() !== label);
  }
}
