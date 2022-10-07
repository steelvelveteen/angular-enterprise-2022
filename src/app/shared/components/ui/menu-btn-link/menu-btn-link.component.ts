import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UiService } from 'src/app/core/services/ui/ui.service';
import { RouteInfo } from '../../sidenav/nav-data';

@Component({
  selector: 'app-menu-btn-link',
  templateUrl: './menu-btn-link.component.html',
  styleUrls: ['./menu-btn-link.component.scss'],
})
export class MenuBtnLinkComponent {
  @Input() collapsed!: boolean;
  @Input() route: RouteInfo = {
    label: '',
    routerLink: '',
    icon: '',
  };

  submenuExpanded = false;

  constructor(private router: Router, private uiService: UiService) {}

  handleNavClick = (route: RouteInfo) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    this.submenuExpanded ? (this.submenuExpanded = false) : (this.submenuExpanded = false);
    if (!route.children) {
      this.router.navigate([`${route.routerLink}`]);
    } else {
      this.submenuExpanded = true;
    }
  };

  adjustHeaderTitle = (route: RouteInfo) => {
    this.uiService.changeHeaderTitle$.next(route.label);
  };
}
