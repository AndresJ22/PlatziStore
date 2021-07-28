import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params } from '@angular/router';
import { ProductsService } from '../../../core/services/products/products.service';
import { Producto } from '../../../core/models/product.model';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  producto: Producto;
  constructor(private route: ActivatedRoute,private productsService : ProductsService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) =>{
    //console.log(params);
    const id = params.id;
    this.producto = this.productsService.getProduct(id);

    })
  }

}
