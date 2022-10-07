import { animate, state, style, transition, trigger } from '@angular/animations';
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
      state(
        'initial',
        style({ height: '0', opacity: '0', overflow: 'hidden', visibility: 'hidden' })
      ),
      state('final', style({ overflow: 'hidden' })),
      transition('initial <=> final', animate('300ms')),
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