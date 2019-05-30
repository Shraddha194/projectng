import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ProductListComponent } from './product-list.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { AddproductreactiveComponent } from './addproductreactive/addproductreactive.component';
import { EditproductComponent } from './editproduct/editproduct.component';
import { PricedirectiveDirective } from './pricedirective.directive';
import { routingProductList } from './productlist.routing';

@NgModule({
    declarations:[
        ProductListComponent,
        AddproductComponent,
        AddproductreactiveComponent,
        EditproductComponent,
        PricedirectiveDirective
    ],
    imports:[
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        routingProductList
    ]
})
export class ProductListModule{ }