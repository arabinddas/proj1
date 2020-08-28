import {Component, OnInit} from '@angular/core';
import {FormControl, NgForm, Validators} from '@angular/forms';

@Component({
  selector: 'app-sku-form',
  templateUrl: 'skuForm.component.html'
})
export class SkuFormComponent {
  errMsgs: string[] = [];

  handleSkuFormSubmission(form: NgForm) {
    if (form.valid) {
      console.log('Valid');
    } else {
      this.errMsgs = [];
      // console.log(Object.keys(form.controls));
      // tslint:disable-next-line:forin
      for (const ctrl in form.controls) {
        const ac = form.controls[ctrl];
        // tslint:disable-next-line:forin
        for (const e in ac.errors) {
          switch (e) {
            case 'required':
              this.errMsgs.push(`control ${ctrl} is required`);
              break;
            case 'minlength':
              this.errMsgs.push(`minlength for ${ctrl}`);
              break;
          }
        }
        // console.log(`${ac.errors['required']}`);
        // console.log(`${Object.keys(ac.errors)}`);
      }
    }
  }

  resetTheForm(form: NgForm) {
    form.resetForm();
    this.errMsgs = [];
  }
}
