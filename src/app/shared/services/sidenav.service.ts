import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SidenavService {
  public toggleSidenav$: Subject<boolean> = new Subject();

  toggleSidenav = (): void => {
    this.toggleSidenav$.next(true);
  };
}
