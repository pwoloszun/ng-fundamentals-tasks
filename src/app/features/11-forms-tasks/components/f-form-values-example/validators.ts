import { FormGroup, FormControl, ValidatorFn, ValidationErrors, AbstractControl } from '@angular/forms';
import { omit, merge, keys } from 'lodash';

import { Country } from '../../dictionaries/countries.dict';

function includeError(errors = {}, newError: Error) {
  return merge(errors, newError);
}

function excludeError(errors: any, errorKey: string) {
  if (errors) {
    const nextErrors = omit(errors, errorKey);
    if (keys(nextErrors).length > 0) {
      return nextErrors;
    } else {
      return null;
    }
  } else {
    return null;
  }
}

export const nameCountryValidator: ValidatorFn = (group: AbstractControl): ValidationErrors | null => {
  // TODO: get groups: personalInfo & address

  // TODO: get ctrls: fullName& country

  // TODO: read ctrls values

  // TODO implement validation: countryId === 'PL' && !fullName.match(/ski/)
  return null;
};

export const properNameValidator: ValidatorFn = (personalInfoGroup: AbstractControl): ValidationErrors | null => {
  const fullNameCtrl = personalInfoGroup.get('fullName') as FormControl;
  const name = fullNameCtrl.value as string;

  if (!name.match(/^[A-Z]/)) {
    return { invalidName: { startWithCapitalLetter: false } };
  } else {
    return null;
  }
};
