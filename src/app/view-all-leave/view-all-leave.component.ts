import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-all-leave',
  templateUrl: './view-all-leave.component.html',
  styleUrls: ['./view-all-leave.component.css']
})
export class ViewAllLeaveComponent implements OnInit {

  constructor(private myapi0:ApiService) {
    this.fetchData()
   }


  fetchData=()=>{
    this.myapi0.viewallemp().subscribe(
      (data)=>{
        this.viewLeave=data
      }
    )
  }
  
     viewLeave:any=[]

  ngOnInit(): void {
  }

}
