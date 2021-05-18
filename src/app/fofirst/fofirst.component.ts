import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Employee } from '../employee';
import { ServiceService } from '../service.service';
import { Router, ActivatedRoute } from '@angular/router';
// import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-fofirst',
  templateUrl: './fofirst.component.html',
  styleUrls: ['./fofirst.component.css']
})
export class FofirstComponent implements OnInit {
  id:any;
  regform: FormGroup;
  

  employees: Employee[] = [];
  empdata: any = [];
 
  searchkey: any;
  p: number = 1;
  pageSize:number;
  employeeData1:any=[];
  term:any;
  
  
  constructor(private service1:ServiceService,
    private router:Router, public actRoute: ActivatedRoute
    ){ }
  
employeeData:Employee=new Employee();
activeTab = 'search';
  activeTab1='result'
  search(activeTab:any){
    this.activeTab=activeTab
      if(this.employeeData.firstName==this.employeeData.valid){
        this.activeTab=activeTab
      }
    console.log(this.employeeData.firstName);
    console.log(this.employeeData.firstName===this.employeeData.valid);
    
    
 

  }
  
  
  tab='result'
  search1(data:any){
  this.activeTab=data
  console.log(this.regform.value);
  
  }
  confirm(activeTab:any){
  this.activeTab=activeTab
  }
  result(activeTab:any){
    this.activeTab = activeTab;
  }
  previous(Data:any){
    this.activeTab=Data
  }
submit(){}

initializeForm(){
  this.regform= new FormGroup(
    {
      firstName:new FormControl(this.employeeData.firstName,Validators.required),
      email:new FormControl(this.employeeData.email,Validators.required),
      lastName:new FormControl(this.employeeData.lastName),
      mobileNumber:new FormControl(this.employeeData.mobileNumber),
      
      daily:new FormControl(this.employeeData.daily,Validators.required),
      date:new FormControl(this.employeeData.date,Validators.required),
      time:new FormControl(this.employeeData.time,Validators.required),
      // booking:new FormGroup({
      //   daily:new FormControl(this.employeeData.daily,Validators.required),
      //   date:new FormControl(this.employeeData.date,Validators.required),
      //   time:new FormControl(this.employeeData.time,Validators.required),
      // })
    })
    console.log("jndhjdj");
    
    console.log(this.employeeData.firstName);
    
  }

  
  
   ngOnInit() {
     
    this.id = this.actRoute.snapshot.params['id'];
     this.initializeForm();
    this.service1.getEmployee(this.id).subscribe((data:Employee ) => {
      this.employeeData = data;
      this.regform.patchValue(data)
     this.initializeForm();
   
    })
    
    

  } 
   onclick(data :any){
    //  window.confirm("Are you Sure You Want To Submit The Form.Please Re-Check Once")
      this.service1.createlist(data).subscribe((data :any)=>
      { 
         this.router.navigate (['/conform/table'])  
      })
    }
    updateData(data:any){
      console.log(data);
      this.service1.updateemp(this.regform.value,this.id).subscribe(()=>{
        this.router.navigate(['/conform/table'])
      })
}

  
}
