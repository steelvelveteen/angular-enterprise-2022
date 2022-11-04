import { Injectable } from '@angular/core';
import { catchError, delay, ignoreElements, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  profileUserName$: Observable<string>;
  profileUserNameError$: Observable<string>;

  constructor() {
    this.profileUserName$ = of('Joey Vico').pipe(
      delay(2000),
      tap(() => {
        // throw new Error('Could not fetch user data');
      })
    );

    this.profileUserNameError$ = this.profileUserName$.pipe(
      ignoreElements(),
      catchError(err => of(err))
    );
  }
}
