import { Routes, RouterModule } from "@angular/router";
import { ProductListComponent } from './product-list.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { AddproductreactiveComponent } from './addproductreactive/addproductreactive.component';
import { EditproductComponent } from './editproduct/editproduct.component';

const arr: Routes = [

            { path: '', component: ProductListComponent },
            { path: 'addproduct', component: AddproductComponent },
            { path: 'addproductreactive', component: AddproductreactiveComponent },
            { path: 'editproduct/:pro_id', component: EditproductComponent }
];
export const routingProductList = RouterModule.forChild(arr);