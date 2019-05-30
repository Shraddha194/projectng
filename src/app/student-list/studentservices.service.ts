import { Injectable } from '@angular/core';
import { endPoints } from '../../environments/environment';
import { environment } from 'src/environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { from } from 'rxjs';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentservicesService {
  url = endPoints.url + "student/";
  commonHeader = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private _http: HttpClient) { }
  getAllStudents() {
    return this._http.get<Student[]>(this.url);
  }
  addStudent(item: Student) {
    let body = JSON.stringify(item);
    return this._http.post(this.url, body, { headers: this.commonHeader });
  }
  deleteStudent(s_id: number) {
    return this._http.delete(this.url + s_id, { headers: this.commonHeader });
  }
  getStudentById(s_id: number) {
    return this._http.get<Student[]>(this.url + s_id);
  }
  updateStudent(item: Student) {
    let body = JSON.stringify(item);
    return this._http.put(this.url+item.s_id, body, { headers: this.commonHeader });
  }

}
