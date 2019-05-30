import { Injectable } from '@angular/core';
import { endPoints } from '../../environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { EmpClass } from './emp-class';

@Injectable({
  providedIn: 'root'
})
export class EmployeeservicesService {
url=endPoints.url+"employee/";
commonHeader=new HttpHeaders().set('Content-Type','application/json');
  constructor(private _http:HttpClient) { }

  getAllEmployee(){
    return this._http.get<EmpClass[]>(this.url);
  }
  addEmployee(item:EmpClass){
    let body=JSON.stringify(item);
    return this._http.post(this.url,body,{headers:this.commonHeader});
  }
  deleteEmployee(emp_id:number){
    return this._http.delete(this.url+emp_id,{headers:this.commonHeader});
  }
  getEmployeeById(emp_id: number) {
    return this._http.get<EmpClass[]>(this.url + emp_id);
  }
  updateEmployee(item: EmpClass) {
    let body = JSON.stringify(item);
    return this._http.put(this.url+item.emp_id, body, { headers: this.commonHeader });
  }
  
}
