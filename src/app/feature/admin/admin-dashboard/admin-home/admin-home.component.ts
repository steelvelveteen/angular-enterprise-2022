import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss'],
})
export class AdminHomeComponent {
  authUserName$: Observable<string>;
  constructor() {
    this.authUserName$ = of('Joey Vico');
  }
}
