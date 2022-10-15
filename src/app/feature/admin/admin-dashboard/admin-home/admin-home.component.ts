import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss'],
})
export class AdminHomeComponent {
  profileUserName$: Observable<string>;
  constructor() {
    this.profileUserName$ = of('Joey Vico');
  }
}
