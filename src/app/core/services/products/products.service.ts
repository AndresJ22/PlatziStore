import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http:HttpClient) {}

  products: Producto[] = [
    // para ser iterable debe ser netamente array
    {
      id: '1',
      image: 'assets/images/camiseta.png',
      title: 'Camiseta',
      price: 80000,
      descripcion: 'bla bla bla bla bla ',
    },
    {
      id: '2',
      image: 'assets/images/hoodie.png',
      title: 'Hoddie',
      price: 80000,
      descripcion: 'bla bla bla bla bla',
    },
    {
      id: '3',
      image: 'assets/images/mug.png',
      title: 'Mug',
      price: 80000,
      descripcion: 'bla bla bla bla bla',
    },
    {
      id: '4',
      image: 'assets/images/pin.png',
      title: 'Pin',
      price: 80000,
      descripcion: 'bla bla bla bla bla',
    },
    {
      id: '5',
      image: 'assets/images/stickers1.png',
      title: 'Stickers',
      price: 80000,
      descripcion: 'bla bla bla bla bla',
    },
    {
      id: '6',
      image: 'assets/images/stickers2.png',
      title: 'Stickers',
      price: 80000,
      descripcion: 'bla bla bla bla bla',
    },
  ];
  getAllProducts() {
    return this.products;
  }

  getProduct(id: string) {
    //return this.products.find(item => id === item.id);  // find metodo array js
    return this.products.find((item) => id === item.id);
  }
}
