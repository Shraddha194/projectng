import { Component, OnInit } from '@angular/core';
import { Student } from './student';
import { StudentservicesService } from './studentservices.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  studentArr: Student[] = [];
  constructor(private _studData: StudentservicesService,
    private _router:Router) { }

  ngOnInit() {
    this._studData.getAllStudents().subscribe(
      (data: Student[]) => {
        this.studentArr = data;
      },
      function (err) {
        console.log(err);
      },
      function () {
        console.log('call Compelete');
      }
    );
  }
  onDelete(item:Student) {
      this._studData.deleteStudent(item.s_id).subscribe(
        (data:any)=>{
          if(data.affectedRows>0){
            this.studentArr.splice(this.studentArr.indexOf(item),1);
          }
          else{
            alert("something Went Wrong");
          }
        }
      );
  }
  onUpdate(item:Student){
      this._router.navigate(['/student/editstudent',item.s_id]);
  }

}
