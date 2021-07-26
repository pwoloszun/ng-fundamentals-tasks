import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nts-my-toggle',
  templateUrl: './my-toggle.component.html',
  styleUrls: ['./my-toggle.component.css']
})
export class MyToggleComponent implements OnInit {

  // primary (aka essential) state
  isVisible = true;

  // computed (aka derived) state
  // cssClasses = {
  //   'mat-primary': true,
  //   'mat-warn': false
  // };
  // buttonText = 'Toggle Hide';

  get cssClasses() {
    if (this.isVisible) {
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
    // if (this.isVisible) {
    //   this.cssClasses = {
    //     'mat-primary': true,
    //     'mat-warn': false
    //   };
    //   this.buttonText = `Toggle Hide`;
    // } else {
    //   this.cssClasses = {
    //     'mat-primary': false,
    //     'mat-warn': true
    //   };
    //   this.buttonText = `Toggle Show`;
    // }
  }

  ngOnInit() {
  }

}
