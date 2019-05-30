import { Component, OnInit } from '@angular/core';
import { EmployeeModel } from './employee-model';
import { EmpservicesService } from './empservices.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  emp_arr:EmployeeModel[]=[];
  constructor(public _data:EmpservicesService) { }

  ngOnInit() {
    this.emp_arr=this._data.getAllEmployee();
  }
  onDelEmp(item){
    this._data.delEmployee(item);
  }
  onSortAddEmp(item){
    this._data.addSortEmp(item);
  }

}
