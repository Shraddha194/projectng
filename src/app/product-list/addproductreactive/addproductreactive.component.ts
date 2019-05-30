import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { ProductservicesService } from '../productservices.service';
import { Key } from 'protractor';

@Component({
  selector: 'app-addproductreactive',
  templateUrl: './addproductreactive.component.html',
  styleUrls: ['./addproductreactive.component.css']
})
export class AddproductreactiveComponent implements OnInit {
productform:FormGroup;
  constructor(private _prodata:ProductservicesService) { }

  myValidation(control:AbstractControl):{[Key:string]:boolean}|null{
    if(control.value=="shur"){
      return{'invalidProductName':true};
    }
    return null;
  }
  ngOnInit() {
    this.productform=new FormGroup({
        pro_id: new FormControl(null,[Validators.required]),
        pro_name:new FormControl(null,[this.myValidation.bind(this)]),
        pro_price:new FormControl('0',[Validators.required,Validators.max(3)]),
        pro_soh:new FormControl(null,[Validators.required,Validators.max(5)])
    });
  }
  onProductAdd(){

    let pro=this.productform.value;
    this._prodata.addProduct(pro).subscribe(
      (data:any)=>{
        if(data.affectedRows==1){
          console.log(data.insertId);
          alert('Successfully added one record');
        }
        else{
          alert('something went wrong');
        }
      }
    );
  }

}
