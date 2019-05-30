import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routingStudentlist } from './studentlist.routing';
import { StudentListComponent } from './student-list.component';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { EditstudentComponent } from './editstudent/editstudent.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        StudentListComponent,
        AddstudentComponent,
        EditstudentComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        routingStudentlist
    ]
})
export class studentlistModule { }