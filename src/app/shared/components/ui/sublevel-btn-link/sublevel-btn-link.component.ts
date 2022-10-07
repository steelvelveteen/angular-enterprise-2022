import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { RouteInfo } from '../../sidenav/nav-data';

@Component({
  selector: 'app-sublevel-btn-link',
  templateUrl: './sublevel-btn-link.component.html',
  styleUrls: ['./sublevel-btn-link.component.scss'],
})
export class SublevelBtnLinkComponent {
  @Input() route!: RouteInfo;

  constructor(private router: Router) {}

  handleNavClick = (route: RouteInfo) => {
    this.router.navigate([`${route.routerLink}`]);
  };
}
