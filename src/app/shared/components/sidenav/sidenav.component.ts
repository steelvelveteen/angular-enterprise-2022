import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Observer } from 'rxjs';
import { UiService } from 'src/app/core/services/ui/ui.service';
import { RouteInfo, ROUTES } from './nav-data';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  username = 'Joey Vico';
  routes = ROUTES;
  collapsed = false;
  submenuExpanded = false;
  time = new Observable<string>((observer: Observer<string>) => {
    setInterval(() => observer.next(new Date().toString()), 1000);
  });

  constructor(private uiService: UiService, private router: Router) {}

  handleNavClick = (route: RouteInfo) => {
    this.submenuExpanded = !this.submenuExpanded;
    if (!route.children) {
      this.router.navigate([`${route.routerLink}`]);
    } else {
      this.submenuExpanded = true;
    }
  };
  adjustHeaderTitle = (route: RouteInfo) => {
    this.uiService.changeHeaderTitle$.next(route.label);
  };

  ngOnInit() {
    this.uiService.toggleSidenav$.subscribe(() => {
      this.collapsed = !this.collapsed;
    });
  }
}
