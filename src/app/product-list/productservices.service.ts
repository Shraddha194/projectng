import { Injectable } from '@angular/core';
import { endPoints } from '../../environments/environment';
import { throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Product } from './product';
import { catchError,retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ProductservicesService {
pro_url=endPoints.url+"product/";
commonHeader=new HttpHeaders().set('Content-Type','application/json');
  constructor(private _httpd:HttpClient) { }

  getAllProduct(){
    return this._httpd.get<Product[]>(this.pro_url).pipe(
      retry(3),
      catchError(this.handlerError)
    );
  }
  addProduct(item:Product){
    let body=JSON.stringify(item);
    console.log("form service "+ body);
    return this._httpd.post(this.pro_url,body,{headers:this.commonHeader});
  }
  deleteProduct(pro_id:number){
    return this._httpd.delete(this.pro_url+pro_id,{headers:this.commonHeader});
  }
  getProductById(pro_id: number) {
    return this._httpd.get<Product[]>(this.pro_url + pro_id);
  }
  updateProduct(item: Product) {
    let body = JSON.stringify(item);
    return this._httpd.put(this.pro_url+item.pro_id, body, { headers: this.commonHeader });
  }
  private handlerError(ex:HttpErrorResponse){
    if(ex.error instanceof ErrorEvent){
      console.log('client side error',ex.message);
    }
    else{
      console.log('server side error',ex.message);
    }
    return throwError('something went wrong');
  }

}
