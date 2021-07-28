import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
})
export class DemoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  title = 'platziiStore';
  items = ['nicolas', 'julian', 'luis', 'joel'];
  objeto = {};
  power = 10;

  addItem() {
    this.items.push('nuevo item'); // metodo push es muy usado sirve para agregar elementos a un array
  }
  deleteItem(key: number) {
    // key es la llave primaria o indice de un array
    this.items.splice(key, 1); // la llave y cuantos elementos se va eliminar
  }
}
