import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentservicesService } from '../studentservices.service';

@Component({
  selector: 'app-editstudent',
  templateUrl: './editstudent.component.html',
  styleUrls: ['./editstudent.component.css']
})
export class EditstudentComponent implements OnInit {
  id: number;
  stud: Student = { s_id: 0, s_name: '', s_city: '', s_attendance: '' };
  constructor(private _activateRoute: ActivatedRoute,
    private _studData: StudentservicesService,
    private _route: Router) { }

  ngOnInit() {
    this.id = this._activateRoute.snapshot.params['s_id'];
    this._studData.getStudentById(this.id).subscribe(
      (data: Student[]) => {
        this.stud = data[0];
      }
    );
  }
  onStudentSave(s_id, s_name, s_city, s_attendance) {
    console.log(s_id);
    let student = new Student(s_id, s_name, s_city, s_attendance);
    this._studData.updateStudent(student).subscribe(
      (data: any) => {
        if (data.affectedRows === 1) {
          alert("data Successfully Update");
          this._route.navigate(['/student']);
        }
        else {
          alert("Failure");
        } 
      }

    );
  }

}
