import { Component, OnInit } from '@angular/core';
import { ProductservicesService } from '../productservices.service';
import { Product } from '../product';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  constructor(private _pdata: ProductservicesService) { }

  ngOnInit() {
  }
  // onProductSave(pro_id,pro_name,pro_price,pro_soh){
  //     let prod=new Product(pro_id,pro_name,pro_price,pro_soh);
  //     this._pdata.addProduct(prod).subscribe(
  //         (data:any)=>{
  //           if(data.affectedRows===1){
  //             console.log(data.insertId);
  //             alert("successfully Product Insert");
  //           }
  //           else{
  //             alert("Something Went Wrong");
  //           }
  //         }
  //     );
  // }

  onProductSave(f) {
    let prod = f.form.value;
    console.log(prod);
    this._pdata.addProduct(prod).subscribe(
      (data: any) => {
        if (data.affectedRows === 1) {
          console.log(data.insertId);
          alert("successfully Product Insert");
        }
        else {
          alert("Something Went Wrong");
        }
      }
    );
  }

}
