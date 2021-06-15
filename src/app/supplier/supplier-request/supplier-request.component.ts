import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-supplier-request',
  templateUrl: './supplier-request.component.html',
  styleUrls: ['./supplier-request.component.scss']
})
export class SupplierRequestComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }

  id!:string;
  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      this.id=params.id;
    })
  }

}
