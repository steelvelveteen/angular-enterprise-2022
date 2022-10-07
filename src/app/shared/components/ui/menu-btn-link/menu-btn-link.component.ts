import { animate, style, transition, trigger } from '@angular/animations';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UiService } from 'src/app/core/services/ui/ui.service';
import { RouteInfo } from '../../sidenav/nav-data';

@Component({
  selector: 'app-menu-btn-link',
  templateUrl: './menu-btn-link.component.html',
  styleUrls: ['./menu-btn-link.component.scss'],
  animations: [
    trigger('enterAnimation', [
      transition(':enter', [style({ height: 0 }), animate('100ms', style({ height: '*' }))]),
      transition(':leave', [animate('100ms', style({ height: 0 }))]),
    ]),
  ],
})
export class MenuBtnLinkComponent {
  @Input() collapsed!: boolean;
  @Input() route: RouteInfo = {
    label: '',
    routerLink: '',
    icon: '',
  };
  submenuExpanded!: boolean;

  constructor(private router: Router, private uiService: UiService) {}

  handleNavClick = (route: RouteInfo) => {
    this.submenuExpanded = !this.submenuExpanded;

    if (!route.children) {
      this.router.navigate([`${route.routerLink}`]);
    }
  };

  adjustHeaderTitle = (route: RouteInfo) => {
    this.uiService.changeHeaderTitle$.next(route.label);
  };
}
