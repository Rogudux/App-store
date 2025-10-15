import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../models/order.model';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(
        private httpCliente:HttpClient

  ){
  }

  getAllOrders():Observable<Order[]>{
      console.log("trayendo ordenes")
      const result = this.httpCliente.get<Order[]>(`${environment.API_URL}/Order`)
      return result;
    }
  
}
