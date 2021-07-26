import { Component, OnInit } from '@angular/core';

const selectCssClasses = (isVisible: boolean) => {
  if (isVisible) {
    return {
      'mat-primary': true,
      'mat-warn': false
    };
  } else {
    return {
      'mat-primary': false,
      'mat-warn': true
    };
  }
};

@Component({
  selector: 'nts-my-toggle',
  templateUrl: './my-toggle.component.html',
  styleUrls: ['./my-toggle.component.css']
})
export class MyToggleComponent implements OnInit {

  // primary (aka essential) state
  firstName = 'bob2222333333';
  lastName = 'smith';
  suffix = 'jr.'
  withSufix = true;

  get fullName() {
    return `${this.firstName} ${this.lastName} ${this.suffix}`;
  }

  isVisible = true;

  // computed (aka derived) state
  get cssClasses() {
    return selectCssClasses(this.isVisible);
  }

  get buttonText() {
    if (this.isVisible) {
      return `Toggle Hide`;
    } else {
      return `Toggle Show`;
    }
  }

  toggleHandler() {
    this.isVisible = !this.isVisible;
  }

  ngOnInit() {
  }

}
