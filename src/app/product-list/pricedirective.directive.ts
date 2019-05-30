import { Directive } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[appPricedirective]',
  providers:[
    {
      provide:NG_VALIDATORS,
      useClass:PricedirectiveDirective,
      multi:true
    }
  ]
})
export class PricedirectiveDirective implements Validator{

  constructor() { }
  validate(control: AbstractControl): {[key:string]: boolean} | null{
      return control.value <=0 ? { 'pricelessthanzero':true}: null;
  }
}
