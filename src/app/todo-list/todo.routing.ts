import { Routes, RouterModule } from "@angular/router";
import { TodoListComponent } from './todo-list.component';
import { AddtodoComponent } from './addtodo/addtodo.component';

const arr: Routes = [
  
            { path: '', component: TodoListComponent },
            { path: 'addtodo', component: AddtodoComponent }
];
export const routingTodo= RouterModule.forChild(arr);