import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http : HttpClient) { }

  postFeedback(data : any){
    return this.http.post<any>("http://localhost:3000/feedback", data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  getFeedback(){
    return this.http.get<any>("http://localhost:3000/feedback")
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  updateFeedback(data : any, id : number){
    return this.http.put<any>("http://localhost:3000/feedback"+id, data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  deleteFeedback(id : number){
    return this.http.delete<any>("http://localhost:3000/feedback"+id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}
