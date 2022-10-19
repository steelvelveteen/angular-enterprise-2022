import { Component } from '@angular/core';
import { catchError, delay, Observable, of, tap } from 'rxjs';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss'],
})
export class ProfileCardComponent {
  profileUserName$: Observable<string>;
  profileUserNameError$: Observable<string>;

  constructor() {
    this.profileUserName$ = of('Joey Vico').pipe(
      delay(2000),
      tap(() => {
        throw new Error('Could not fetch user data');
      })
    );

    this.profileUserNameError$ = this.profileUserName$.pipe(catchError(err => of(err)));
  }
}
