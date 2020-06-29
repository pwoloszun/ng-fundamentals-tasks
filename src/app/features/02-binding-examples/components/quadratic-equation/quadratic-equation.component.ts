import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nts-quadratic-equation',
  templateUrl: './quadratic-equation.component.html',
  styleUrls: ['./quadratic-equation.component.css']
})
export class QuadraticEquationComponent implements OnInit {

  a: number;
  b: number;
  c: number;

  ngOnInit() {
    this.a = 2;
    this.b = 8;
    this.c = -10;
  }

}
