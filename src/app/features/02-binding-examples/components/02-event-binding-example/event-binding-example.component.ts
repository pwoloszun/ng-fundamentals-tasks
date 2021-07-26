import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nts-event-binding-example',
  templateUrl: './event-binding-example.component.html',
  styleUrls: ['./event-binding-example.component.css']
})
export class EventBindingExampleComponent implements OnInit {
  // public API
  value = 0;
  message = 'a qq!';

  increment(n: number, msg: string) {
    console.log('inc', n, msg);

    this.value += 1;
  }

  decrement() {
    this.value -= 1;
  }

  ngOnInit() {
  }
}
