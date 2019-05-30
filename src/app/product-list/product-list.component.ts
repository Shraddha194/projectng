import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { ProductservicesService } from './productservices.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
productArr:Product[]=[];
  constructor(private _prodata:ProductservicesService,
    private _router:Router) { }

  ngOnInit() {
    this._prodata.getAllProduct().subscribe(
      (data:Product[])=>{
        this.productArr=data;
        
      },
      function(err){
        console.log(err);
      },
      function(){
        console.log('Product Complete');
      }
    );
  }
  onDelete(item:Product){
    this._prodata.deleteProduct(item.pro_id).subscribe(
        (data:any)=>{
          if(data.affectedRows>0){
            this.productArr.splice(this.productArr.indexOf(item),1);
          }
          else{
            alert("failure");
          }
        }
    );
  }
  onUpdate(item:Product){
    this._router.navigate(['/product/editproduct',item.pro_id]);
  }

}
