import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nts-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {

  person = {
    name: `bobek ${Math.random()}`,
    age: 123
  };

  ngOnInit() {
    // this.name = 'qq';
  }

}
