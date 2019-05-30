import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeListComponent } from './employee-list.component';
import { AddempComponent } from './addemp/addemp.component';
import { EditempComponent } from './editemp/editemp.component';
import { routingEmployeelist } from './employeelist.routing';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations:[
        EmployeeListComponent,
        AddempComponent,
        EditempComponent
    ],
    imports:[
        CommonModule,
        FormsModule,
        routingEmployeelist
    ]
})
export class employeelistModule{ }