import { Injectable } from "@angular/core";
import { Product } from "./product";

@Injectable({
  providedIn: "root",
})
export class ProductsService {
  constructor() {}

  getProducts(): Product[] {
    return [
      {
        name: "Webcam",
        price: 100,
      },
      {
        name: "Headphones",
        price: 200,
      },
      {
        name: "Wireless keyboard",
        price: 85,
      },
    ];
  }
}
