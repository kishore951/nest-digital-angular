import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private myrouter: Router, private myapi: ApiService) { }


  adminusername = ""
  adminpass = ""
  adminLogin = () => {
    if (this.adminusername == "admin" && this.adminpass == "admin") {
      alert("SUCCESSFUL")
      this.myrouter.navigate(["/addemp"])

    } else {
      alert("INVALID")

    }

  }

  email = ""
  ePass = ""
  empLogin = () => {
    let data = {
      "email": this.email,
      "ePass": this.ePass

    }
    console.log(data)
    this.myapi.logEmp(data).subscribe(
      (resp:any)=>{
        if (resp.length>0) {
          alert("SUCCESS")
          console.log(resp)
          localStorage.setItem("emp_id",resp[0].empId)
          console.log(localStorage.getItem("emp_id"))
          this.myrouter.navigate(["/emppage"])
        } else {
          
        }
      }
    )
  }

  user_name= ""
  pass = ""
  secLogin = () => {
    let data = {
      "userName": this.user_name,
      "pass": this.pass

    }
    console.log(data)
    this.myapi.loginSec(data).subscribe(
      (resp:any)=>{
        if (resp.length>0) {
          alert("SUCCESS")
          console.log(resp)
          localStorage.setItem("s_code",resp[0].sCode)
          console.log(localStorage.getItem("s_code"))
          this.myrouter.navigate(["/securitypage"])
        } else {
          
        }
      }
    )
  }
  

  ngOnInit(): void {
  }

}
