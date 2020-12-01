import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { of } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, mergeMap, exhaustMap } from 'rxjs/operators';

import { SearchApiService } from '@api/search-api.service';

@Component({
  selector: 'nts-my-search',
  templateUrl: './my-search.component.html',
  styleUrls: ['./my-search.component.css']
})
export class MySearchComponent {

  searchText = new FormControl('');

  constructor(private searchApiService: SearchApiService) {
  }

}
