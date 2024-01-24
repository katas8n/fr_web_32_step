import { Injectable } from '@angular/core';

import { Product } from './classes'
import { IProduct } from './interfaces/IProduct';

@Injectable({
  providedIn: 'root'
})
export class BurgersService {
  private burgers:IProduct[] = [
    new Product(
      "GusBugGeg",
      23
    ), 
    new Product(
      "BusBugGeg",
      13
    ),
    new Product(
      "GapgBugGeg",
      13.13
    )
  ]
  constructor() { }

  public getBurgers():IProduct[] {
    return this.burgers;
  }

  public addBurger(obj:IProduct) {
    this.burgers.push(obj)
  }

  public updateBurger(obj:IProduct,label:string) {
    const searchedBurger = this.burgers.find(el => el.getLabel() === label);

    for(const key in obj) {
      if(searchedBurger[key] !== obj[key]) {
        searchedBurger[key] =  obj[key]
      }
    }
  }

  public removeBurger(label:string) {
    this.burgers = this.burgers.filter(el => el.getLabel() !== label);
  }
}
