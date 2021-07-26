import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nts-property-binding-example',
  templateUrl: './property-binding-example.component.html',
})
export class PropertyBindingExampleComponent implements OnInit {

  // local component state
  // single source of truth

  bob: any;
  isBtnDisabled: boolean;
  url: string;

  ngOnInit() {
    this.bob = { name: 'Uncle Bob', sex: 'M' };
    this.isBtnDisabled = true;
    this.url = 'http://www.mememaker.net/static/images/memes/4572301.jpg';

    setTimeout(() => {
      this.bob.name = `batman ${Math.random()}`
    }, 2000);
  }
}
