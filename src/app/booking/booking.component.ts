import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { ServiceService } from '../service.service';
import { Router, ActivatedRoute } from '@angular/router';
import * as $ from "jquery";
@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  data: any = [];
  dtOptions: any = {};
  
  employees: Employee[] = [];
  empdata: any = [];
  employeeData: Employee = new Employee();
  searchkey: any;
  p: number = 1;
  pageSize:number;
  id: any;
  term:any;
  constructor(
    private service: ServiceService,
    private route: Router,
    public actRoute: ActivatedRoute
  ) {}
  
  ngOnInit() {
    this.id=this.actRoute.snapshot.params['id'];
    this.loadEmployees();
             
    

  }

    loadEmployees() {
    return this.service.getEmp().subscribe((data: any) => {
      this.employees = data;
       this.empdata = data;
    
    
    })
    
  }

  key:any;
  reverse:boolean=false;
    sort(key:any){
  this.key=key;
  this.reverse=!this.reverse;
    }
  deleteEmployee(id: any) {
    
    {
    this.service.deleteEmployee(id).subscribe((data)=>
    {
      this.loadEmployees();
    })
    }

  }
  
  search() {
    let tempData = [...this.employees];
    this.empdata = tempData.filter((data: any) => {
      return (data.fname.toLowerCase().includes(this.searchkey.toLowerCase())||data.lname.toLowerCase().includes(this.searchkey.toLowerCase())
      ||data.email.toLowerCase().includes(this.searchkey.toLowerCase())||
      data.password.toLowerCase().includes(this.searchkey.toLowerCase())
      ||data.city.toLowerCase().includes(this.searchkey.toLowerCase())||
      data.country.toLowerCase().includes(this.searchkey.toLowerCase()))
    });
  }


   }


