import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentservicesService } from '../studentservices.service';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {

  constructor(private _studData:StudentservicesService) { }

  ngOnInit() {
  }
  onSave(s_id,s_name,s_city,s_attendance){
    let stud=new Student(s_id,s_name,s_city,s_attendance);
    this._studData.addStudent(stud).subscribe(
      (data:any)=>{
        if(data.affectedRows==1){
          console.log(data.insertId);
          alert("Successfully Added One Record");
        }
        else{
          alert("Something Went Wrong");
        }
      }
    );
  }
}
