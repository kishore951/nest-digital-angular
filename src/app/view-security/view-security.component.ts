import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-security',
  templateUrl: './view-security.component.html',
  styleUrls: ['./view-security.component.css']
})
export class ViewSecurityComponent implements OnInit {

  constructor(private myapi:ApiService) { 
    this.fetchData
  }


  fetchData=()=>{
    this.myapi.viewallemp().subscribe(
      (data)=>{
        this.viewSecurity=data
      }
    )
  }
  
     viewSecurity:any=[]

  ngOnInit(): void {
  }

}
