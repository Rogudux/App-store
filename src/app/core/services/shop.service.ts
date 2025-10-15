import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Store } from '../models/store.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor(
        private httpCliente:HttpClient

  ){
  }

  getAllStores():Observable<Store[]>{
    console.log("trayendo tiendas")
    const result = this.httpCliente.get<Store[]>(`${environment.API_URL}/Store`)
    return result;
  }
  
}
