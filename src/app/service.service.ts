import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  constructor(private http:HttpClient){}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  
  url = "http://localhost:3000";
  getEmp(): Observable<Employee> {
    return this.http.get<Employee>(this.url +'/employees')
    
    
  }
  
  
  getEmployee(id:any): Observable<Employee> {
    console.log(id);
    
  return this.http.get<Employee>(this.url + '/employees/' + id)
  
  } 
  
  createlist(employees: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.url +'/employees/', 
    JSON.stringify(employees),
     this.httpOptions)
     
  }
  
  updateemp( employee:Employee,id:number): Observable<Employee> {
  return this.http.put<Employee>(this.url + '/employees/' + id,
   JSON.stringify(employee), this.httpOptions)
   
  }
  
  
  deleteEmployee(id:Employee){
  return this.http.delete<Employee>(this.url + '/employees/' 
  + id, this.httpOptions)
  
  }
}