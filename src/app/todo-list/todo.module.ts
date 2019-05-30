import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TodoListComponent } from './todo-list.component';
import { AddtodoComponent } from './addtodo/addtodo.component';
import { EdittodoComponent } from './edittodo/edittodo.component';
import { routingTodo } from './todo.routing';

@NgModule({
    declarations: [
        TodoListComponent,
        AddtodoComponent,
        EdittodoComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        routingTodo
    ]
})
export class todoModule { }