import { Component, Input } from '@angular/core';
import RouteInfo from 'src/app/shared/domain/interfaces/route-info';
import { slideInOut } from '../animations';

@Component({
  selector: 'app-header-notifications-menu',
  templateUrl: './header-notifications-menu.component.html',
  styleUrls: ['./header-notifications-menu.component.scss'],
  animations: [slideInOut],
})
export class HeaderNotificationsMenuComponent {
  @Input() isShowMenu = false;
  @Input() menu: RouteInfo[] = [];
}
