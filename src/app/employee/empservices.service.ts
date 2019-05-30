import { Injectable } from '@angular/core';
import { EmployeeModel } from './employee-model';

@Injectable({
  providedIn: 'root'
})
export class EmpservicesService {
emparr:EmployeeModel[]=[
  new EmployeeModel(1,'shur',15000,'trainee'),
  new EmployeeModel(2,'bitu',20000,'employee')
];
empsortarr:EmployeeModel[]=[];
  constructor() { }

  getAllEmployee():EmployeeModel[]{
    return this.emparr;
  }
  addEmployee(item:EmployeeModel){
    this.emparr.push(item);
  }
  delEmployee(item:EmployeeModel){
    this.emparr.splice(this.emparr.indexOf(item),1);
  }
  getAllSortEmp():EmployeeModel[]{
    return this.empsortarr;
  }
  addSortEmp(item:EmployeeModel){
    if(this.empsortarr.indexOf(item)!=-1){
      alert("Already Present!");
    }
    else{
      this.empsortarr.push(item);
    }
  }
  delSortEmp(item:EmployeeModel){
    this.empsortarr.splice(this.empsortarr.indexOf(item),1);
  }
}
