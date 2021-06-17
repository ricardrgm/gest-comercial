import { Component, OnInit } from '@angular/core';


interface ObjectCustomer{
  customer?:string;
  route?:string
}


@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  constructor() { }

  typesOfCustomer: Array<ObjectCustomer> = [{
    customer: "Customer1",
    route: "1"
  },
  {
    customer: "Customer2",
    route: "2"
  },
  {
    customer: "Customer3",
    route: "3"
  }
  ];


  ngOnInit(): void {
  }

}
