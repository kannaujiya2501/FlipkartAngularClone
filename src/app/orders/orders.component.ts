import { Component, OnInit } from '@angular/core';
import { OrdersListService } from '../services/orders-list.service';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orderDatalist:any[]=[];
  constructor(private ordersListService:OrdersListService){}
  ngOnInit(): void {
    this.ordersListService.getOrders().subscribe(res=>{
      this.orderDatalist=res;
      
    })
  }
  }


