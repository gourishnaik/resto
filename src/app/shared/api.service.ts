import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map}  from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http:HttpClient) { }

  //now get post put and delete method will be used 

  // create resturent using post method

  postResturent(data:any){
    return this._http.post<any>("http://localhost:3000/posts",data).pipe(map((res:any)=>{
    return res;
    }))
  }


// get resturent using get  method


getResturent(){
  return this._http.get<any>('http://localhost:3000/posts').pipe(map((res:any)=>{
    return res;
    })) 
}


// update using PUT method

updateResturent(data:any, id:number){
  return this._http.put<any>("http://localhost:3000/posts/"+id,data).pipe(map((res:any)=>{
    return res;
  })) 
}

// delete resturent using delete method

deleteResturent(id:number){
  return this._http.delete<any>("http://localhost:3000/posts/"+id).pipe(map((res:any)=>{
    return res;
  })) 
}


}
