import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductservicesService } from '../productservices.service';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {
  id: number;
  prod: Product = { pro_id: 0, pro_name: '', pro_price: 0, pro_soh: 0 };
  constructor(private _activateRoute: ActivatedRoute,
    private _pdata: ProductservicesService,
    private _route: Router) { }

  ngOnInit() {
    this.id = this._activateRoute.snapshot.params['pro_id'];
    this._pdata.getProductById(this.id).subscribe(
      (data: Product[]) => {
        this.prod = data[0];
      }
    );
  }
  onSaveProduct(pro_id, pro_name, pro_price, pro_soh) {
    console.log(pro_id);
    let prodc = new Product(pro_id, pro_name, pro_price, pro_soh);
    this._pdata.updateProduct(prodc).subscribe(
      (data: any) => {
        if (data.affectedRows === 1) {
          alert("data Successfully Update");
          this._route.navigate(['/product']);
        }
        else {
          alert("Failure");
        }
      }

    );

  }
}
