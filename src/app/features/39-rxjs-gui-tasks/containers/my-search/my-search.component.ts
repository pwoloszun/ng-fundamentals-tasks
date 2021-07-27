import { Component, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { of, Subscription } from 'rxjs';
import {
  debounceTime, distinctUntilChanged, switchMap, mergeMap, exhaustMap, delay,
  mergeAll, switchAll, filter, map
} from 'rxjs/operators';

import { SearchApiService } from '@api/search-api.service';

@Component({
  selector: 'nts-my-search',
  templateUrl: './my-search.component.html',
  styleUrls: ['./my-search.component.css']
})
export class MySearchComponent {

  searchTextCtrl = new FormControl('');

  searchResults$ = this.searchTextCtrl.valueChanges.pipe(
    debounceTime(600),
    filter((query) => query.length >= 2),
    distinctUntilChanged(),
    map((query) => this.searchApiService.querySearch$(query)),
    switchAll()
  );

  constructor(private searchApiService: SearchApiService) {
  }

}
