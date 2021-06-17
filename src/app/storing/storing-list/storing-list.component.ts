import { Component, OnInit } from '@angular/core';

interface ObjectProduct {
  id?: number;
  category?: string;
  name?: string
}

@Component({
  selector: 'app-storing-list',
  templateUrl: './storing-list.component.html',
  styleUrls: ['./storing-list.component.scss']
})
export class StoringListComponent implements OnInit {

  constructor() { }

  outOfStock:string ='C' ;

  storingProduct: Array<ObjectProduct> = [{
    id: 1,
    category: 'A',
    name: 'Producto-1'
  }, {
    id: 2,
    category: 'A',
    name: 'Producto-2'
  }, {
    id: 3,
    category: 'B',
    name: 'Producto-3'
  }, {
    id: 4,
    category: 'C',
    name: 'Producto-4'
  }];


  ngOnInit(): void {
  }

  getOutOfStock():string{
    return this.outOfStock;
  }
  productTrackerFunction(index: number, product: any) {
    return product.id;
  }
}
