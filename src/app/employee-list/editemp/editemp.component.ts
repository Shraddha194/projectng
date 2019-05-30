import { Component, OnInit } from '@angular/core';
import { EmpClass } from '../emp-class';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeservicesService } from '../employeeservices.service';

@Component({
  selector: 'app-editemp',
  templateUrl: './editemp.component.html',
  styleUrls: ['./editemp.component.css']
})
export class EditempComponent implements OnInit {
emp_id:number;
emp:EmpClass={ emp_id:0,emp_name:'',emp_salary:0,emp_desg:''};
  constructor(private _activateRoute: ActivatedRoute,
    private _edata: EmployeeservicesService,
    private _route: Router) { }

  ngOnInit() {
    this.emp_id = this._activateRoute.snapshot.params['emp_id'];
    this._edata.getEmployeeById(this.emp_id).subscribe(
      (data: EmpClass[]) => {
        this.emp = data[0];
      }
    );
  }

  onEmpSave(emp_id,emp_name,emp_salary,emp_desg){
    console.log(emp_id);
    let empc = new EmpClass(emp_id, emp_name, emp_salary, emp_desg);
    this._edata.updateEmployee(empc).subscribe(
      (data: any) => {
        if (data.affectedRows === 1) {
          alert("data Successfully Update");
          this._route.navigate(['/employee']);
        }
        else {
          alert("Failure");
        }
      }

    );

  }
}
