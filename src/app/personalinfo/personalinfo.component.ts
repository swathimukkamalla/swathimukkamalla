import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-personalinfo',
  templateUrl: './personalinfo.component.html',
  styleUrls: ['./personalinfo.component.css']
})
export class PersonalinfoComponent implements OnInit {
  id:any;
  regform: FormGroup;
  
  constructor(private service1:ServiceService,
    private router:Router, public actRoute: ActivatedRoute
    ){ }
  
employeeData:Employee=new Employee();

submit(){}
initializeForm(){
  this.regform= new FormGroup(
    {
      firstName:new FormControl(this.employeeData.firstName),
      email:new FormControl(this.employeeData.email,Validators.required),
      lastName:new FormControl(this.employeeData.lastName),
      mobileNumber:new FormControl(this.employeeData.mobileNumber),
    })
  }
   
    employees:Employee[]=[];
   ngOnInit() {
    this.id = this.actRoute.snapshot.params['id'];
     this.initializeForm();
    this.service1.getEmployee(this.id).subscribe((data:Employee ) => {
      this.employeeData = data;
      this.regform.patchValue(data)
     this.initializeForm();
     
    })
    console.log(this.regform.value)

  } 
   
    onclick(data :any){
      this.service1.createlist(data).subscribe((data :any)=>
      {
        this.router.navigate (['/table'])
      })
    }
    updateData(data:any){
      console.log(data);
      this.service1.updateemp(this.regform.value,this.id).subscribe(()=>{
        this.router.navigate(['/table'])
      })
}
}

