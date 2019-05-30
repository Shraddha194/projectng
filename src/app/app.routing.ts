import { Routes, RouterModule } from '@angular/router';

const arr:Routes=[
    {path:'emp',loadChildren:'./employee/employee.module#employeeModule'},
    {path:'',loadChildren:'./employee-list/employeelist.module#employeelistModule'},
    {path:'student',loadChildren:'./student-list/studentlist.module#studentlistModule'},
    {path:'product',loadChildren:'./product-list/productlist.module#ProductListModule'},
    {path:'todo',loadChildren:'./todo-list/todo.module#todoModule'}
    
   
];
export const routingArr = RouterModule.forRoot(arr);