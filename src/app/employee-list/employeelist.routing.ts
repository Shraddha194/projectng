import { Routes, RouterModule } from "@angular/router";
import { EmployeeListComponent } from './employee-list.component';
import { AddempComponent } from './addemp/addemp.component';
import { EditempComponent } from './editemp/editemp.component';

const arr:Routes=[
            {path:'employee',component:EmployeeListComponent},
            {path:'addemployee',component:AddempComponent},
            {path:'editemployee/:emp_id',component:EditempComponent}
    
];
export const routingEmployeelist= RouterModule.forChild(arr);