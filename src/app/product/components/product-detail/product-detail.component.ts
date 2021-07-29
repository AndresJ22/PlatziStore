import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from '../../../core/services/products/products.service';
import { Producto } from '../../../core/models/product.model';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  producto: Producto | any;
  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      //console.log(params);
      const id: string = params.id;
      //this.producto = this.productsService.getProduct(id);
      this.fetchProduct(id);
    });
  }
  fetchProduct(id: string) {
    this.productsService.getProduct(id).subscribe((data) => {
      this.producto = data;
      console.log(data);
    });
  }
  createProducto() {
    const newProducto: Producto = {
      id: '22',
      title: 'nuevo desde angular',
      image: 'assets/banner-1.jpg',
      price: 3000,
      descripcion: 'nuevo producto',
    };
    this.productsService.createProduct(newProducto).subscribe((data) => {
      console.log(data);
    });
  }
  updateProducto() {
    const updateProduct: Partial<Producto> = {
      price: 555555,
      descripcion: 'Edicion titulo',
    };
    this.productsService.updateProduct('2', updateProduct).subscribe((data) => {
      console.log(data);
    });
  }
  deleteProducto() {
    this.productsService.deleteProduct('19').subscribe((data) => {
      console.log(data);
    });
  }
}
