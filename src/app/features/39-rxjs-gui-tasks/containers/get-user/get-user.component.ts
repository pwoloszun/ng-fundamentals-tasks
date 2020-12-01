import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { catchError, finalize } from 'rxjs/operators';

import { ErrorModalComponent } from '@shared/error-modal/error-modal.component';
import { FakeApiService } from '@api/fake-api.service';
import { fullObserver } from '@app/utils';

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
    // TODO
  }

  private openErrorSnackBar(message: string, durationInSeconds: number) {
    const duration = durationInSeconds * 1000;
    this.matSnackBar.openFromComponent(ErrorModalComponent, {
      data: { message, duration },
      duration,
    });
  }

}
