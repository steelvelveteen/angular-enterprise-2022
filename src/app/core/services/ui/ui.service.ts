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
  toggleBodyWidth$: Subject<boolean> = new Subject();

  trimBodyWidth$: Subject<boolean> = new Subject();
  expandBodyWidth$: Subject<boolean> = new Subject();

  toggleSidenav = (): void => {
    this.toggleSidenav$.next(true);
  };

  collapseSidenav = (): void => {
    this.collapseSidenav$.next(true);
  };

  expandSidenav = (): void => {
    this.expandSidenav$.next(true);
  };

  toggleBodyWidth = (): void => {
    this.toggleBodyWidth$.next(true);
  };

  trimBody = (): void => {
    this.trimBodyWidth$.next(true);
  };

  expandBody = (): void => {
    this.expandBodyWidth$.next(true);
  };

  adjustHeaderTitle = (title: string) => this.changeHeaderTitle$.next(title);
}
