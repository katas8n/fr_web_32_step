import { Injectable } from '@angular/core';
import { Product } from './classes';
import { IProduct } from './interfaces/IProduct';

@Injectable({
  providedIn: 'root'
})
export class TacoService {
  private tacos:IProduct[] = [
      new Product(
        "New Taco",
        23
      ),
      new Product(
        "Kek Taco",
        13
      ),
      new Product(
        "Bum Taco",
        23.23
      ),
      new Product(
        "Gustaco",
        13.13
      ),
  ]
  
  constructor() { }

  public getTacos():IProduct[] {
    return this.tacos;
  }

  public addTaco(obj:IProduct) {
    this.tacos.push(obj)
  }

  public updateTaco(obj:IProduct,label:string) {
    const searchedtacos = this.tacos.find(el => el.getLabel() === label);

    for(const key in obj) {
      if(searchedtacos[key] !== obj[key]) {
        searchedtacos[key] =  obj[key]
      }
    }
  }

  public removeTaco(label:string) {
    this.tacos = this.tacos.filter(el => el.getLabel() !== label);
  }
}
