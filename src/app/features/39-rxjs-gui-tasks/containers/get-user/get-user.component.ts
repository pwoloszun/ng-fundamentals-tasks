import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, finalize, map, retry, switchMap } from 'rxjs/operators';

import { ErrorModalComponent } from '@shared/error-modal/error-modal.component';
import { FakeApiService } from '@api/fake-api.service';
import { fullObserver } from '@app/utils';
import { NEVER, of } from 'rxjs';

@Component({
  selector: 'nts-get-user',
  templateUrl: './get-user.component.html',
  styleUrls: ['./get-user.component.css']
})
export class GetUserComponent {

  isLoading = false;

  constructor(
    private fakeApiService: FakeApiService,
    private matSnackBar: MatSnackBar
  ) {
  }

  handleDownloadUser() {
    this.fakeApiService.failedRequest$('/user/100', 'Cant find User with ID=100').pipe(
      retry(2),
      catchError((err) => {
        this.openErrorSnackBar(err.message, 5);
        return this.handleError$(err);
      })
    ).subscribe(fullObserver('get user'));
  }

  private handleError$(error: Error) {
    return this.fakeApiService.successfulRequest$('/log/error').pipe(
      switchMap(() => NEVER)
    )
  }

  private openErrorSnackBar(message: string, durationInSeconds: number) {
    const duration = durationInSeconds * 1000;
    this.matSnackBar.openFromComponent(ErrorModalComponent, {
      data: { message, duration },
      duration,
    });
  }

}
