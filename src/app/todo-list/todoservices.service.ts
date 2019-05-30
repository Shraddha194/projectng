import { Injectable } from '@angular/core';
import { endPoints } from 'src/environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { TodoClass } from './todo-class';

@Injectable({
  providedIn: 'root'
})
export class TodoservicesService {
  url=endPoints.url+"todo/";
  commonHeader=new HttpHeaders().set('Content-Type','application/json');
  constructor(private _httpd:HttpClient) { }
  getAllTodo(){
    return this._httpd.get<TodoClass[]>(this.url);
  }
  addTodo(item:TodoClass){
    let body=JSON.stringify(item);
    return this._httpd.post(this.url,body,{headers:this.commonHeader});
  }
  deleteTodo(id:number){
    return this._httpd.delete(this.url+id,{headers:this.commonHeader});
  }
  getTodoById(id: number) {
    return this._httpd.get<TodoClass[]>(this.url + id);
  }
  updateTodo(item: TodoClass) {
    let body = JSON.stringify(item);
    return this._httpd.put(this.url+item.id, body, { headers: this.commonHeader });
  }
}
