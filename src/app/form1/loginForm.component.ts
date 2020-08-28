import {Component} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {SkuValidator} from './sku.validator';
import {ValidationErrors} from '@angular/forms/src/directives/validators';

@Component({
  selector: 'app-login-form',
  templateUrl: 'loginForm.component.html'
})
export class LoginFormComponent {
  static skuValidator(skuControl: AbstractControl): ValidationErrors | null {
    if (!skuControl.value.match(/^123/)) {
      return {invalid: true};
    }
    return null;
  }
  // tslint:disable-next-line:member-ordering
  myForm: FormGroup;
  constructor(builder: FormBuilder) {
    this.myForm = builder.group({
      'uname': ['', Validators.compose([Validators.required, SkuValidator.validateSku])],
      'pwd': ['', Validators.required]
    });
    this.myForm.controls['uname'].valueChanges.subscribe(val => console.log(`Uname value: ${val}`));
  }
  onFormSubmit(form: any) {
    console.log(form.valid);
  }
}
