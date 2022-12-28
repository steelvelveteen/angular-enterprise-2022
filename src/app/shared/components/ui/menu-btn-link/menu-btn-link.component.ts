import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UiService } from 'src/app/core/services/ui/ui.service';
import RouteInfo from 'src/app/shared/domain/interfaces/route-info';
import { slideInOut } from '../animations';

@Component({
  selector: 'app-menu-btn-link',
  templateUrl: './menu-btn-link.component.html',
  styleUrls: ['./menu-btn-link.component.scss'],
  animations: [slideInOut],
})
export class MenuBtnLinkComponent {
  @Input() collapsed!: boolean;
  @Input() route: RouteInfo = {
    label: '',
    routerLink: '',
    icon: '',
  };
  submenuExpanded!: boolean;
  @Input() isChild = false;

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
