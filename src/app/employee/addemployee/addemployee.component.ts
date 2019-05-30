import { Component, OnInit } from '@angular/core';
import { EmpservicesService } from '../empservices.service';
import { EmployeeModel } from '../employee-model';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {

  constructor(private _empdata:EmpservicesService) { }

  ngOnInit() {
  }
  onAddEmp(emp_id,emp_name,emp_salary,emp_desg){
    this._empdata.addEmployee(new EmployeeModel(emp_id,emp_name,emp_salary,emp_desg));
  }
}
