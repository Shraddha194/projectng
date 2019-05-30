import { Routes, RouterModule } from "@angular/router";
import { StudentListComponent } from './student-list.component';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { EditstudentComponent } from './editstudent/editstudent.component';

const arr: Routes = [
    
            { path: '', component: StudentListComponent },
            { path: 'addstudent', component: AddstudentComponent },
            { path: 'editstudent/:s_id', component: EditstudentComponent }
];
export const routingStudentlist = RouterModule.forChild(arr);