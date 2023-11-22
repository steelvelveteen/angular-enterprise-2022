import { Injectable, signal } from '@angular/core';
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

  isBodyCollapsed = signal<boolean | undefined>(undefined);

  toggleSidenav = (): void => {
    this.toggleSidenav$.next(true);
    this.toggleBodyWidth$.next(true);
  };

  collapseSidenav = (fromHover?: boolean): void => {
    this.collapseSidenav$.next(true);
    if (!fromHover) this.trimBodyWidth$.next(true);
  };

  expandSidenav = (fromHover?: boolean): void => {
    this.expandSidenav$.next(true);
    if (!fromHover) this.expandBodyWidth$.next(true);
  };

  toggleBodyWidth = (): void => {
    this.toggleBodyWidth$.next(true);
  };

  adjustHeaderTitle = (title: string) => this.changeHeaderTitle$.next(title);
}
