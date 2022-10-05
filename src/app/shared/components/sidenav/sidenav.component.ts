import { Component } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { NavData } from './nav-data';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent {
  username = 'Joey Vico';
  navData = NavData;
  collapsed = false;

  time = new Observable<string>((observer: Observer<string>) => {
    setInterval(() => observer.next(new Date().toString()), 1000);
    setTimeout(() => {
      this.collapsed = !this.collapsed;
    }, 5000);
  });
}
