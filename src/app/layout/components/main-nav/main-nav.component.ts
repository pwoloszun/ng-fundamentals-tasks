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

    // { text: 'Pipes', url: '/pipes-examples' },
    // { text: 'DI', url: '/di-examples' },
    // { text: 'Forms', url: '/my-forms' },
    { text: 'Forms tasks', url: '/forms-tasks' },
    { text: 'Dynamic Comp.', url: '/dynamic-components' },
    { text: 'Custom Directives', url: '/custom-directives' },
    { text: 'Content Projection', url: '/content-projection' },
    { text: 'DI, providers', url: '/di-providers-examples' },

    { text: 'RxJS GUI tasks', url: '/rxjs-gui-tasks' },
    { text: 'RxJS GitHub repos', url: '/rxjs-github-repos' },
  ];

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map((result) => result.matches));

  constructor(private breakpointObserver: BreakpointObserver) {}
}
