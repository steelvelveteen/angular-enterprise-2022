import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { SidenavService } from '../../services/sidenav.service';
import { NavData } from './nav-data';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  username = 'Joey Vico';
  navData = NavData;
  collapsed = false;
  time = new Observable<string>((observer: Observer<string>) => {
    setInterval(() => observer.next(new Date().toString()), 1000);
  });

  constructor(private sidenavService: SidenavService) {}

  ngOnInit() {
    this.sidenavService.toggleSidenav$.subscribe(() => {
      this.collapsed = !this.collapsed;
    });
  }
}
