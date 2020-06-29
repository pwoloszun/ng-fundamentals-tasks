import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'nts-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css'],
})
export class MainNavComponent {
  mainMenuLinks = [
    { text: 'Dashboard', url: '/' },
    { text: 'Comp. Basics', url: '/component-basics' },
    { text: 'Bindings', url: '/binding-examples' },
    { text: 'Inputs/Outputs', url: '/inputs-outputs-examples' },
    { text: 'Todos', url: '/todos' },
    { text: 'Heroes', url: '/heroes' },
    { text: 'Citites', url: '/cities' },
    { text: 'Real Estates', url: '/real-estates' },

  ];

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map((result) => result.matches));

  constructor(private breakpointObserver: BreakpointObserver) { }
}
