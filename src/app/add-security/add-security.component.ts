import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-security',
  templateUrl: './add-security.component.html',
  styleUrls: ['./add-security.component.css']
})
export class AddSecurityComponent implements OnInit {

  constructor( private myrouter:Router ,private myapi:ApiService) { }

  sCode=""
   sName=""
   sPhn=""
   sAddress=""
   sDate=""
   userName=""
   pass=""

   addsecurity=()=>{
    let data ={
      "sCode":this.sCode,
      "sName":this.sName,
      "sPhn":this.sPhn,
      "Address":this.sAddress,
      "sDate":this.sDate,
      "username":this.userName,
      "password":this.pass
    }

    console.log(data)
    this.myapi.addleave(data).subscribe(
      (resp:any)=>{
        if (resp.length>0) {
          alert("SUCCESS")
          console.log(resp)
          localStorage.setItem("id",resp[0].id)
          console.log(localStorage.getItem("id"))
          this.myrouter.navigate(["/empdash"])
        } else {
          
        }
      }
    )
  }

  ngOnInit(): void {
  }

}
