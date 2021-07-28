import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/core/models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  items = ['nicolas','julian','luis','joel'];
  constructor() { }

  ngOnInit(): void {
  }
  products:Producto[]=[ // para ser iterable debe ser netamente array
    {
      id: '1',
      image: 'assets/images/camiseta.png',
      title: 'Camiseta',
      price: 80000,
      descripcion: 'bla bla bla bla bla '
    },
    {
      id: '2',
      image: 'assets/images/hoodie.png',
      title: 'Hoddie',
      price: 80000,
      descripcion: 'bla bla bla bla bla'
    },
    {
      id: '3',
      image: 'assets/images/mug.png',
      title: 'Mug',
      price: 80000,
      descripcion:'bla bla bla bla bla'
    },
    {
      id: '4',
      image: 'assets/images/pin.png',
      title: 'Pin',
      price: 80000,
      descripcion:'bla bla bla bla bla'
    },
    {
      id: '5',
      image: 'assets/images/stickers1.png',
      title: 'Stickers',
      price: 80000,
      descripcion:'bla bla bla bla bla'
    },
    {
      id: '6',
      image: 'assets/images/stickers2.png',
      title: 'Stickers',
      price: 80000,
      descripcion:'bla bla bla bla bla'
    }
  ]

  clickProduct (id:number){
      console.log('product');
      console.log(id)
  }
}
