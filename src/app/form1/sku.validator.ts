import {AbstractControl, ValidationErrors, Validator} from '@angular/forms';

export class SkuValidator {
  static validateSku(c: AbstractControl): ValidationErrors | null {
    if (!c.value.match(/^123/)) {
      return {invalid: true};
    }
    return undefined;
  }
}
