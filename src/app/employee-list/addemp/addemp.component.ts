import { Component, OnInit } from '@angular/core';
import { EmployeeservicesService } from '../employeeservices.service';

@Component({
  selector: 'app-addemp',
  templateUrl: './addemp.component.html',
  styleUrls: ['./addemp.component.css']
})
export class AddempComponent implements OnInit {

  constructor(private _edata:EmployeeservicesService) { }

  ngOnInit() {
  }
  onEmployeeSave(f){
    let emp = f.form.value;
   // console.log(emp);
    this._edata.addEmployee(emp).subscribe(
      (data: any) => {
        if (data.affectedRows === 1) {
          console.log(data.insertId);
          alert("successfully Product Insert");
        }
        else {
          alert("Something Went Wrong");
        }
      }
    );
  }
}
