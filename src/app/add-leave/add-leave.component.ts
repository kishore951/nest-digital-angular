import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-leave',
  templateUrl: './add-leave.component.html',
  styleUrls: ['./add-leave.component.css']
})
export class AddLeaveComponent implements OnInit {

  constructor(private myrouter:Router , private myapi:ApiService) { }

  emp_id=""
  type=""
  discrip=""
  applydate=""
  leavedate=""
  status=""


  addleave=()=>{
  let data={
    "emp_id": this.emp_id,
    "type":this.type,
    "discrip":this.discrip,
    "applydate":this.applydate,
    "leavedate":this.leavedate,
    "status":this.status
  }
  console.log(data)
    this.myapi.addleave(data).subscribe(
      (resp:any)=>{
        if (resp.length>0) {
          alert("SUCCESS")
          console.log(resp)
          localStorage.setItem("emp_id",resp[0].empId)
          console.log(localStorage.getItem("emp_id"))
        } else {
          
        }
      }
    )
  }
  


  ngOnInit(): void {
  }

}
