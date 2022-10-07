import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Observer } from 'rxjs';
import { UiService } from 'src/app/core/services/ui/ui.service';
import { ROUTES } from './nav-data';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  username = 'Joey Vico';
  routes = ROUTES;
  collapsed = false;
  time = new Observable<string>((observer: Observer<string>) => {
    setInterval(() => observer.next(new Date().toString()), 1000);
  });

  constructor(private uiService: UiService, private router: Router) {}

  ngOnInit() {
    this.uiService.toggleSidenav$.subscribe(() => {
      this.collapsed = !this.collapsed;
    });

    this.uiService.collapseSidenav$.subscribe(() => {
      this.collapsed = true;
    });

    this.uiService.expandSidenav$.subscribe(() => {
      this.collapsed = false;
    });

    window.addEventListener('resize', (event: any) => {
      if (event.target.innerWidth < '960') {
        this.collapsed = true;
        this.uiService.collapseSidenav();
      } else {
        this.collapsed = false;
        this.uiService.expandSidenav();
      }
    });
  }
}
