import { Component, OnInit } from '@angular/core';
import { TodoClass } from './todo-class';
import { TodoservicesService } from './todoservices.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todoArr:TodoClass[]=[];
  constructor(private _tData:TodoservicesService,
    private _route:Router) { }

  ngOnInit() {
    this._tData.getAllTodo().subscribe(
      (data:TodoClass[])=>{
        this.todoArr=data;
        
      },
      function(err){
        console.log(err);
      },
      function(){
        console.log('Todo Complete');
      }
    );
  }

}
