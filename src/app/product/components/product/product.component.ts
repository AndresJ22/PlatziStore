import { Component, Input, EventEmitter, Output, SimpleChanges } from '@angular/core';
import { Producto } from '../../../core/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() product: Producto; /// input enviar datos para obtenerlo de otro componente

  @Output() productClicked: EventEmitter<any> = new EventEmitter();
  today = new Date(); // optiene la fecha actual
  constructor(){
    console.log('1 .constructor');
  }
  ngOnChanges(changes: SimpleChanges){  // detecta los cambios realizados
       console.log('2 .ngOnChanges');
       console.log(changes);
  }

  ngOnInit() {
    console.log('3. ngOnInit'); // se ejecuta una vez y es cuando el componente ya fue puesto en pantalla
  }
  ngDoCheck() {
    console.log('4.noCheck');// detecta los cambios realizados pero puedes modificarlo a tu manera
  }

  ngOnDestroy(): void {
    console.log('5. NgonDestroy'); // se muestra un mensaje cuando se elimina algo de la interfaz
  }

  addCart() {
      console.log("añadir al carrito");
      this.productClicked.emit(this.product.id); // obtengo datos de aca
  }
}
