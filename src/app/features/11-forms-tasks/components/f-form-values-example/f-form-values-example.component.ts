import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { of } from 'rxjs';

import { countriesDict } from '../../dictionaries/countries.dict';
import { nameCountryValidator, properNameValidator } from './validators';

@Component({
  selector: 'nts-f-form-values-example',
  templateUrl: './f-form-values-example.component.html',
  styleUrls: ['./f-form-values-example.component.css']
})
export class FFormValuesExampleComponent implements OnInit {

  currentTabIndex = 0;
  private tabsCount = 3;

  myForm: FormGroup;

  // dictionaries
  allPositions$ = of([
    { id: 100, title: 'ceo' },
    { id: 200, title: 'cfo' },
    { id: 300, title: 'manager' },
    { id: 400, title: 'engineer' },
  ]);
  allCountries = countriesDict;

  get personalInfoGroup(): FormGroup {
    return this.myForm.get('personalInfoGroup') as FormGroup;
  }

  get hasNextTab(): boolean {
    return this.currentTabIndex < this.tabsCount - 1;
  }

  get hasPrevTab(): boolean {
    return this.currentTabIndex > 0;
  }

  constructor(private fb: FormBuilder) { }

  submitHandler() {
    console.log('submit', this.myForm.value);
  }

  nextTabHandler(): void {
    if (this.hasNextTab) {
      this.currentTabIndex += 1;
    }
  }

  prevTabHandler() {
    if (this.hasPrevTab) {
      this.currentTabIndex -= 1;
    }
  }

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm() {
    // TODO
  }
}
