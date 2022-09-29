import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
// import { of } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-enterprise-2022';

  constructor() {
    const obs = new Observable();
    console.log(obs);
    const other = of(1, 2, 3);
    other.subscribe((response) => console.log(response));
  }
}
