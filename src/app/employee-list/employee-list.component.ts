import { Component, OnInit } from '@angular/core';
import { EmpClass } from './emp-class';
import { EmployeeservicesService } from './employeeservices.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
empArr:EmpClass[]=[];
  constructor(private _empData:EmployeeservicesService,
    private _route:Router) { }

  ngOnInit() {
    this._empData.getAllEmployee().subscribe(
      (data:EmpClass[])=>{
        this.empArr=data;
        
      },
      function(err){
        console.log(err);
      },
      function(){
        console.log('Employee Complete');
      }
    );
  }
  onDelete(item:EmpClass){
    this._empData.deleteEmployee(item.emp_id).subscribe(
        (data:any)=>{
          if(data.affectedRows>0){
            this.empArr.splice(this.empArr.indexOf(item),1);
          }
          else{
            alert("failure");
          }
        }
    );
  }
  onUpdate(item:EmpClass){
    this._route.navigate(['/editemployee',item.emp_id]);
  }

}
