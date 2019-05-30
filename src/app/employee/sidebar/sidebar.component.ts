import { Component, OnInit } from '@angular/core';
import { EmpservicesService } from '../empservices.service';
import { EmployeeModel } from '../employee-model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  emparr:EmployeeModel[]=[];
  constructor(private _dataemp:EmpservicesService) { }

  ngOnInit() {
    this.emparr=this._dataemp.getAllSortEmp();
  }
  onDelSortEmp(item){
    this._dataemp.delSortEmp(item);
  }
}
