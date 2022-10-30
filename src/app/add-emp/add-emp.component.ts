import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css']
})
export class AddEmpComponent implements OnInit {

  constructor(private myRouter:Router,private myApi:ApiService) { }

  e_Name=""
  e_phn=""
  ejoinD=""
  eAdd=""
  eDob=""
  eDesg=""
  email=""
  ePass=""

  addemp = () => {
    let data = {
      "e_Name": this.e_Name,
      "e_phn": this.e_phn,
      "ejoinD": this.ejoinD,
      "eAdd": this.eAdd,
      "eDob": this.eDob,
      "eDesg": this.eDesg,
      "email": this.email,
      "ePass": this.ePass
      

    }
    console.log(data)
    this.myApi.addemp(data).subscribe(
      (resp:any)=>{
        if (resp.length>0) {
          alert("SUCCESS")
          console.log(resp)
          localStorage.setItem("emp_id",resp[0].empId)
          console.log(localStorage.getItem("emp_id"))
          this.myRouter.navigate(["/empdash"])
        } else {
          
        }
      }
    )
  }

  ngOnInit(): void {
  }

}
