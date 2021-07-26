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

  people = [
    { id: 100, name: 'bob' },
    { id: 200, name: 'ed' },
    { id: 300, name: 'kate' },

  ];

  personClick(per: any) {
    console.log('person', per);
  }

  ngOnInit() {
    // this.name = 'qq';
  }

}
