import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  
  logEmp=(data:any)=>{
    return this.http.post("http://localhost:8080/signin",data)
  }


  loginSec=(data:any)=>{
    return this.http.post("http://localhost:8080/signinsecurity",data)
  }

  addemp=(data:any)=>{
    return this.http.post("localhost:8080/addemp",data)
  }

  viewallemp=()=>{
    return this.http.get("https://localhost:8080/viewallemp")
  }
  addleave=(data:any)=>{
    return this.http.post("https://localhost:8080/addleave",data)
  }

  viewallleaves=()=>{
    return this.http.get("https://localhost:8080/viewallleaves")
  }

  addsecurity=(data:any)=>{
    return this.http.post("https://localhost:8080/addsecurity",data)
  }

  viewsecurity=()=>{
    return this.http.get("")
  }
}

