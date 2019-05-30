import { Routes, RouterModule } from "@angular/router";
import { EmployeeComponent } from './employee.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';

const arr: Routes = [
            { path: '', component: EmployeeComponent },
            { path: 'addemp', component: AddemployeeComponent }
];

export const routingEmployee = RouterModule.forChild(arr);