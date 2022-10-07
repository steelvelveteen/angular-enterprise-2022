import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  public toggleSidenav$: Subject<boolean> = new Subject();
  public collapseSidenav$: Subject<boolean> = new Subject();
  public expandSidenav$: Subject<boolean> = new Subject();
  public changeHeaderTitle$: Subject<string> = new Subject();

  toggleSidenav = (): void => {
    this.toggleSidenav$.next(true);
  };

  collapseSidenav = (): void => {
    this.collapseSidenav$.next(true);
  };

  expandSidenav = (): void => {
    this.expandSidenav$.next(true);
  };

  adjustHeaderTitle = (title: string) => this.changeHeaderTitle$.next(title);
}
