import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';
import { routingEmployee } from './employee.routing';

@NgModule({
    declarations: [
        EmployeeComponent,
        AddemployeeComponent,
        SidebarComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        routingEmployee
    ]
})
export class employeeModule { }