import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdersListService {

  constructor( private _http:HttpClient) { 

  }
  getOrders(){

     return this._http.get<any>("http://localhost:3000/orders")
    
     .pipe(map((res)=>{
    
      return res;
    
     }))
    
    
    
    
    }
}
