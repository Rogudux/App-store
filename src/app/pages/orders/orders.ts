import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../core/services/order.service';
import { environment } from '../../../environments/environment';
import { Order } from '../../core/models/order.model';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.html',
  styleUrl: './orders.scss',
  standalone: false

})
export class OrdersComponents implements OnInit{

  constructor (private orderService : OrderService){
  }

  orders : Order[] =[];


  ngOnInit(): void {
    this.orderService.getAllOrders().subscribe(res=>{
      this.orders = res
    })

    
  }

}
