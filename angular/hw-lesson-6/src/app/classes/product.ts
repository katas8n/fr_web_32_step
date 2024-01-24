import { IProduct } from '../interfaces/IProduct'

export class Product implements IProduct {
    constructor(private label:string, private price:number) {
        this.label = label;
        this.price = price;
    };

    getLabel() {
        return this.label;
    };

    getPrice() {
        return this.price;
    };
}

