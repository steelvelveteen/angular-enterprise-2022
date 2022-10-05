import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { UiService } from 'src/app/core/services/ui/ui.service';
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

  constructor(private uiService: UiService) {}

  ngOnInit() {
    this.uiService.toggleSidenav$.subscribe(() => {
      this.collapsed = !this.collapsed;
    });
  }
}
