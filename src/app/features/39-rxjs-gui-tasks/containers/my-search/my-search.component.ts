import { Component, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { of, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, mergeMap, exhaustMap, delay } from 'rxjs/operators';

import { SearchApiService } from '@api/search-api.service';

@Component({
  selector: 'nts-my-search',
  templateUrl: './my-search.component.html',
  styleUrls: ['./my-search.component.css']
})
export class MySearchComponent implements OnDestroy {

  searchTextCtrl = new FormControl('');

  // TODO
  searchResults$ = of([
    'bob',
    'batman',
    'imba!'
  ]).pipe(
    delay(1500)
  );

  // results: string[];

  // private subscriptions: Subscription[] = [];

  constructor(private searchApiService: SearchApiService) {
    // const sub = this.searchResults$.subscribe(
    //   (val) => this.results = val
    // );
    // this.subscriptions.push(sub);
  }

  ngOnDestroy() {
    //   this.subscriptions.forEach((s) => s.unsubscribe());
  }

}
