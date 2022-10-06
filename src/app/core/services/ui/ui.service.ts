import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  public toggleSidenav$: Subject<boolean> = new Subject();
  public changeHeaderTitle$: Subject<string> = new Subject();

  toggleSidenav = (): void => {
    this.toggleSidenav$.next(true);
  };

  adjustHeaderTitle = (title: string) => this.changeHeaderTitle$.next(title);
}
